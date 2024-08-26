import '../Complaints/Complaints.scss';
import './Sitemap.scss';
import useScrollTranslate from '../../Hooks/useScrollTranslate';
import sitemap from '/img/sitemap.webp';
import { Link } from 'react-router-dom';
import  VerticalLine from '../../components/VerticalLine/VerticalLine';
const Sitemap = () => {

  const distance1 = 570.8;

  const contactRef1 = useScrollTranslate(distance1);

  return (
    <div className='overflow h2 Sitemap-container'>
      <section>
        <div className='Navbar-img Complaints-img'>
          <img src={sitemap} alt="Rimowa Complaints" />
          <div className='img-content'>
            <h2  style={{marginTop: '5%'}}>Site Map</h2>
            <div style={{marginTop: '2%'}}>
            <VerticalLine/>
            </div>
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
                <Link to='/Library'><p>TRAVEL COMPANIONS COLLECTION</p></Link>
                <Link to='/Muse'><p>MUSE ARTS PROGRAMME</p></Link>
                <Link to='/Inspiring-Greatness'><p>INSPIRING GREATNESS</p></Link>
                <Link to='/OBJECTS OF LUXURY'><p>OBJECTS OF LUXURY</p></Link>
                <Link to='/pre-owned'><p>PROVENANCE</p></Link>
                <Link to='/OWNERSHIP'><p>OWNERSHIP</p></Link>
                <Link to='/Login'><p>LOGIN</p></Link>
                <Link to='/Faqs'><p>FAQs</p></Link>
                <Link to='/whispers'><p>Whispers</p></Link>
                <Link to='/Privacy'><p>Privacy</p></Link>
                <Link to='/Contact'><p>Contact</p></Link>
                <Link to='/Cookie'><p>COOKIES</p></Link>
                <Link to='/Legal'><p>Legal</p></Link>
                <Link to='/Complaints'><p>Complaints</p></Link>
                <Link to='/Careers'><p>Careers</p></Link>
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
