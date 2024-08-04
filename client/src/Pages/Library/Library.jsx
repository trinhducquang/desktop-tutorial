import React from 'react';
import './Library.scss';
import banner from '../../../public/Library/banner.avif';
import img1 from '../../../public/Library/img1.webp';
import imgright from '../../../public/Library/imgright.webp';
import FooterTop from '../../components/Footer-top/FooterTop';
import Topshop from '../../components/Topshop/Topshop';
import useHover from '../../Hooks/useHover';

const Library = () => {
  const { hovered, handleMouseEnter, handleMouseLeave } = useHover();


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
              <div className='item'>
                <div className='img-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <img
                    src={img1}
                    alt="Discover Bespoke"
                    className={`img1 ${hovered ? 'hidden' : ''}`}
                  />
                  <img
                    src={imgright}
                    alt="Right Image"
                    className={`imgright ${hovered ? 'visible' : ''}`}
                  />
                </div>
                <div className='text-container'>
                  <h4>DISCOVER BESPOKE</h4>
                  <p>$1,725.00</p>
                </div>
              </div>
              <div className='item'>
                <div className='img-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <img
                    src={img1}
                    alt="Discover Bespoke"
                    className={`img1 ${hovered ? 'hidden' : ''}`}
                  />
                  <img
                    src={imgright}
                    alt="Right Image"
                    className={`imgright ${hovered ? 'visible' : ''}`}
                  />
                </div>
                <div className='text-container'>
                  <h4>DISCOVER BESPOKE</h4>
                  <p>$1,725.00</p>
                </div>
              </div>
          </div>
        </div>
      </section>
      <FooterTop />
    </>
  );
};

export default Library;
