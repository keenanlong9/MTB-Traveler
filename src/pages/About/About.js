import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import headshot from '../../assets/images/Headshot_2.jpg'
import ridingPhoto from '../../assets/images/Riding_Photo_2.jpg'
import "./About.css"


export default function About () {
    return (
        <div>
            <NavBar></NavBar>
            <div className="about_us">
                <h1>About Us</h1>
                <div className="about_us_container">
                    <div className='about_us_cell_1'>
                        {/* Could remove this div */}
                        <div className="about_us_container_photos">
                            <div className="about_us_photo">
                                <img
                                    src={headshot}
                                    name="photo_1"
                                    alt="A headshot of Keenan"
                                />
                            </div>
                        </div> 
                        {/* Could remove this div */}
                        <div className="about_us_container_info">
                            <div className="about_us_text">
                                <p>
                                    Hi! My name is Keenan Long. I am an avid mountain biker that loves
                                    to ride in the Frederick Watershed and my local trails in Patapsco
                                    State Park. This website idea was sparked from an trip to
                                    Finale Ligure, Italy to ride the world renowned trails they have in
                                    the area. I love to travel to new places with my bike and hopefully
                                    you will find new places to explore through out this website!
                                </p>    
                            </div>
                        </div>  
                    </div>
                    <div className='about_us_cell_2'>
                        {/* Could remove this div */}
                        <div className="about_us_container_photos">
                            <div className="about_us_photo">
                                <img
                                    src={ridingPhoto}
                                    name="photo_2"
                                    alt="A riding shot of Keenan"
                                />
                            </div>
                        </div> 
                        {/* Could remove this div */}
                        <div className="about_us_container_info">
                            <ul className="about_us_links">
                            <li className="about_us_item">
                                <a
                                href="https://www.strava.com/athletes/19610783"
                                id="about_us_strava_link"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                rel="noopener noreferrer"
                                >Strava</a
                                >
                            </li>
                            <li className="about_us_item">
                                <a
                                href="https://github.com/keenanlong9"
                                id="about_us_github_link"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                rel="noopener noreferrer"
                                >GitHub</a
                                >
                            </li>
                            <li className="about_us_item">
                                <a
                                href="https://www.patapscobike.com/"
                                id="about_us_supported_by"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                rel="noopener noreferrer"
                                >Supported By</a
                                >
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}