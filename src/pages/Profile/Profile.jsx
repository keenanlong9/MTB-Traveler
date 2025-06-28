import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import headshot from '../../assets/images/Headshot_2.jpg'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { DataStore } from "aws-amplify/datastore";
import { UserProfile, Destination } from "../../models";
import { getCurrentUser } from "aws-amplify/auth";
import { uploadData, getUrl } from 'aws-amplify/storage';
import '@aws-amplify/ui-react/styles.css';
import "./Profile.css";

function Profile () {
    const [profile, setProfile] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);
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

        // 1. Check if profile exists
        const results = await DataStore.query(UserProfile, c => c.owner.eq(userId));
        let existing = results[0];
        console.log("Existing profile:", existing);
        
        // 2. If not, create one
        if (!existing) {
        console.log("No profile found, creating...");
        const newProfile = {
            owner: userId,
            name: '',
            Location: '',
            Language: '',
            Currency: '',
            profileImage: '',
        }
        console.log("New profile data:", newProfile);
        try {
            existing = await DataStore.save(new UserProfile(newProfile));
            console.log("Profile created:", existing);
        } catch (error) {
            console.warn("Profile creation failed, maybe already exists:", error);
            }
        }

        // 3. Set profile state
        setProfile(existing);
        console.log("Profile set:", existing);
    };

    initProfile();
    }, []);

    const updateProfile = async (data) => {
        const user = await getCurrentUser();
        const userId = user.username.trim();
        console.log("Updating profile with data:", data);
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
        setProfile(updated);

        console.log("Profile updated:", updated);
    };

    //Popup Test
    const [isOpen, setIsOpen] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        location: '',
        language: '',
        currency: '',
        profileImage: '',
        destinations: [],
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


    return (
    <div>
        <NavBar></NavBar>
        <div className="profile">
            <div className="profile_header">
                <img src={avatarUrl} alt="Avatar" style={styles.avatar} />
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
            <button className="edit_profile_btn" onClick={openPopup}>Edit Profile</button>

            {isOpen && (
                <div style={popupStyle}>
                <div style={popupContentStyle}>
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

            <div className="destination_list_header">
                <h3>Destinations Wish List:</h3>
                <button className="add_destination_list_btn">Add +</button>
            </div>
            <div className="destination_list">
                <div className="destination_columns">
                    <p><strong>Location</strong></p>
                    <p><strong>Language</strong></p>
                    <p><strong>Currency</strong></p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
);
}

// Styling for the Profile component
const styles = {
    container: {
        maxWidth: 400,
        margin: '40px auto',
        padding: 24,
        borderRadius: 12,
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        fontFamily: 'sans-serif',
        color: '#3c4043',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: '50%',
        marginRight: 20,
        objectFit: 'cover',
    },
    location: {
        color: '#888',
        margin: 0,
    },
    bio: {
        margin: '16px 0',
        color: '#444',
    },
    stats: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '24px 0',
        textAlign: 'center',
    },
    button: {
        width: '100%',
        padding: '10px 0',
        background: '#4caf50',
        color: '#fff',
        border: 'none',
        borderRadius: 6,
        fontSize: 16,
        cursor: 'pointer',
    },
};

// Simple inline styles
const popupStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

const popupContentStyle = {
  background: 'white',
  padding: '20px',
  borderRadius: '8px',
  minWidth: '300px',
};

export default withAuthenticator(Profile)