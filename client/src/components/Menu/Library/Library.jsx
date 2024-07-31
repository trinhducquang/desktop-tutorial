import React, { useState } from 'react';
import './Library.scss';
import banner from '../../../../public/Library/banner.avif';
import img1 from '../../../../public/Library/img1.webp';
import imgright from '../../../../public/Library/imgright.webp';
import { Rating } from 'react-simple-star-rating';
import FooterTop from '../../Footer/Footer-top/FooterTop';
import Topshop from '../../Topshop/Topshop';

const Library = () => {
  const [showImgRight, setShowImgRight] = useState(false);

  const handleMouseEnter = () => {
    setShowImgRight(true);
  };

  const handleMouseLeave = () => {
    setShowImgRight(false);
  };

  const [rating, setRating] = useState(5);
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <>
      <section>
        <div className='Navbar-img Navbar-library'>
          <img src={banner} alt="Library Banner" />
          <div className='img-content'>
            <h2>Library</h2>
            <p>Discover the new range of travel bags for men & women.</p>
          </div>
        </div>
      </section>
      <Topshop />
      <section>
        <div className='Library-item'>
          <div className='content-container'>
            {Array.from({ length: 8 }).map((_, index) => (
              <div className='item' key={index}>
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
                <div className='text-container'>
                  <h4>DISCOVER BESPOKE</h4>
                  <Rating className='rating' onClick={handleRating} ratingValue={rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterTop />
    </>
  );
};

export default Library;
