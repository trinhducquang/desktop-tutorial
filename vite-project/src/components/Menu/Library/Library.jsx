import React from 'react';
import './Library.scss';
import LibraryVideo from '/Libary/Libary.mp4';
import img1 from '/video/main/img1.webp'
import img2 from '/video/main/img2.webp'
import img3 from '/video/main/img3.webp'
import img4 from '/video/main/img4.webp'

const Library = () => {
  return (
    <>
      <section>
        <div className='Navbar-video Libary-video'>
          <video src={LibraryVideo} autoPlay muted loop />
        </div>
      </section>
      <section>
        <div className='Navbar-item Libary-item'>
          <div className='content-container'>
            <div className='Navbar-content '>
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
        <div className='Navbar-item Libary-item'>
          <div className='content-container'>
            <div className='Navbar-content '>
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
      </section >
    </>
  );
};

export default Library;
