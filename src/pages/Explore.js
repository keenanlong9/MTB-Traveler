import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function Explore() {
    return (
        <div>
            <NavBar></NavBar>
            <div class="explore_locations">
                <h1>Explore More Locations</h1>
                <div class="explore_locations_container">
                    <div class="explore_locations_card">
                        <Link to="/location?id=whistler" style={{ textDecoration: 'none' }}>
                            <div class="explore_location_name">
                                <p>Whistler, British Columbia</p>
                            </div> 
                        </Link>     
                    </div>
                    <div class="explore_locations_card">
                        <Link to="/location?id=queenstown" style={{ textDecoration: 'none' }}>
                            <div class="explore_location_name">
                                <p>Queenstown, New Zealand</p>
                            </div> 
                        </Link>
                    </div>
                    <div class="explore_locations_card">
                        <Link to="/location?id=finale_ligure" style={{ textDecoration: 'none' }}>
                            <div class="explore_location_name">
                                <p>Finale Ligure, Italy</p>
                            </div> 
                        </Link>
                    </div>
                    <div class="explore_locations_card">
                        <Link to="/location?id=bellingham" style={{ textDecoration: 'none' }}>
                            <div class="explore_location_name">
                                <p>Bellingham, Washington</p>
                            </div> 
                        </Link>
                    </div>
                    <div class="explore_locations_card">
                        <Link to="/location?id=jamacia" style={{ textDecoration: 'none' }}>
                            <div class="explore_location_name">
                                <p>Jamaica</p>
                            </div> 
                        </Link>
                    </div>
                    <div class="explore_locations_card">
                        <Link to="/location?id=loudenvielle" style={{ textDecoration: 'none' }}>
                            <div class="explore_location_name">
                                <p>Loudenvielle, France</p>
                            </div> 
                        </Link>
                    </div>
                    <div class="explore_locations_card">
                        <Link to="/location?id=oaxaca" style={{ textDecoration: 'none' }}>
                            <div class="explore_location_name">
                                <p>Oaxaca, Mexico</p>
                            </div> 
                        </Link>
                    </div>
                    <div class="explore_locations_card">
                        <Link to="/location?id=south_africa" style={{ textDecoration: 'none' }}>
                            <div class="explore_location_name">
                                <p>South Africa</p>
                            </div> 
                        </Link>
                    </div>
                    <div class="explore_locations_card">
                        <Link to="/location?id=tasmania" style={{ textDecoration: 'none' }}>
                            <div class="explore_location_name">
                                <p>Tasmania, Australia</p>
                            </div> 
                        </Link>
                    </div>
                    <div class="explore_locations_card">
                        <Link to="/location?id=zermatt" style={{ textDecoration: 'none' }}>
                            <div class="explore_location_name">
                                <p>Zermatt, Switzerland</p>
                            </div> 
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}