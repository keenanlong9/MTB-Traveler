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
                        <Link to="/location?id=whistler" style={{ textDecoration: 'none' }}>
                            <p>Whistler, Britsh Columbia</p>
                        </Link>
                    </div>
                    <div class="locations_card">
                        <Link to="/location?id=queenstown" style={{ textDecoration: 'none' }}>
                            <p>Queenstown, New Zealand</p>
                        </Link>
                    </div>
                    <div class="locations_card">
                        <Link to="/location?id=finale_ligure" style={{ textDecoration: 'none' }}>
                            <p>Finale Ligure, Italy</p>
                        </Link>
                    </div>
                    <div class="locations_card">
                        <Link to="/location?id=bellingham" style={{ textDecoration: 'none' }}>
                            <p>Bellingham, Washington</p>
                        </Link>
                    </div>
                </div>
                <div class="explore_btn_container">
                    <Link to="/explore" id="explore_btn">
                        <button class="explore_btn"><p>Explore More</p></button>
                    </Link> 
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}