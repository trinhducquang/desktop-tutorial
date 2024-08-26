import './Complaints.scss';
import Complaints1 from '../../../public/Complaints/Complaints1.jpg';
import useScrollTranslate from '../../Hooks/useScrollTranslate';


const Complaints = () => {
  
  const distance1 = 362;
  const distance2 = 220.4;
  const distance3 = 168.8;

  const contactRef1 = useScrollTranslate(distance1);
  const contactRef2 = useScrollTranslate(distance2);
  const contactRef3 = useScrollTranslate(distance3);

  return (
    <div className='overflow h2'>
      <section>
        <div className='Navbar-img Complaints-img'>
          <img src={Complaints1} alt="Rimowa Complaints" />
          <div className='img-content'>
            <h2>CLIENT COMPLAINTS</h2>
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
                <h2>Contact Us</h2>
              </div>
              <div className='Contact-section-contact-us'>
                <p>If you have concerns regarding your Rimowa product or service received from a Rimowa dealership, please contact us using one of the methods listed below.</p>
                <p>Write to us at:</p>
                <p>Client Relations Department</p>
                <p>Rimowa GmbH</p>
                <p>Maximilianstraße 16,</p>
                <p>80539 Munich, Germany</p>
                <p>+49 89 255 56 0</p>
                <p>customer.relations@rimowa.com</p>
                <p>We’re available:</p>
                <p>8.30am – 5.00pm Monday to Friday</p>
              </div>
            </div>
            <hr />
            <div className='Contact-section'>
              <div ref={contactRef2} className='Contact-section-item'>
                <h2>Our Commitment to You</h2>
              </div>
              <div>
                <p>We are committed to thoroughly investigating your complaint and providing a fair response based on the available information.</p>
                <p>We aim to resolve 50% of our customer complaints within 7 business days.</p>
                <p>More complex cases may require additional time, and our team will keep you informed regularly.</p>
                <p>We will explain our decision clearly and offer a course of action that is fair, transparent, and not misleading, including any necessary remedial actions.</p>
              </div>
            </div>
            <hr />
            <div className='Contact-section'>
              <div ref={contactRef3} className='Contact-section-item'>
                <h2>What You Will Need to Provide</h2>
              </div>
              <div>
                <p>Your name and address</p>
                <p>Your product's serial number (if applicable)</p>
                <p>Details on how we can contact you and your preferred contact method</p>
                <p>A clear description of your complaint</p>
                <p>Copies of any relevant documentation</p>
                <p>Your expectations for resolving the issue</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Complaints;
