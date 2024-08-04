import React from 'react';
import './Complaints.scss';
import Complaints1 from '../../../public/Complaints/Complaints1.jpg';
import useScrollTranslate from '../../Hooks/useScrollTranslate';

const Complaints = () => {
  
  const distance1 = 810.4;
  const distance2 = 209.4;
  const distance3 = 168.8;

  const contactRef1 = useScrollTranslate(distance1);
  const contactRef2 = useScrollTranslate(distance2);
  const contactRef3 = useScrollTranslate(distance3);

  return (
    <div className='overflow h2'>
      <section>
        <div className='Navbar-img Complaints-img'>
          <img src={Complaints1} alt="Charging Spectre" />
          <div className='img-content'>
            <h2>CHARGING SPECTRE</h2>
          </div>
        </div>
      </section>
      <section>
        <div className='Complaints-container-banner-2'>
          <div className='Complaints-description'>
            <div className='Complaints-description-item'>
              <div>
                <h2>Rolls-Royce Motor Cars Client Complaints Procedure</h2>
              </div>
              <div>
                <p>Rolls-Royce Motor Cars is committed to producing and delivering products and services of the highest standard,
                  but we do understand that sometimes things can go wrong. If you have a concern or are dissatisfied in any way,
                  we will do our best to help resolve the situation in a fair and transparent way</p>
                <p>Rolls-Royce Motor Cars will investigate all complaints competently,
                  diligently and impartially obtaining additional information as and when necessary.
                  Every complaint will be assessed fairly, consistently and promptly taking into account
                  all relevant factors to ensure a fair outcome for you. </p>
              </div>
            </div>
            <div className='Contact-section'>
              <div ref={contactRef1} className='Contact-section-item-1'>
                <h2>Contact us</h2>
              </div>
              <div className='Contact-section-contact-us'>
                <p>If you have a concern with either your vehicle or the service
                  you have received from your Rolls-Royce Motor Cars Dealership,
                  please contact us by your preferred method from the list below.</p>
                <p>Write to us at:</p>
                <p>Client Relations Department</p>
                <p>Rolls-Royce Motor Cars Limited</p>
                <p>The Drive, Westhampnett, Chichester, West Sussex, PO18 0SH</p>
                <p>International</p>
                <p>+44 (0) 1243 384300</p>
                <p>customer.relationsuk@rolls-roycemotorcars.com</p>
                <p>North America</p>
                <p>Rolls-Royce Motor Cars NA LLC</p>
                <p>300 Chestnut Ridge Road, Woodcliff Lake, NJ 07677</p>
                <p>+1 877 877 3735</p>
                <p>customer.relations@rolls-roycemotorcarsna.com</p>
                <p>China</p>
                <p>Rolls-Royce Motor Cars</p>
                <p>Gateway Plaza</p>
                <p>No.18 Xia Guang Li,</p>
                <p>North East Third Ring,</p>
                <p>Chaoyang District,</p>
                <p>Beijing 100027</p>
                <p>+86 400 818 7979</p>
                <p>customer.relationschina@rolls-roycemotorcars.com</p>
                <p>We’re available:</p>
                <p>8.30am – 5.00pm Monday to Friday</p>
              </div>
            </div>
            <hr />
            <div className='Contact-section'>
              <div ref={contactRef2} className='Contact-section-item'>
                <h2>Our commitment to you</h2>
              </div>
              <div>
                <p>
                  We will thoroughly investigate your complaint and offer a fair
                  response that will take into account all the information available to us.</p>
                <p>We aim to close 50% of our customer complaints within 7 business days.</p>
                <p>More complex cases may take longer and the team will keep you updated
                  on an agreed timely basis.</p>
                <p>We will explain our decision and agree a course of action with you, in a
                  way that is fair, clear and not misleading and offer remedial action or redress
                  if required.</p>
              </div>
            </div>
            <hr />
            <div className='Contact-section'>
              <div ref={contactRef3} className='Contact-section-item'>
                <h2>What you will need to provide</h2>
              </div>
              <div>
                <p>Your name and address</p>
                <p>Your vehicles VIN/Chasiss number (if an owner)</p>
                <p>Details of how we can contact you and how you would like to be contacted</p>
                <p>A clear description of your complaint</p>
                <p>Copies of any supporting documentation</p>
                <p>What you would like us to do to rectify the situation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Complaints;
