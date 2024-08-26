import './Failed.scss'
import original from '/public/NotFound/original.jpeg'
import FooterTop from '../../components/Footer-top/FooterTop'
import img1 from '/public/Failed/img1.png'
import img2 from '/public/Failed/img2.png'
import img3 from '/public/Failed/img3.png'
import VerticalLine from '../../components/VerticalLine/VerticalLine'
import { Link } from 'react-router-dom'
import { GrLinkNext } from 'react-icons/gr'

const Success = () => {
    return (
        <div className='NotFound-container overflow'>
            <section>
                <div className='Navbar-img'>
                    <img src={original} alt="Rimowa Contact" />
                    <div className='img-content'>
                        <h2 style={{marginTop: '3%'}}>FAILED</h2>
                        <div style={{marginTop: '3%'}}>
                        <VerticalLine/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='text-center'>
                    <h3>Payment Failed!</h3>
                    <h1>Sorry, there was an issue processing your payment.</h1>
                    <p>Please try again or contact support if the issue persists.</p>
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
                                <img src={img3} alt="Find Your Dealer" />
                                <h4>FIND A DEALER</h4>
                                <p>Find a Rolls-Royce dealer near you and book a test drive or discover more about the bespoke services we offer.</p>
                            </div>
                        </div>
                    </div>
                    <div className='Page1-button fix2-button'>
                        <Link to='/Inspiring-Greatness'>
                            Inspiring Greatness
                            <GrLinkNext className="arrow" />
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <FooterTop />
            </section>
        </div>
    )
}

export default Success