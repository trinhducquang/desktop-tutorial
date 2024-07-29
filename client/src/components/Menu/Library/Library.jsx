import React, { useState } from 'react';
import './Library.scss';
import banner from '/Libary/banner.avif'
import img1 from '/Libary/img1.webp'
import imgright from '/Libary/imgright.webp'
import img2 from '/video/main/img2.webp'
import img4 from '/video/main/img4.webp'
import { Rating } from 'react-simple-star-rating'
import FooterTop from '../../Footer/Footer-top/FooterTop'

const Library = () => {
  const [showImgRight, setShowImgRight] = useState(false);

  const handleMouseEnter = () => {
    setShowImgRight(true);
  };

  const handleMouseLeave = () => {
    setShowImgRight(false);
  };

  const [rating, setRating] = useState(5)
  const handleRating = (rate) => {
    setRating(rate);
  }
  return (
    <>
      <section>
        <div className='Navbar-img Navbar-libary'>
          <img src={banner} />
          <div className={`img-content`}>
            <h2>Library</h2>
            <p>Discover the new range of travel bags for men & women.</p>
          </div>
        </div>
      </section>
      <section>
        <div className='Navbar-item Libary-item'>
          <div className='content-container'>
            <div className='Navbar-content'>
              <div className='img-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img
                  src={img1}
                  alt="Discover Bespoke"
                  className={`img1 ${showImgRight ? 'hidden' : ''}`}
                />
                <img
                  src={imgright}
                  alt="Right Image"
                  className={`imgright ${showImgRight ? 'visible' : ''}`}
                />
              </div>
              <div className='text-content'>
                <h4>DISCOVER BESPOKE</h4>
                <Rating className='rating' onClick={handleRating} ratingValue={rating}/>
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
      <FooterTop/>
    </>
  );
};

export default Library;
