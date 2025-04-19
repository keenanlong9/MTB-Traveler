import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Location () {
    return (
        <div>
            <NavBar></NavBar>
            <div class="location">
            <div class="location_card" id="Whistler">
                {/* <!-- TODO make location dynamic--> */}
                <p>Whistler, British Columbia</p>
            </div>
            <div class="location_info">
                <ul class="popular_trails">
                <h2>Popular Trails</h2>
                {/* <!-- Make trail names dynamic --> */}
                <li class="popular_trail_name">
                    <p>Dirt Merchant</p>
                </li>
                <li class="popular_trail_name">
                    <p>High Hopes</p>
                </li>
                <li class="popular_trail_name">
                    <p>Crank It Up</p>
                </li>
                <li class="popular_trail_name">
                    <p>Samurai Pizza Cat</p>
                </li>
                <li class="popular_trail_name">
                    <p>A-Line</p>
                </li>
                </ul>
                <div class="location_services">
                <div class="location_service_item">
                    <h2>Currency</h2>
                    <div class="location_service_item_container">
                    <p>$CAD</p>
                    <Link to="/currency" className="location_service_btn" style={{ textDecoration: 'none' }}>
                        <p>Convert</p>
                    </Link> 
                    {/* <a href="../Currency.html">
                        <button class="location_service_btn">
                        <span>Convert</span>
                        </button>
                    </a> */}
                    </div>
                </div>
                <div class="location_service_item">
                    <h2>Language</h2>
                    <div class="location_service_item_container">
                    <p>English</p>
                    <Link to="/language" class="location_service_btn" style={{ textDecoration: 'none' }}>
                        <p>Translate</p>
                    </Link> 
                    {/* <a href="../Language.html">
                        <button class="location_service_btn">
                        <span>Translate</span>
                        </button>
                    </a> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}