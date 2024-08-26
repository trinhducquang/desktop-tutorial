import './Preowned.scss';
import Unique from '/public/pre-owned/Unique.mp4';
import { GrLinkNext } from 'react-icons/gr';
import img1 from '/public/pre-owned/img1.webp';
import img2 from '/public/pre-owned/img2.webp';
import img3 from '/public/pre-owned/img3.webp';
import img4 from '/public/pre-owned/img4.webp';
import SpaceSticker from '/public/pre-owned/SpaceSticker.mp4';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import img5 from "/public/pre-owned/img5.webp";
import img12 from "/public/pre-owned/img12.jpg";
import img13 from "/public/pre-owned/img13.jpg";
import nebula from '/public/pre-owned/nebula.webp';
import Carousel from '../../components/Carousel/Carousel.jsx';
import { PreownedMedia } from '../../components/Carousel/imageGroups.js';
import Accordion from '../../components/Accordion/Accordion.jsx';
import { Link } from 'react-router-dom';

const Preowned = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='overflow Preowned-container'>
            <section className="hero-section">
                <div className='hero-video-container'>
                    <video src={Unique} autoPlay loop muted />
                </div>
            </section>
            <section className='intro-section'>
                <div className='intro-text'>
                    <div>
                        <h3>RIMOWA AUTHENTIC LUGGAGE</h3>
                        <h2>INTRODUCING THE RIMOWA COLLECTION</h2>
                        <p>Rimowa luggage is a symbol of top-tier craftsmanship and elegance. From classic models to modern designs, each Rimowa product tells a unique story – from its meticulous creation to its first owner's adventurous journeys. As a Rimowa owner, you will experience luggage that performs as beautifully as the day it was made.</p>
                        <p>Continue the legacy and discover your certified Rimowa luggage.</p>
                    </div>
                    <div className='cta-buttons'>
                        <button>
                            CONTACT A DEALER
                            <GrLinkNext className="cta-arrow" />
                        </button>
                        <button>
                            Search Pre-Owned
                            <GrLinkNext className="cta-arrow" />
                        </button>
                    </div>
                </div>
            </section>
            <section className='carousel-section'>
                <Slider {...settings} className='Slider-section'>
                    <div>
                        <img src={img1} alt="Pre-owned luggage 1" />
                    </div>
                    <div>
                        <img src={img2} alt="Pre-owned luggage 2" />
                    </div>
                    <div>
                        <img src={img3} alt="Pre-owned luggage 3" />
                    </div>
                    <div>
                        <img src={img4} alt="Pre-owned luggage 4" />
                    </div>
                </Slider>
            </section>
            <section>
                <div className='hero-text-section'>
                    <h2>THE RIMOWA PROPOSITION</h2>
                </div>
            </section>
            <section className='img-section'>
                <div className='image-container'>
                    <img src={img5} alt="Featured" />
                    <div className='text-overlay'>
                        <div>
                            <h2>360 DEGREE INSPECTION</h2>
                            <p>Before awarding the certified title, every element of each luggage must be thoroughly tried and tested against our renowned standards.</p>
                        </div>
                        <div>
                            <h2>LOVINGLY RESTORED</h2>
                            <p>We demand our collection to be flawless in form and impressive in nature. Each luggage piece is lovingly restored as close as it can be to the original specification.</p>
                        </div>
                        <div>
                            <h2>EXCLUSIVE ACCESS</h2>
                            <p>As the owner of a Rimowa luggage, you will be one of the select few with immediate access to exclusive experiences, connections, and a 24/7 complimentary concierge.</p>
                        </div>
                        <div>
                            <h2>UNPARALLELED PRIVILEGES</h2>
                            <p>Owning Rimowa luggage grants you access to a world of unique experiences, exceptional connections, and a dedicated concierge service available around the clock.</p>
                        </div>
                        <div>
                            <h2>UNPARALLELED PRIVILEGES</h2>
                            <p>Owning Rimowa luggage grants you access to a world of unique experiences, exceptional connections, and a dedicated concierge service available around the clock.</p>
                        </div>
                        <div>
                            <h2>UNPARALLELED PRIVILEGES</h2>
                            <p>Owning Rimowa luggage grants you access to a world of unique experiences, exceptional connections, and a dedicated concierge service available around the clock.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='intro-section intro-section2'>
                <div className='intro-text'>
                    <div>
                        <h3>LOVINGLY RESTORED</h3>
                        <p>Each Rimowa luggage piece is a masterpiece,
                            officially approved by the Rimowa team and
                            lovingly restored as close as it can be to the original
                            specification. By upholding a discerning attitude,
                            we ensure that legacies are preserved for generations to come.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-preowned-video">
                    <img src={nebula} alt="Nebula" />
                    <div className='Menu1-video Preowned-video'>
                        <video src={SpaceSticker} controls autoPlay loop muted />
                    </div>
                </div>
            </section>
            <section className='intro-section intro-section2'>
                <div className='intro-text'>
                    <div>
                        <h3>BESPOKE FOR RIMOWA</h3>
                        <p>Tailor your Rimowa luggage by selecting from a breadth of available bespoke features.
                            Glamorous embellishments, striking color combinations, artisanal detailing – every
                            Rimowa piece can be tailored to its new owner through truly expressive customization. Bring original
                            concepts to life through conversations with our Rimowa Bespoke team.
                        </p>
                        <div>
                            <button>
                                CONTACT A DEALER
                                <GrLinkNext className="arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div style={{ backgroundColor: 'rgb(210, 210, 210)' }}>
                    <Carousel media={PreownedMedia} />
                </div>
            </section>
            <section>
                <div className='hero-text-section hero-text-section-2'>
                    <h2>An already ingrained courageous essence inspires more adventures yet to come.</h2>
                </div>
            </section>
            <section>
                <div className="img-section img-section-2">
                    <div className='image-container'>
                        <img src={img12} alt="Nebula" />
                        <div className='text-overlay text-overlay2'>
                            <div>
                                <h2>JOIN THE WORLD'S MOST EXCLUSIVE CLUB</h2>
                                <p>Rimowa luggage opens the door to a new way of living; one rooted in the extraordinary. The acquisition
                                    of each Rimowa piece grants owners access to exclusive experiences, products, services, and ideas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='hero-text-section hero-text-section-2 hero-text-section-3'>
                    <h2>Preservation is what defines legacy.</h2>
                </div>
            </section>
            <section className='Privacy-item Preowned-item'>
                <div className='item'>
                    <div className='Legal-accordion abc'>
                        <h1>Rimowa in detail</h1>
                        <Accordion />
                    </div>
                </div>
            </section>
            <section>
                <div className="img-section img-section-3">
                    <div className='image-container'>
                        <img src={img13} alt="Nebula" />
                        <h2>begin your Rimowa story</h2>
                        <button>
                            Search Pre-Owned
                            <GrLinkNext className="cta-arrow" />
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className='Navbar-item fix-pre-item'>
                    <div>
                        <h3>CONTINUE YOUR JOURNEY</h3>
                    </div>
                    <div className='content-container'>
                        <div className='Navbar-content'>
                            <div>
                                <img src={img1} alt="Discover Bespoke" />
                                <h4>DISCOVER BESPOKE</h4>
                                <p>Choose from our exclusive collections or collaborate with our craftspeople and designers to create a Rimowa piece wholly unique to you. This is Rimowa Bespoke.</p>
                            </div>
                        </div>
                        <div className='Navbar-content'>
                            <div>
                                <img src={img2} alt="Explore Models" />
                                <h4>EXPLORE MODELS</h4>
                                <p>Explore our stunning collection of new Rimowa models. Whether you’re looking for the ultimate luxury suitcase, a sporty travel companion or a refined carry-on, we have something for you.</p>
                            </div>
                        </div>
                        <div className='Navbar-content'>
                            <div>
                                <img src={img4} alt="Find Your Dealer" />
                                <h4>FIND A DEALER</h4>
                                <p>Find a Rimowa dealer near you and book a consultation or discover more about the bespoke services we offer.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="img-section img-section-3">
                    <div className='image-container image-container-fix'>
                        <button>
                            <Link to='/Inspiring-Greatness'>
                                Inspiring Greatness
                                <GrLinkNext className="cta-arrow" />
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Preowned;
