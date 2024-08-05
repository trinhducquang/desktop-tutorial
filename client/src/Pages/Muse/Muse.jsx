import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nebula from '/public/muse/Nebula.mp4';
import './Muse.scss';
import img1 from '/public/muse/img1.webp';
import img2 from '/public/muse/img2.webp';
import img3 from '/public/muse/img3.webp';
import img4 from '/public/muse/img4.webp';
import img5 from '/public/muse/img5.webp';
import img6 from '/public/muse/img6.webp';

const MusePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className='Muse-container'>
      <div className='Muse-item'>
        <video src={Nebula} autoPlay muted loop />
      </div>
      <div className='Muse-item-2'>
        <div className='top-row'>
          <div className='content-container-1 hover-effect' onClick={() => handleNavigate('/Page1')}>
            <img className='img-main' src={img1} alt='img1' />
            <div className='content'>
              <h4>THE WORLD OF MUSE</h4>
              <p>Welcome to the world of Muse. Together, our flagship Dream Commission and the Spirit of Ecstasy Challenge embraces a wide
                spectrum of contemporary visual expression, from artists who exhibited moving image in esteemed museums and biennials,
                to pioneering design visionaries committed to the heritage of their craft, while making use of the latest technological
                advances.
              </p>
            </div>
          </div>
          <div className='content-container-1 hover-effect' onClick={() => handleNavigate('/page2')}>
            <img className='img-side' src={img2} alt='img2' />
            <div className='content'>
              <h4>Spirit of Ecstasy Challenge Exhibition</h4>
              <p>Explore the unveiling of the inaugural Spirit of Ecstasy
                Challenge exhibition, showcasing three winning artists who created
                unique objects inspired by the Spirit of Ecstasy, the sculptural
                figurine that adorns the bonnet of every Rolls-Royce motor car.
              </p>
            </div>
          </div>
        </div>
        <div className='bottom-row'>
          <div className='content-container-1 hover-effect' onClick={() => handleNavigate('/page3')}>
            <img src={img3} alt='img3' />
            <div className='content'>
              <h4>Stitched Urban Skin, Bi Rongrong</h4>
              <p>Titled “Stitched Urban Skin”, Bi Rongrong’s work consists of three layers of two-dimensional sheets made from different materials: specially treated metal, an animated LED light sheet, and a Perspex sheet embedded with crochet.</p>
            </div>
          </div>
          <div className='content-container-1 hover-effect' onClick={() => handleNavigate('/page4')}>
            <img src={img4} alt='img4' />
            <div className='content'>
              <h4>Nissa's Rina, Ghizlane Sahli</h4>
              <p>Resembling two triumphant wings about to take flight, Ghizlane Sahli’s artwork is a joyous celebration of femininity and freedom.</p>
            </div>
          </div>
          <div className='content-container-1 hover-effect' onClick={() => handleNavigate('/page5')}>
            <img src={img5} alt='img5' />
            <div className='content'>
              <h4>Transient Materiality, Scarlett Yang</h4>
              <p>In keeping with the hybrid nature of her practice, Scarlett Yang’s artwork is composed of two elements.</p>
            </div>
          </div>
          <div className='content-container-1 hover-effect' onClick={() => handleNavigate('/page6')}>
            <img src={img6} alt='img6' />
            <div className='content'>
              <h4>Pushing The Boundaries Of Textiles</h4>
              <p>In anticipation of the Autumn reveal of the Spirit of Ecstasy Challenge final artworks, Muse sits down with Christine Franck, Head of Colour, Materials & Trim Design at Rolls-Royce, to delve into the enormous creative potential of textiles. The opportunities to imagine something radically innovative in textiles have never been more far-reaching or fanciful. Versatile, delicate, and steeped in history, textile offers up a wide-open terrain of creative possibility.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusePage;
