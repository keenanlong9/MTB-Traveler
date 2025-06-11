import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { signOut, signIn, getCurrentUser } from '@aws-amplify/auth'
import "./NavBar.css"

export default function NavBar () {
  const [menuActive, setMenuActive] = useState(false);
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ username: '', password: '' });

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  const handleSignIn = async () => {
    try {
      const signedInUser = await signIn({
        username: form.username,
        password: form.password,
      });
      setUser(signedInUser);
      console.log('User signed in');
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

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
            <li className="navbar_item-btn">
              {user ? 
              (<button className="navbar_item-btn" onClick={handleSignOut}>Sign Out</button> ) 
              : (<div>
                <input
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />
              <button className="navbar_item-btn" onClick={handleSignIn}>Sign In</button>
              </div>)}
            </li>
          </ul>
        </div>
      </nav>
    )
}