import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import locationData from "../data/locations.json"

export default function Location () {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const locationId = queryParams.get('id');
    const locationInfo = locationData.find(location => location.id === locationId);

    return (
        <div>
            
            {locationInfo ? (
                <div>
                    <NavBar></NavBar>
                    <div class="location">
                        <div className="location_card" 
                            style={{backgroundImage: 
                            `url(/assets/images/${locationInfo?.image})`}}>
                            <p>{locationInfo?.name}</p>
                        </div>
                        <div class="location_info">
                            <ul class="popular_trails">
                            <h2>Popular Trails</h2>
                            <li class="popular_trail_name">
                                <p>{locationInfo?.trails[0]}</p>
                            </li>
                            <li class="popular_trail_name">
                                <p>{locationInfo?.trails[1]}</p>
                            </li>
                            <li class="popular_trail_name">
                                <p>{locationInfo?.trails[2]}</p>
                            </li>
                            <li class="popular_trail_name">
                                <p>{locationInfo?.trails[3]}</p>
                            </li>
                            <li class="popular_trail_name">
                                <p>{locationInfo?.trails[4]}</p>
                            </li>
                            </ul>
                            <div class="location_services">
                                <div class="location_service_item">
                                    <h2>Currency</h2>
                                    <div class="location_service_item_container">
                                    <p>${locationInfo?.currency}</p>
                                    <Link to="/currency" className="location_service_btn" style={{ textDecoration: 'none' }}>
                                        <p>Convert</p>
                                    </Link> 
                                    </div>
                                </div>
                                <div class="location_service_item">
                                    <h2>Language</h2>
                                    <div class="location_service_item_container">
                                    <p>{locationInfo?.language}</p>
                                    <Link to="/language" class="location_service_btn" style={{ textDecoration: 'none' }}>
                                        <p>Translate</p>
                                    </Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer></Footer>
                </div>
            ) : (
                <h1 style={{color: "#fff"}}> Location Not Found </h1>
            )}
            
        </div>
    )
}