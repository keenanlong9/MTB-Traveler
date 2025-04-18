
export default function NavBar () {
    return (
    <nav class="navbar">
      <div class="navbar_container">
        <a href="../index.html" id="navbar_logo"
          ><i class="fas fa-globe"></i>
          <p>&nbsp;</p>
          MTB Traveler
        </a>
        <div class="navbar_toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="navbar_menu">
          <li class="navbar_item">
            <a href="Currency.html" class="navbar_links">Currency Converter</a>
          </li>
          <li class="navbar_item">
            <a href="Language.html" class="navbar_links">Language Translator</a>
          </li>
        </ul>
      </div>
    </nav>
    )
}