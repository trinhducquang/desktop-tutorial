import './NotFound.scss'
import original from '/public/NotFound/original.jpeg'
import FooterTop from '../../components/Footer-top/FooterTop'
import img1 from '/public/NotFound/img1.jpg'
import img2 from '/public/NotFound/img2.jpg'
import img3 from '/public/NotFound/img3.jpg'
import VerticalLine from '../../components/VerticalLine/VerticalLine'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
const NotFound = () => {
  return (
    <div className='NotFound-container overflow'>
      <section>
        <div className='Navbar-img'>
          <img src={original} alt="Rimowa Contact" />
          <div className='img-content'>
            <h2 style={{marginTop: '3%'}}>HERE IN SPIRIT</h2>
            <div style={{marginTop: '3%'}}>
            <VerticalLine />
            </div>
          </div>
        </div>
        
      </section>
      <section>
        <div className='text-center'>
          <h3>Page not found</h3>
          <h1>Something went wrong</h1>
          <p>So sorry, but the page you’re looking for is currently
            not available. Go <br />
            back to the homepage or click below to
            continue shopping.
          </p>
          <Link to='/Library'><button>START SHOPPING</button></Link>
        </div>
      </section>
      <section className='color-seticon-last'>
        <div className='Navbar-item'>
          <div>
            <h3>CONTINUE YOUR JOURNEY</h3>
          </div>
          <div className='content-container'>
            <div className='Navbar-content'>
              <div>
                <img src={img2} alt="Discover Bespoke" />
                <h4>DISCOVER BESPOKE</h4>
                <p>Choose from our exclusive collections or collaborate with our craftspeople and designers to create a Rolls-Royce wholly unique to you. This is Rolls-Royce Bespoke.</p>
              </div>
            </div>
            <div className='Navbar-content'>
              <div>
                <img src={img1} alt="Explore Models" />
                <h4>EXPLORE MODELS</h4>
                <p>Explore our stunning collection of new Rolls-Royce models. Whether you’re looking for the ultimate luxury saloon, a sporty coupe or a refined convertible, we have something for you.</p>
              </div>
            </div>
            <div className='Navbar-content'>
              <div>
                <img src={img3} alt="Find Your Dealer" />
                <h4>FIND A DEALER</h4>
                <p>Find a Rolls-Royce dealer near you and book a test drive or discover more about the bespoke services we offer.</p>
              </div>
            </div>
          </div>
            <Link to='/Inspiring-Greatness'>
            <Button label='Inspiring Greatness' style={{ border: 'none', backgroundColor: 'transparent', fontWeight: '500'}} color='white' />
            </Link>
        </div>
      </section>
      <section>
        <FooterTop />
      </section>
    </div>
  )
}

export default NotFound 