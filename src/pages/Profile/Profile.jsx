import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import headshot from '../../assets/images/Headshot_2.jpg'
import { withAuthenticator } from '@aws-amplify/ui-react';
import "./Profile.css";

const user = {
    name: 'Keenan Long',
    avatar: headshot,
    bio: 'Mountain biking enthusiast. Exploring new trails and sharing my adventures.',
    location: 'Columbia, MD',
    language: 'English',
    currency: 'USD',
};

function Profile () {
    return (
    // <div style={styles.container}>
    //     <div style={styles.header}>
    //         <img src={user.avatar} alt="Avatar" style={styles.avatar} />
    //         <div>
    //             <h2>{user.name}</h2>
    //             <p style={styles.location}>{user.location}</p>
    //         </div>
    //     </div>
    //     <p style={styles.bio}>{user.bio}</p>
    //     <button style={styles.button}>Edit Profile</button>
    // </div>
    <div>
        <NavBar></NavBar>
        <div className="profile">
            <div className="profile_header">
                <img src={user.avatar} alt="Avatar" style={styles.avatar} />
                <h2>{user.name}</h2> 
            </div>
            <div className="profile_text">
                <h3>Profile info:</h3>
            </div>
            <div className="profile_info">
                <div className="profile_columns">
                        <p><strong>Location:</strong> {user.location}</p>
                        <p><strong>Language:</strong> {user.language}</p>
                        <p><strong>Currency:</strong> {user.currency}</p>
                </div>
            </div>
            <button className="edit_profile_btn">Edit Profile</button>
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

export default withAuthenticator(Profile)