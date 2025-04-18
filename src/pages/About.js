import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import headshot from '../assets/images/Headshot_2.jpg'
import ridingPhoto from '../assets/images/Riding_Photo_2.jpg'


export default function About () {
    return (
        <div>
            <NavBar></NavBar>
            <div class="about_us">
            <h1>About Us</h1>
            <div class="about_us_container_photos">
                <div class="about_us_photo">
                <img
                    src={headshot}
                    name="photo_1"
                    alt="A headshot of Keenan"
                />
                </div>
                <div class="about_us_photo">
                <img
                    src={ridingPhoto}
                    name="photo_2"
                    alt="A riding shot of Keenan"
                />
                </div>
            </div>
            <div class="about_us_container_info">
                <div class="about_us_text">
                <p>
                    Hi! My name is Keenan Long. I am an avid mountain biker that loves
                    to ride in the Frederick Watershed and my local trails in Patapsco
                    State Park. This website idea was sparked from an upcoming trip to
                    Finale Ligure, Italy to ride the world renowned trails they have in
                    the area. I love to travel to new places with my bike and hopefully
                    you will find new places to explore through out this website!
                </p>
                </div>
                <ul class="about_us_links">
                <li class="about_us_item">
                    <a
                    href="https://www.instagram.com/keenanlong9/"
                    id="about_us_links"
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    >Instagram</a
                    >
                </li>
                <li class="about_us_item">
                    <a
                    href="https://github.com/keenanlong9"
                    id="about_us_links"
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    >GitHub</a
                    >
                </li>
                <li class="about_us_item">
                    <a
                    href="https://www.patapscobike.com/"
                    id="about_us_links"
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    >Supported By</a
                    >
                </li>
                </ul>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}