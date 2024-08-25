import React from 'react'
import video1 from '/public/muse/Page6/video1.mp4'
import img1 from '/public/muse/Page6/img1.webp'
import img2 from '/public/muse/Page6/img2.webp'
import img3 from '/public/muse/Page6/img3.webp'
import img4 from '/public/muse/Page6/img4.webp'
import img7 from '/public/muse/Page6/img7.webp'
import img9 from '/public/muse/Page6/img9.webp'


import Carousel from '../../../../components/Carousel/Carousel.jsx'
import Slider from 'react-slick'
import { Page6img } from '../../../../components/Carousel/imageGroups.js';
import { GrLinkNext } from 'react-icons/gr'
import { Link } from 'react-router-dom'





import './Page6.scss'


const Page6 = () => {
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
            <section>
                <div>
                    <div className='Navbar-img'>
                        <video src={video1} alt="Culinan" autoPlay loop muted />
                    </div>
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section Page6-background'>
                    <div className='text-overlay color-overlay'>
                        <p>Experience Rolls-Royce Motor Cars. From design and production to launch and ownership services, bringing our iconic products into the world requires
                            a dedicated team of hard-working, responsible, and creative individuals —
                            each of whom helps shape the chapters in Rolls-Royce Motor Cars’ story. Whether you are starting
                            your career through one of our graduate programmes, internships or apprenticeships, or are an experienced professional
                            looking for an exciting new path, we offer a wide range of career opportunities for people ready to make their mark.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='Page6-img-fix'>
                    <img src={img1} />
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section2 Page6-background'>
                    <div className='text-overlay color-overlay'>
                        <p>Since its founding in 1904, textiles have played a key role in Rolls-Royce’s heritage. As well as
                            featuring the highest quality leather and metal surfaces, early models also showcased the most delicate
                            fabrics in their interiors, undergoing the same meticulous design process to create the utmost picture of
                            luxury. Today, fabrics are once again at the forefront of the Rolls-Royce design story. Christine Franck,
                            head of materials at Rolls-Royce, tells us more about textile innovation at the brand.
                        </p>
                        <p>‘Textiles have always been at the core of our history,’ explains Franck.
                            ‘Owners of early Rolls-Royce models finished the rear cabins with finest
                            and most precious fabrics, while the chauffeur’s seat was upholstered with
                            a more rigid material — leather. Over the years, the tradition
                            of leather has become very strong, but textiles is where we come
                            from and where we’re going in the future.’</p>
                        <p>Over the recent years Rolls-Royce brought beautiful fabrics back into the car, pushing the boundaries of what’s
                            possible in bespoke design. Each individual fabric is conceived and developed as you would a work of art, and treated,
                            in Franck’s words, ‘like a masterpiece which is up to the makers.’</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='Page6-img-fix'>
                    <img src={img2} />
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section2 Page6-background'>
                    <div className='text-overlay color-overlay'>
                        <p>Since its founding in 1904, textiles have played a key role in Rolls-Royce’s heritage. As well as
                            featuring the highest quality leather and metal surfaces, early models also showcased the most delicate
                            fabrics in their interiors, undergoing the same meticulous design process to create the utmost picture of
                            luxury. Today, fabrics are once again at the forefront of the Rolls-Royce design story. Christine Franck,
                            head of materials at Rolls-Royce, tells us more about textile innovation at the brand.
                        </p>
                        <p>‘Textiles have always been at the core of our history,’ explains Franck.
                            ‘Owners of early Rolls-Royce models finished the rear cabins with finest
                            and most precious fabrics, while the chauffeur’s seat was upholstered with
                            a more rigid material — leather. Over the years, the tradition
                            of leather has become very strong, but textiles is where we come
                            from and where we’re going in the future.’</p>
                        <p>Over the recent years Rolls-Royce brought beautiful fabrics back into the car, pushing the boundaries of what’s
                            possible in bespoke design. Each individual fabric is conceived and developed as you would a work of art, and treated,
                            in Franck’s words, ‘like a masterpiece which is up to the makers.’</p>
                    </div>
                </div>
            </section>
            <section className='carousel-section carousel-section-background'>
                <Slider {...settings} className='Slider-section'>
                    <div>
                        <img src={img3} alt="Pre-owned car 1" />
                    </div>
                    <div>
                        <img src={img4} alt="Pre-owned car 2" />
                    </div>
                </Slider>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section2 Page6-background'>
                    <div className='text-overlay color-overlay fix-color-overlay'>
                        <p>‘This is what makes Rolls-Royce distinct from other brands’, says Franck. ‘All the craft is in our own hands, and this
                            allows us to address each client’s specific wishes. We have the most discerning clients in the world who know exactly
                            what they want and have high expectations. They come to Rolls-Royce because
                            they know that they will be able to engage in a dialogue and create a unique luxury object which is specifically tailored to them.’
                        </p>
                        <p>The endless potential of textiles allows Rolls-Royce to engage more deeply with the notion of craftsmanship. ‘The advantage of using textiles
                            is that it allows for so many beautiful details and creates a sense of curation. You start from scratch and work on the specifics — materials,
                            colours, breathability — and
                            define how it will feel, look, and behave. The adjustable nature of textiles makes it a perfect medium for Bespoke craftsmanship.’</p>
                    </div>
                </div>
            </section>
            <section>
                <div style={{ backgroundColor: 'black' }}>
                    <Carousel media={Page6img} />
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section2 Page6-background'>
                    <div className='text-overlay color-overlay'>
                        <p>Since its founding in 1904, textiles have played a key role in Rolls-Royce’s heritage. As well as
                            featuring the highest quality leather and metal surfaces, early models also showcased the most delicate
                            fabrics in their interiors, undergoing the same meticulous design process to create the utmost picture of
                            luxury. Today, fabrics are once again at the forefront of the Rolls-Royce design story. Christine Franck,
                            head of materials at Rolls-Royce, tells us more about textile innovation at the brand.
                        </p>
                        <p>‘Textiles have always been at the core of our history,’ explains Franck.
                            ‘Owners of early Rolls-Royce models finished the rear cabins with finest
                            and most precious fabrics, while the chauffeur’s seat was upholstered with
                            a more rigid material — leather. Over the years, the tradition
                            of leather has become very strong, but textiles is where we come
                            from and where we’re going in the future.’</p>
                        <p>Over the recent years Rolls-Royce brought beautiful fabrics back into the car, pushing the boundaries of what’s
                            possible in bespoke design. Each individual fabric is conceived and developed as you would a work of art, and treated,
                            in Franck’s words, ‘like a masterpiece which is up to the makers.’</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='Page6-img-fix'>
                    <img src={img7} />
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section2 Page6-background'>
                    <div className='text-overlay color-overlay '>
                        <p>Since its founding in 1904, textiles have played a key role in Rolls-Royce’s heritage. As well as
                            featuring the highest quality leather and metal surfaces, early models also showcased the most delicate
                            fabrics in their interiors, undergoing the same meticulous design process to create the utmost picture of
                            luxury. Today, fabrics are once again at the forefront of the Rolls-Royce design story. Christine Franck,
                            head of materials at Rolls-Royce, tells us more about textile innovation at the brand.
                        </p>
                        <p>‘Textiles have always been at the core of our history,’ explains Franck.
                            ‘Owners of early Rolls-Royce models finished the rear cabins with finest
                            and most precious fabrics, while the chauffeur’s seat was upholstered with
                            a more rigid material — leather. Over the years, the tradition
                            of leather has become very strong, but textiles is where we come
                            from and where we’re going in the future.’</p>
                        <p>Over the recent years Rolls-Royce brought beautiful fabrics back into the car, pushing the boundaries of what’s
                            possible in bespoke design. Each individual fabric is conceived and developed as you would a work of art, and treated,
                            in Franck’s words, ‘like a masterpiece which is up to the makers.’</p>
                    </div>
                </div>
                <div>
                    <div className='Navbar-img Careers-container-section6'>
                        <img src={img9}/>
                    </div>
                </div>
            </section>
            <section className='Page-2-item Page-2-color-item color-best-abc color-fix-aaa '>
                <div className='Menu1-container Careers-container-section2 Careers-container-section4'>
                    <div className='text-overlay color-overlay best-fix-text'>
                        <h1 >SIGN UP NOW</h1>
                        <div className='border-1-px'></div>
                        <p>Be the first to hear about our commissioning work with artists and designers,
                            events, conversations with collectors and museum partnership programmes.
                        </p>
                        <p>Sign up to our newsletter to hear the latest from Muse,
                            including the latest on the Dream Commission and Spirit of
                            Ecstasy Challenge in 2023.
                        </p>
                        <div className='Page1-button'>
                            <button>STAY CONNECTED
                                <GrLinkNext className="arrow" />
                            </button>
                        </div>
                    </div>
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
                                <img src={img3} alt="Discover Bespoke" />
                                <h4>DISCOVER BESPOKE</h4>
                                <p>Choose from our exclusive collections or collaborate with our craftspeople and designers to create a Rolls-Royce wholly unique to you. This is Rolls-Royce Bespoke.</p>
                            </div>
                        </div>
                        <div className='Navbar-content'>
                            <div>
                                <img src={img4} alt="Explore Models" />
                                <h4>EXPLORE MODELS</h4>
                                <p>Explore our stunning collection of new Rolls-Royce models. Whether you’re looking for the ultimate luxury saloon, a sporty coupe or a refined convertible, we have something for you.</p>
                            </div>
                        </div>
                        <div className='Navbar-content'>
                            <div>
                                <img src={img7} alt="Find Your Dealer" />
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
        </div>
    )
}

export default Page6