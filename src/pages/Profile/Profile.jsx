import { useState, useEffect } from "react";
import Select from "react-select";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { DataStore } from "aws-amplify/datastore";
import { UserProfile, Destination, UserProfileDestination } from "../../models";
import { getCurrentUser } from "aws-amplify/auth";
import { uploadData, getUrl } from 'aws-amplify/storage';
import '@aws-amplify/ui-react/styles.css';
import "./Profile.css";

function Profile () {
    const [profile, setProfile] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [optionsAdd, setOptionsAdd] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Upload image
    const uploadProfileImage = async (file) => {
        try {
            const currentUser = await getCurrentUser();
            const userId = currentUser.username.trim();
            const key = `profile-images/${userId}.jpg`;

            const result = await uploadData({
                key,
                data: file,
                options: {
                    contentType: file.type,
                    accessLevel: 'protected', // ensures only the user can access
                },
            });

            const completedResult = await result.result;
            console.log('Upload completed:', completedResult);
            return completedResult.key; // Store this in profile.profileImage
        } catch (err) {
            console.error("Error uploading image:", err);
        }
    };

    // Retrieve image URL
    const getProfileImageUrl = async (key) => {
        console.log("Fetching image URL for key:", key);
        const { url } = await getUrl({
            key,
            options: { accessLevel: 'protected' }
        });
        return url;
    };

    useEffect(() => {
    const fetchImage = async () => {
        if (profile?.profileImage) {
        try {
            console.log("Fetching profile image for:", profile);
            const url = await getProfileImageUrl(profile.profileImage);
            setAvatarUrl(url);
        } catch (err) {
            console.error("Error fetching profile image:", err);
        }
        }
    };
    fetchImage();
    }, [profile]);


    useEffect(() => {
    const initProfile = async () => {
        const user = await getCurrentUser();
        const userId = user.username.trim();
        console.log("Current user ID:", userId);

        await DataStore.start();

        // Add a short delay to allow sync engine to warm up
        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
        const results = await DataStore.query(UserProfile, c => c.owner.eq(userId));
        let existing = results.length > 0 ? results[0] : null;
        console.log("Existing profile:", existing);

        if (!existing) {
            console.log("No profile found, creating...");
            const newProfile = {
                owner: userId,
                name: '',
                Location: '',
                Language: '',
                Currency: '',
                profileImage: '',
            };
            console.log("New profile data:", newProfile);
            existing = await DataStore.save(new UserProfile(newProfile));
            console.log("Profile created:", existing);
        }

        setProfile(existing);
        console.log("Profile set:", existing);
    } catch (error) {
        console.error("Failed to fetch or create profile:", error);
    }
    };

    initProfile();
    }, []);

    const updateProfile = async (data) => {
        const user = await getCurrentUser();
        const userId = user.username.trim();
        console.log("Updating profile with data:", data);
        if (!profile?.id) return;
        const current = await DataStore.query(UserProfile, profile.id);
        if (current.owner !== userId) {
            console.warn("Current user does not own this item");
            return;
        }
        if (!current) return console.warn("Profile not found");
        console.log("Current profile before update:", current);

        const updated = await DataStore.save(
            UserProfile.copyOf(current, updated => {
                updated.name = data.name;
                updated.Location = data.location;
                updated.Language = data.language;
                updated.Currency = data.currency;
                updated.profileImage = data.profileImage;
            })
        );
        const refreshed = await DataStore.query(UserProfile, updated.id);
        setProfile(refreshed);
        console.log("Profile updated1:", updated);
    };

    //Popup Test
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        location: '',
        language: '',
        currency: '',
        profileImage: '',
    });

    const [formData, setFormData] = useState(userData);

    const openPopup = () => {
        if (profile) {
            setFormData({
                name: profile.name || '',
                location: profile.Location || '',
                language: profile.Language || '',
                currency: profile.Currency || '',
                profileImage: profile.profileImage || '',
            });
            
        }
        setIsOpen(true);
    }
    const closePopup = () => setIsOpen(false);

    const openPopupAdd = async () => {
        const current = await DataStore.query(Destination);
        console.log("Current destinations:", current);
        const options = current.map(dest => ({
            value: dest.Location,
            label: dest.Location
        }));

        setOptionsAdd(options);
        // Get previously selected destinations
        const links = await DataStore.query(UserProfileDestination, c =>
            c.userProfileID.eq(profile.id)
        );
        const previouslySelected = links.map(link =>
            current.find(dest => dest.id === link.destinationID)
        ).filter(Boolean);


        // Preselect them in react-select
        const preselected = previouslySelected.map(dest => ({
            value: dest.Location,
            label: dest.Location
        }));
        setSelectedOptions(preselected); // this becomes the Select's `value`
        setIsOpenAdd(true);
        }

    const closePopupAdd = async () => {
        console.log("Selected options:", selectedOptions);
        const selectedDestinationNames = selectedOptions.map(option => option.value);

        const allDestinations = await DataStore.query(Destination);
        const selectedDestinations = allDestinations.filter(dest =>
            selectedDestinationNames.includes(dest.Location)
        );

        // Get existing links
        const existingLinks = await DataStore.query(UserProfileDestination, c =>
            c.userProfileID.eq(profile.id)
        );

        // Determine which links to add and which to remove
        const existingDestinationIDs = new Set(existingLinks.map(link => link.destinationID));
        const selectedDestinationIDs = new Set(selectedDestinations.map(dest => dest.id));

        const toAdd = selectedDestinations.filter(dest => !existingDestinationIDs.has(dest.id));
        const toRemove = existingLinks.filter(link => !selectedDestinationIDs.has(link.destinationID));

        // Add new links
        for (const dest of toAdd) {
            await DataStore.save(new UserProfileDestination({
                userProfileID: profile.id,
                destinationID: dest.id,
            }));
        }

        // Remove deselected links
        for (const link of toRemove) {
            await DataStore.delete(link);
        }

        // Refresh wishlist
        const updatedLinks = await DataStore.query(UserProfileDestination, c =>
            c.userProfileID.eq(profile.id)
        );
        const updatedWishlist = [];
        for (const link of updatedLinks) {
            const destination = await DataStore.query(Destination, link.destinationID);
            if (destination) updatedWishlist.push(destination);
        }

        setWishlist(updatedWishlist);
        setIsOpenAdd(false);
    };

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const fetchWishlist = async () => {
            if (profile?.id) {
                const links = await DataStore.query(UserProfileDestination, c =>
                c.userProfileID.eq(profile.id)
            );
            const results = [];
            for (const link of links) {
                const dest = await DataStore.query(Destination, link.destinationID);
                if (dest) results.push(dest);
            }
            setWishlist(results);
            }
        };

        fetchWishlist();
    }, [profile]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(formData);
        updateProfile(formData);
        closePopup();
    };

   const handleChangeWishList = (options) => {
        setSelectedOptions(options);
    };

    return (
    <div>
        <NavBar></NavBar>
        <div className="profile">
            <div className="profile_header">
                {avatarUrl ? (
                    <img src={avatarUrl} alt="Avatar" className="profile_avatar" />
                ): (
                  <div className="avatar_fallback">Avatar</div>  
                )}
                <h2>{profile?.name}</h2>  
            </div>
            <div className="profile_text">
                <h3>Profile info:</h3>
            </div>
            <div className="profile_info">
                <div className="profile_columns">
                        <p><strong>Location:</strong> {profile?.Location}</p>
                        <p><strong>Language:</strong> {profile?.Language}</p>
                        <p><strong>Currency:</strong> {profile?.Currency}</p>
                </div>
            </div>
            <button className="profile-btns" onClick={openPopup}>Edit Profile</button>

            {isOpen && (
                <div className="popup_overlay">
                <div className="popup_content">
                    <h3>Edit User</h3>
                    <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <span   style={{ padding: '5px' }}></span> 
                        <input 
                        type="text" 
                        name="name" 
                        placeholder={profile?.name || 'John Doe'}
                        value={formData.name} 
                        onChange={handleChange} 
                        />
                    </label>
                    <br/>
                    <label>
                        Location: 
                        <span   style={{ padding: '5px' }}></span>
                        <input 
                        type="text" 
                        name="location"
                        placeholder={profile?.Location || 'New York, USA'} 
                        value={formData.location} 
                        onChange={handleChange} 
                        />
                    </label>
                    <br/>
                    <label>
                        Language:
                        <span   style={{ padding: '5px' }}></span> 
                        <input 
                        type="text" 
                        name="language" 
                        placeholder={profile?.Language || 'English'}
                        value={formData.language} 
                        onChange={handleChange} 
                        />
                    </label>
                    <br/>
                    <label>
                        Currency:
                        <span   style={{ padding: '5px' }}></span> 
                        <input 
                        type="text" 
                        name="currency" 
                        placeholder={profile?.Currency || "USD"}
                        value={formData.currency}  
                        onChange={handleChange} 
                        />
                    </label>
                    <br/>
                    <label>
                        Profile Image:
                        <span   style={{ padding: '5px' }}></span> 
                        <input
                        type="file"
                        name="profileImage"
                        accept="image/*"
                        onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            console.log("Uploading file:", file);
                            uploadProfileImage(file).then((key) => {
                            setFormData((prev) => ({
                                ...prev,
                                profileImage: key
                            }));

                            // Also update the preview immediately
                            console.log("Passing image URL for key:", key);
                            getProfileImageUrl(key).then(setAvatarUrl);
                            });
                        }
                        }}
                        />
                    </label>
                    <br/>
                    <button type="submit">Save</button>
                    <span   style={{ padding: '10px' }}></span>
                    <button type="button" onClick={closePopup}>Cancel</button>
                    </form>
                </div>
                </div>
            )}

            {isOpenAdd && (
                <div className="popup_overlay">
                <div className="popup_content">
                    <h3>Add Destinations to Wishlist</h3>
                    <Select options={optionsAdd} isMulti={true} className="destination_select" 
                    onChange={handleChangeWishList} value={selectedOptions}/>
                    <button type="button" onClick={closePopupAdd}>Save</button>
                </div>
                </div>
            )}

            <div className="destination_list_header">
                <h3>Destination Wish List:</h3>
                <button className="profile-btns" onClick={openPopupAdd}>Add +</button>
            </div>
            <div className="destination_grid">
                {/* Header row */}
                <div className="grid-row header">
                <div><p><strong>Location</strong></p></div>
                <div><p><strong>Language</strong></p></div>
                <div><p><strong>Currency</strong></p></div>
                </div>

                {/* Data rows */}
                {wishlist.map((dest, index) => (
                    <div key={index} className="grid-row">
                    <div><p>{dest.Location}</p></div>
                    <div><p>{dest.Language}</p></div>
                    <div><p>{dest.Currency}</p></div>
                    </div>
                ))}
            </div>
        </div>
        <Footer></Footer>
    </div>
);
}

export default withAuthenticator(Profile)