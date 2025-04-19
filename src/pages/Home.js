import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <div>
            <NavBar></NavBar>
            <div class="locations">
                <h1>Your adventure awaits</h1>
                <div class="locations_container">
                    <div class="locations_card">
                        <a
                        href="src/Locations/Location-Whistler.html"
                        style={{ textDecoration: 'none' }}
                        ><p>Whistler, Britsh Columbia</p></a
                        >
                    </div>
                    <div class="locations_card">
                        <a
                        href="src/Locations/Location-Queenstown.html"
                        style={{ textDecoration: 'none' }}
                        ><p>Queenstown, New Zealand</p></a
                        >
                    </div>
                    <div class="locations_card">
                        <a
                        href="src/Locations/Location-Finale_Ligure.html"
                        style={{ textDecoration: 'none' }}
                        ><p>Finale Ligure, Italy</p></a
                        >
                    </div>
                    <div class="locations_card">
                        <a
                        href="src/Locations/Location-Bellingham.html"
                        style={{ textDecoration: 'none' }}
                        ><p>Bellingham, Washington</p></a
                        >
                    </div>
                </div>
                <div class="explore_btn_container">
                    <Link to="/explore" id="explore_btn">
                        <button class="explore_btn"><p>Explore More</p></button>
                    </Link> 
                </div>
                {/* <a href="src/Explore.html">
                    <button class="explore_btn"><span>Explore More</span></button>
                </a> */}
            </div>
            <Footer></Footer>
        </div>
    )
}