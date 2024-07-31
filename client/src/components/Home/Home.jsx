import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RIMOWAMars from '../../../public/video/main/RIMOWA-Mars.mp4';
import RIMOWA from '../../../public/video/main/RIMOWA.avif';
import img1 from '../../../public/video/main/img1.webp';
import img2 from '../../../public/video/main/img2.webp';
import img4 from '../../../public/video/main/img4.webp';
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
    <>
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
          <div className='Navbar-video'>
            <video src={RIMOWAMars} autoPlay muted loop />
            <div className={`video-content ${isVideoInView ? 'visible' : ''}`}>
              <h2>Original Colours </h2>
              <p>Mars & Mercury</p>
              <button>
                DISCOVER NOW
                <GrLinkNext className="arrow" />
              </button>
            </div>
          </div>
          <div className='Navbar-img'>
            <img src={RIMOWA} alt="Culinan" />
            <div className={`img-content ${isImgInView ? 'visible' : ''}`}>
              <h2>CHARGING SPECTRE</h2>
              <button>
                DISCOVER NOW
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
          <div>
            <h3>EXPLORE FURTHER</h3>
            <p>CONTINUE YOUR JOURNEY</p>
          </div>
          <div className='content-container'>
            <div className='Navbar-content'>
              <div>
                <img src={img1} alt="Discover Bespoke" />
                <h4>DISCOVER BESPOKE</h4>
                <p>Choose from our exclusive collections or collaborate with our craftspeople and designers to create a Rolls-Royce wholly unique to you. This is Rolls-Royce Bespoke.</p>
              </div>
            </div>
            <div className='Navbar-content'>
              <div>
                <img src={img2} alt="Explore Models" />
                <h4>EXPLORE MODELS</h4>
                <p>Explore our stunning collection of new Rolls-Royce models. Whether you’re looking for the ultimate luxury saloon, a sporty coupe or a refined convertible, we have something for you.</p>
              </div>
            </div>
            <div className='Navbar-content'>
              <div>
                <img src={img4} alt="Find Your Dealer" />
                <h4>FIND A DEALER</h4>
                <p>Find a Rolls-Royce dealer near you and book a test drive or discover more about the bespoke services we offer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
