import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RIMOWAMars from '../../../public/video/main/RIMOWA-Mars.mp4';
import RIMOWA from '../../../public/video/main/RIMOWA.avif';
import img1 from '../../../public/video/main/img1.webp';
import img2 from '../../../public/video/main/img2.webp';
import img4 from '../../../public/video/main/img4.webp';
import { GrLinkNext } from "react-icons/gr";
import './Home.scss';

const Navbar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInItemSection, setIsInItemSection] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleWheel = (event) => {
      if (isInItemSection) {
        return;
      }
      if (event.deltaY > 0) {
        if (currentSlide < 1) {
          setCurrentSlide((prev) => prev + 1);
        }
      } else {
        if (currentSlide > 0) {
          setCurrentSlide((prev) => prev - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSlide, isInItemSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => setIsInItemSection(true);
  const handleMouseLeave = () => setIsInItemSection(false);

  const [isVideoInView, setIsVideoInView] = useState(false);
  const [isImgInView, setIsImgInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoContent = document.querySelector('.video-content');
      const imgContent = document.querySelector('.img-content');

      if (videoContent && imgContent) {
        const videoRect = videoContent.getBoundingClientRect();
        const imgRect = imgContent.getBoundingClientRect();

        setIsVideoInView(videoRect.top <= window.innerHeight && videoRect.bottom >= 0);
        setIsImgInView(imgRect.top <= window.innerHeight && imgRect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
