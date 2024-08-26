import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RIMOWAMars from '../../../public/video/main/RIMOWA.mp4';
import RIMOWA from '../../../public/video/main/RIMOWA.avif';
import img1 from '../../../public/video/main/img1.webp';
import img2 from '../../../public/video/main/img2.webp';
import img4 from '../../../public/video/main/img4.webp';
import { Link } from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";
import useNavbar from '../../Hooks/useNavbar';
import './Home.scss';

const Navbar = () => {
  const {
    currentSlide,
    scrollPosition,
    isVideoInView,
    isImgInView,
    handleChange,
    handleMouseEnter,
    handleMouseLeave,
  } = useNavbar();

  return (
    <div className='Home-container'>
      <section>
        <Carousel
          className="custom-carousel"
          axis="vertical"
          autoPlay={false}
          infiniteLoop={false}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          swipeable={false}
          emulateTouch={false}
          transitionTime={800}
          selectedItem={currentSlide}
          onChange={handleChange}
        >
          <div className='Navbar-video '>
            <video src={RIMOWAMars} autoPlay muted loop />
            <div className={`video-content ${isVideoInView ? 'visible' : ''}`}>
              <h2>ORIGINAL COLOURS</h2>
              <p>MARS & MERCURY</p>
              <button className='circle-large bigmouse'>
                <Link to="/Inspiring-Greatness">
                  DISCOVER NOW
                </Link>
                <GrLinkNext className="arrow" />
              </button>
            </div>
          </div>
          <div className='Navbar-img'>
            <img src={RIMOWA} alt="Culinan" />
            <div className={`img-content ${isImgInView ? 'visible' : ''}`}>
              <h2>CHARGING SPECTRE</h2>
              <button className='bigmouse'>
                <Link to="/Library">
                  DISCOVER NOW
                </Link>
                <GrLinkNext className="arrow" />
              </button>
            </div>
          </div>
        </Carousel>
      </section>
      <section>
        <div
          className='Navbar-item'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ marginTop: scrollPosition > window.innerHeight ? '0' : '0' }}
        >
          <div className='mobile-top-home'>
            <h3>EXPLORE FURTHER</h3>
            <p>CONTINUE YOUR JOURNEY</p>
          </div>
          <div className='content-container'>
            <div className='Navbar-content'>
              <div className='bigmouse'>
                <img src={img1} alt="Discover Bespoke " />
                <h4>EXPLORE OUR COLLECTIONS</h4>
                <p>Discover Rimowa's exclusive range of premium collections. Each collection is meticulously designed to meet the highest standards of craftsmanship and innovation, offering a variety of styles and functionalities to suit your travel needs.</p>
              </div>
            </div>
            <div className='Navbar-content'>
              <div className='bigmouse'>
                <img src={img2} alt="Explore Models " />
                <h4>CUSTOMIZE YOUR RIMOWA</h4>
                <p>Personalize your Rimowa suitcase by collaborating with our skilled artisans and designers. Choose from a range of custom options to create a piece that reflects your unique style and preferences. Experience the art of customization like never before.</p>
              </div>
            </div>
            <div className='Navbar-content '>
              <div>
                <img src={img4} alt="Find Your Dealer" />
                <h4>EXPERIENCE RIMOWA</h4>
                <p>Immerse yourself in the world of Rimowa craftsmanship. From the selection of materials to the precision engineering, every aspect of our products is crafted to deliver exceptional quality and durability. Experience the excellence of Rimowa firsthand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
