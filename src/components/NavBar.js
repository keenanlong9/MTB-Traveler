import { Link } from "react-router-dom"
import { useState } from "react"

export default function NavBar () {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
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
          </ul>
        </div>
      </nav>
    )
}