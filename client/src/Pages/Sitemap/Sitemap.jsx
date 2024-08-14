import React from 'react';
import '../Complaints/Complaints.scss';
import useScrollTranslate from '../../Hooks/useScrollTranslate';
import sitemap from '/img/sitemap.webp';


const Sitemap = () => {

  const distance1 = 502;

  const contactRef1 = useScrollTranslate(distance1);

  return (
    <div className='overflow h2'>
      <section>
        <div className='Navbar-img Complaints-img'>
          <img src={sitemap} alt="Rimowa Complaints" />
          <div className='img-content'>
            <h2>Site Map</h2>
          </div>
        </div>
      </section>
      <section>
        <div className='Complaints-container-banner-2'>
          <div className='Complaints-description'>
            <div className='Complaints-description-item'>
              <div>
                <h2>Rimowa Client Complaints Procedure</h2>
              </div>
              <div>
                <p>Rimowa is dedicated to providing products and services of the highest standard. However, we understand that issues may arise. If you have any concerns or are dissatisfied, we are committed to resolving the situation fairly and transparently.</p>
                <p>Rimowa will handle all complaints diligently and impartially, gathering additional information as needed. Each complaint will be assessed fairly and promptly, considering all relevant factors to ensure a just outcome.</p>
              </div>
            </div>
            <div className='Contact-section'>
              <div ref={contactRef1} className='Contact-section-item-1'>
                <h2>RIMOWA</h2>
              </div>
              <div className='Contact-section-contact-us'>
                <p>TRAVEL COMPANIONS COLLECTION</p>
                <p>MUSE ARTS PROGRAMME</p>
                <p>INSPIRING GREATNESS</p>
                <p>OBJECTS OF LUXURY</p>
                <p>PROVENANCE</p>
                <p>OWNERSHIP</p>
                <p>LIBRARY</p>
                <p>LOGIN</p>
                <p>FAQs</p>
                <p>Whispers</p>
                <p>Privacy</p>
                <p>Contact</p>
                <p>COOKIES</p>
                <p>Legal</p>
                <p>Complaints</p>
                <p>Careers</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sitemap;
