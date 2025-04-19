import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Explore() {
    return (
        <div>
            <NavBar></NavBar>
            <div class="explore_locations">
            <h1>Explore More Locations</h1>
            <div class="explore_locations_container">
                <div class="explore_locations_card">
                <a
                    href="Locations/Location-Whistler.html"
                    style={{ textDecoration: 'none' }}
                >
                    <div class="explore_location_name">
                    <p>Whistler, British Columbia</p>
                    </div>
                </a>
                </div>
                <div class="explore_locations_card">
                <a
                    href="Locations/Location-Queenstown.html"
                    style={{ textDecoration: 'none' }}
                >
                    <div class="explore_location_name">
                    <p>Queenstown, New Zealand</p>
                    </div>
                </a>
                </div>
                <div class="explore_locations_card">
                <a
                    href="Locations/Location-Finale_Ligure.html"
                    style={{ textDecoration: 'none' }}
                >
                    <div class="explore_location_name">
                    <p>Finale Ligure, Italy</p>
                    </div>
                </a>
                </div>
                <div class="explore_locations_card">
                <a
                    href="Locations/Location-Bellingham.html"
                    style={{ textDecoration: 'none' }}
                >
                    <div class="explore_location_name">
                    <p>Bellingham, Washington</p>
                    </div>
                </a>
                </div>
                <div class="explore_locations_card">
                <a
                    href="Locations/Location-Jamaica.html"
                    style={{ textDecoration: 'none' }}
                >
                    <div class="explore_location_name">
                    <p>Jamaica</p>
                    </div>
                </a>
                </div>
                <div class="explore_locations_card">
                <a
                    href="Locations/Location-Loudenvielle.html"
                    style={{ textDecoration: 'none' }}
                >
                    <div class="explore_location_name">
                    <p>Loudenvielle, France</p>
                    </div>
                </a>
                </div>
                <div class="explore_locations_card">
                <a
                    href="Locations/Location-Oaxaca.html"
                    style={{ textDecoration: 'none' }}
                >
                    <div class="explore_location_name">
                    <p>Oaxaca, Mexico</p>
                    </div>
                </a>
                </div>
                <div class="explore_locations_card">
                <a
                    href="Locations/Location-South_Africa.html"
                    style={{ textDecoration: 'none' }}
                >
                    <div class="explore_location_name">
                    <p>South Africa</p>
                    </div>
                </a>
                </div>
                <div class="explore_locations_card">
                <a
                    href="Locations/Location-Tasmania.html"
                    style={{ textDecoration: 'none' }}
                >
                    <div class="explore_location_name">
                    <p>Tasmania, Australia</p>
                    </div>
                </a>
                </div>
                <div class="explore_locations_card">
                <a
                    href="Locations/Location-Zermatt.html"
                    style={{ textDecoration: 'none' }}
                >
                    <div class="explore_location_name">
                    <p>Zermatt, Switzerland</p>
                    </div>
                </a>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}