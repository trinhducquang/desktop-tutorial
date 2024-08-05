import React from 'react';
import Nebula from '/public/muse/Nebula.mp4';
import './Muse.scss';
import img1 from '/public/muse/img1.webp';
import img2 from '/public/muse/img2.webp';
import img3 from '/public/muse/img3.webp';
import img4 from '/public/muse/img4.webp';
import img5 from '/public/muse/img5.webp';
import img6 from '/public/muse/img6.webp';

const Muse = () => {
  return (
    <div className='Muse-container'>
      <div className='Muse-item'>
        <video src={Nebula} autoPlay muted loop />
      </div>
      <div className='Muse-item-2'>
        <div className='top-row'>
          <img className='img-main' src={img1} alt='img1' />
          <img className='img-side' src={img2} alt='img2' />
        </div>
        <div className='bottom-row'>
          <img src={img3} alt='img3' />
          <img src={img4} alt='img4' />
          <img src={img5} alt='img5' />
          <img src={img6} alt='img6' />
        </div>
      </div>
    </div>
  );
};

export default Muse;
