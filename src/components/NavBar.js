import { Link } from "react-router-dom"

export default function NavBar () {
    return (
    <nav class="navbar">
      <div class="navbar_container">
        {/* <a href="../index.html" id="navbar_logo"
          ><i class="fas fa-globe"></i>
          <p>&nbsp;</p>
          MTB Traveler
        </a> */}
        <Link to="/home" id="navbar_logo">MTB Traveler</Link> 
        <div class="navbar_toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="navbar_menu">
          <li class="navbar_item">
            <Link to="/currency" class="navbar_links">Currency Converter</Link> 
            {/* <a href="Currency.html" class="navbar_links">Currency Converter</a> */}
          </li>
          <li class="navbar_item">
            <Link to="/language" class="navbar_links">Language Translator</Link> 
            {/* <a href="Language.html" class="navbar_links">Language Translator</a> */}
          </li>
        </ul>
      </div>
    </nav>
    )
}