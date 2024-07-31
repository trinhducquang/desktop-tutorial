import React from 'react';
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
import Carousel from '../../Carousel/Carousel.jsx'
import { PreownedImages } from '../../Carousel/imageGroups';
import Accordion from '../Accordion/Accordion.jsx';
import { Link } from 'react-router-dom'


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
        <div className='overflow'>
            <section className="hero-section">
                <div className='hero-video-container'>
                    <video src={Unique} autoPlay loop muted />
                    <div className='hero-text-overlay'>
                        <h1>INSPIRING GREATNESS</h1>
                    </div>
                </div>
            </section>
            <section className='intro-section'>
                <div className='intro-text'>
                    <div>
                        <h3>CERTIFIED PRE-OWNED MOTOR CARS</h3>
                        <h2>INTRODUCING PROVENANCE BY ROLLS-ROYCE</h2>
                        <p>Provenance motor cars are previously owned Rolls-Royce models meticulously refurbished to the highest standards. Spanning all models and encompassing often rare styles, each Provenance motor car has a rich history – from its inception at the hands of master technicians, to its first intrepid owner exploring boundless opportunity from within. As a Provenance owner, you will experience a Rolls-Royce that drives as beautifully as it did the day it left the Home of Rolls-Royce in Goodwood.</p>
                        <p>Continue the legacy and discover your certified Rolls-Royce Provenance motor car.</p>
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
                        <img src={img1} alt="Pre-owned car 1" />
                    </div>
                    <div>
                        <img src={img2} alt="Pre-owned car 2" />
                    </div>
                    <div>
                        <img src={img3} alt="Pre-owned car 3" />
                    </div>
                    <div>
                        <img src={img4} alt="Pre-owned car 4" />
                    </div>
                </Slider>
            </section>
            <section>
                <div className='hero-text-section'>
                    <h2>THE PROVENANCE PROPOSITION</h2>
                </div>
            </section>
            <section className='img-section'>
                <div className='image-container'>
                    <img src={img5} alt="Featured" />
                    <div className='text-overlay'>
                        <div>
                            <h2>360 DEGREE INSPECTION</h2>
                            <p>Before we award the certified Provenance title, every element of each motor car must be thoroughly trialled and tested against our renowned standards.</p>
                        </div>
                        <div>
                            <h2>LOVINGLY RESTORED</h2>
                            <p>We demand that our collection be flawless in form and impressive in nature. Each motor car is lovingly restored as close as it can be to the original specification.</p>
                        </div>
                        <div>
                            <h2>WHISPERS EXCLUSIVE ACCESS</h2>
                            <p>As the owner of a Provenance motor car, you will be one of the select few with immediate access to Whispers – our private members club, offering unique experiences, connections and a 24/7 complimentary concierge.</p>
                        </div>
                        <div>
                            <h2>WHISPERS EXCLUSIVE ACCESS</h2>
                            <p>As the owner of a Provenance motor car, you will be one of the select few with immediate access to Whispers – our private members club, offering unique experiences, connections and a 24/7 complimentary concierge.</p>
                        </div>
                        <div>
                            <h2>WHISPERS EXCLUSIVE ACCESS</h2>
                            <p>As the owner of a Provenance motor car, you will be one of the select few with immediate access to Whispers – our private members club, offering unique experiences, connections and a 24/7 complimentary concierge.</p>
                        </div>
                        <div>
                            <h2>WHISPERS EXCLUSIVE ACCESS</h2>
                            <p>As the owner of a Provenance motor car, you will be one of the select few with immediate access to Whispers – our private members club, offering unique experiences, connections and a 24/7 complimentary concierge.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='intro-section intro-section2'>
                <div className='intro-text'>
                    <div>
                        <h3>LOVINGLY RESTORED</h3>
                        <p>Each Provenance motor car is a masterpiece,
                            officially approved by the Rolls-Royce team and
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
                        <h3>BESPOKE FOR PROVENANCE</h3>
                        <p>Tailor your Provenance motor car by selecting from a breadth of available Bespoke features.
                            Glamorous embellishments, striking colour combinations, artisanal detailing – every
                            Provenance motor car can be tailored to its new owner through truly expressive customisation. Bring original
                            concepts to life through conversations with our Rolls-Royce Bespoke team.
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
                <div>
                    <Carousel images={PreownedImages} />
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
                        <div className='text-overlay text-overplay2'>
                            <div>
                                <h2>JOIN THE WORLD'S MOST EXCLUSIVE CLUB</h2>
                                <p>A Rolls-Royce motor car opens the door to a new way of living; one rooted in the extraordinary. The acquisition
                                    of each Provenance motor car grants owners access to Whispers — our private members club and digital extension
                                    of the marque, offering the world’s most rarefied products, services and ideas.</p>
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
                    <div className='Legal-accordion'>
                        <h1>provenance in detail</h1>
                        <Accordion />
                    </div>
                </div>
            </section>
            <section>
                <div className="img-section img-section-3">
                    <div className='image-container'>
                        <img src={img13} alt="Nebula" />
                        <h2>begin your provenance story</h2>
                        <button>
                            Search Pre-Owned
                            <GrLinkNext className="cta-arrow" />
                        </button>
                    </div>
                </div>
            </section>
            <section>
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
                                <img src={img4} alt="Find Your Dealer" />
                                <h4>FIND A DEALER</h4>
                                <p>Find a Rolls-Royce dealer near you and book a test drive or discover more about the bespoke services we offer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-section img-section-3">
                    <div className='image-container image-container-fix'>
                        <button>
                            <Link to='/menu1'>
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
