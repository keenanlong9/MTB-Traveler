import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { signOut, getCurrentUser } from '@aws-amplify/auth'
import ProfileIcon from '../../assets/images/Profile-Icon.png'
import "./NavBar.css"

export default function NavBar () {
  const [menuActive, setMenuActive] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch user on component mount
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    }
  };

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
      console.log('User signed out');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  // const handleSignIn = async () => {
  //   try {
  //     await signInWithRedirect(); // This redirects to Cognito Hosted UI
  //   } catch (error) {
  //     console.log('Error during sign-in:', error);
  //   }
  // };


    return (  
      <nav className="navbar">
        <div className="navbar_container">
          <Link to="/home" id="navbar_logo"><i className="fas fa-globe"></i>
          <span style={{ paddingLeft: "5px" }}>MTB Traveler</span></Link> 
          <div className={`navbar_toggle ${menuActive ? "is-active" : ""}`}
          onClick={handleMenuToggle}
          id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`navbar_menu ${menuActive ? "active" : ""}`}>
            <li className="navbar_item">
              <Link to="/currency" className="navbar_links">Currency Converter</Link> 
            </li>
            <li className="navbar_item">
              <Link to="/language" className="navbar_links">Language Translator</Link>
            </li>
            <li>
              <Link to="/profile" className="navbar_links"><img className="navbar_profile" src={ProfileIcon} alt="Profile Icon"></img></Link>
            </li>
            <li className="navbar_item-btn">
              {/* TODO: Change this to only signin and not redirect to profile page */}
              {user ? 
              (
                  <button className="navbar_item-btn" onClick={handleSignOut}>Sign Out</button>
              ) 
              : 
              (
                  <Link to="/profile" className="navbar_item-btn">Sign In</Link>
                  // <button className="navbar_item-btn" onClick={handleSignIn}>Sign In</button>

              )}
            </li>
          </ul>
        </div>
      </nav>
    )
}