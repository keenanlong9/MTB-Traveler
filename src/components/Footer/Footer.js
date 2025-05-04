import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer () {
    return (
    <div className="footer">
      <div className="footer_container">
        <Link to="/home" id="navbar_logo">
          <i className="fas fa-globe"></i>
          <span style={{ paddingLeft: "5px" }}>MTB Traveler</span>
        </Link> 
        <p>&copy; MTB Traveler 2024. All Right Reserved</p>
        <Link to="/about" id="about_us">About Us</Link>
      </div>
    </div>
    )
}