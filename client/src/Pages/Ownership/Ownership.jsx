import './Ownership.scss'
import Owership from '/public/Owership/Mecury.mp4'
import { GrLinkNext } from 'react-icons/gr'
import Carousel from '../../components/Carousel/Carousel.jsx'
import { Page6img } from '../../components/Carousel/imageGroups.js';
import img2 from '/public/Owership/img2.webp'
import img3 from '/public/Owership/img3.webp'
import img4 from '/public/Owership/img4.webp'
import img5 from '/public/Owership/img5.webp'
import img6 from '/public/Owership/img6.webp'
import img7 from '/public/Owership/img7.webp'
import Slider from 'react-slick'
import Roll from '/video/Rolls.mp4';
import useVideoControl from '../../Hooks/useVideoControl';
import Limitless from '/muse/Limitless.mp4'
import Owership3 from '/public/Owership/ownersip3.mp4'
import { Link } from 'react-router-dom'


const Ownership = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const {
        isPlaying,
        isFullscreen,
        handleMouseEnter,
        handleMouseLeave,
        handleVideoClick,
        handleFullscreenClick,
        setVideoRef
    } = useVideoControl();

    return (
        <div className='overflow'>
            <div className='owner-ship-container'>
                <section>
                    <div className='Menu1-container'>
                        <video src={Owership} autoPlay loop muted />
                    </div>
                </section>
                <section>
                    <div className='Menu1-container whisper-container-v1 fix-color-ownership'>
                        <div className='text-overlay text-overplay-v1 fix-one'>
                            <h1>A WORLD FOR OWNERS ONLY</h1>
                            <div>
                                <span />
                            </div>
                            <p>Whispers is a world beyond - for Rolls-Royce owners only. It is the place to gain access to the inaccessible,
                                to discover rare finds, to connect with like-minds, to be the first to receive news and offers, as well as
                                accessing and managing your Rolls-Royce garage. It is all supported by a 24/7 concierge and of course it is complimentary.</p>
                            <p>To access, simply enter your unique Vehicle Identification Number (VIN) and start enriching your Rolls-Royce experience today.</p>
                        </div>
                    </div>
                </section>
                <section className='background-color background-color-owner-ship'>
                    <div className="center-video-container Menu1-video">
                        <video
                            src={Limitless}
                            ref={setVideoRef('Limitless')}
                            onMouseEnter={() => handleMouseEnter('Limitless')}
                            onMouseLeave={() => handleMouseLeave('Limitless')}
                            onClick={() => handleVideoClick('Limitless')}
                            className="centered-video"
                            muted
                        />
                        <div className='video-controls'>
                            <button className='control-btn' onClick={() => handleVideoClick('Limitless')}>
                                {isPlaying ? 'Pause' : 'Play'}
                            </button>
                            <button className='control-btn' onClick={() => handleFullscreenClick('Limitless')}>
                                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                            </button>
                        </div>
                    </div>
                </section>
                <section className='Page-2-item Page-2-color-item'>
                    <div className='Menu1-container Careers-container-section2 Careers-container-section4'>
                        <div className='text-overlay color-overlay best-fix-text'>
                            <h1 >SIGN UP NOW</h1>
                            <div className='border-1-px' style={{ border: '1px solid black' }}></div>
                            <p>Be the first to hear about our commissioning work with artists and designers,
                                events, conversations with collectors and museum partnership programmes.
                            </p>
                            <p>Sign up to our newsletter to hear the latest from Muse,
                                including the latest on the Dream Commission and Spirit of
                                Ecstasy Challenge in 2023.
                            </p>
                            <div className='Page1-button'>
                                <Link to = '/Login'>
                                    <button>STAY CONNECTED
                                        <GrLinkNext className="arrow" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='fix-carousel'>
                        <Carousel media={Page6img} />
                    </div>
                </section>
                <section className='Page-2-item Page-2-color-item color-super-aaa'>
                    <div className='Menu1-container Careers-container-section2 Careers-container-section5 Careers-container-section4'>
                        <div className='text-overlay color-overlay best-fix-text'>
                            <h1>WHISPERS</h1>
                            <div className='border-1-px' style={{ border: '1px solid #6D30A7' }}></div>
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
                <section className='background-color fix-back-cc'>
                    <div className="center-video-container Menu1-video">
                        <video
                            src={Roll}
                            ref={setVideoRef('Roll')}
                            onMouseEnter={() => handleMouseEnter('Roll')}
                            onMouseLeave={() => handleMouseLeave('Roll')}
                            onClick={() => handleVideoClick('Roll')}
                            className="centered-video"
                            muted
                        />
                        <div className='video-controls'>
                            <button className='control-btn' onClick={() => handleVideoClick('Roll')}>
                                {isPlaying ? 'Pause' : 'Play'}
                            </button>
                            <button className='control-btn' onClick={() => handleFullscreenClick('Roll')}>
                                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                            </button>
                        </div>
                    </div>
                </section>
                <section className='Page-2-item Page-2-color-item'>
                    <div className='Menu1-container Careers-container-section2 Careers-container-section5 Careers-container-section4'>
                        <div className='text-overlay color-overlay best-fix-text'>
                            <h1>WHISPERS</h1>
                            <div className='border-1-px' style={{ border: '1px solid #6D30A7' }}></div>
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
                <section className='background-color fix-color-ownership'>
                    <div className="center-video-container Menu1-video">
                        <video
                            src={Owership3}
                            ref={setVideoRef('Owership3')}
                            onMouseEnter={() => handleMouseEnter('Owership3')}
                            onMouseLeave={() => handleMouseLeave('Owership3')}
                            onClick={() => handleVideoClick('Owership3')}
                            className="centered-video"
                            muted
                        />
                        <div className='video-controls'>
                            <button className='control-btn' onClick={() => handleVideoClick('Owership3')}>
                                {isPlaying ? 'Pause' : 'Play'}
                            </button>
                            <button className='control-btn' onClick={() => handleFullscreenClick('Owership3')}>
                                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                            </button>
                        </div>
                    </div>
                </section>
                <section className='Page-2-item Page-2-color-item'>
                    <div className='Menu1-container Careers-container-section2 Careers-container-section5 Careers-container-section4'>
                        <div className='text-overlay color-overlay best-fix-text'>
                            <h1>WHISPERS</h1>
                            <div className='border-1-px' style={{ border: '1px solid #6D30A7' }}></div>
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
                <section>
                    <Slider {...settings} className='Slider-section'>
                        <div>
                            <img src={img2} alt="Pre-owned luggage 1" />
                        </div>
                        <div>
                            <img src={img3} alt="Pre-owned luggage 2" />
                        </div>
                        <div>
                            <img src={img4} alt="Pre-owned luggage 3" />
                        </div>
                    </Slider>
                </section>
                <section className='color-seticon-last'>
                    <div className='Navbar-item fix-color-ownership '>
                        <div className='Menu1-container whisper-container-v1 fix-color-ownership'>
                            <div className='text-overlay text-overplay-v1 fix-one'>
                                <h1>A WORLD FOR OWNERS ONLY</h1>
                                <div>
                                    <span />
                                </div>
                            </div>
                        </div>
                        <div className='content-container fix-boder-left'>
                            <div className='Navbar-content'>
                                <div>
                                    <img src={img5} alt="Discover Bespoke" />
                                    <h4>DISCOVER BESPOKE</h4>
                                    <p>Choose from our exclusive collections or collaborate with our craftspeople and designers to create a Rolls-Royce wholly unique to you. This is Rolls-Royce Bespoke.</p>
                                </div>
                            </div>
                            <div className='Navbar-content'>
                                <div>
                                    <img src={img6} alt="Explore Models" />
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
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Ownership