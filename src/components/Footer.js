import { Link } from "react-router-dom"

export default function Footer () {
    return (
    <div class="footer">
      <div class="footer_container">
        {/* <a href="../index.html" id="navbar_logo"
          ><i class="fas fa-globe"></i>
          <p>&nbsp;</p>
          MTB Traveler
        </a> */}
        {/* Todo: need to add globe */}
        <Link to="/home" id="navbar_logo">MTB Traveler</Link> 
        <p>&copy; MTB Traveler 2024. All Right Reserved</p>
        <Link to="/about" id="about_us">About Us</Link>
        {/* <a href="About.html" id="about_us">About Us</a> */}
      </div>
    </div>
    )
}