import './Page5.scss'
import { Link } from 'react-router-dom'
import img1 from '/public/muse/Page4/img1.webp'
import img2 from '/public/muse/Page5/img2.webp'
import img3 from '/public/muse/Page5/img3.webp'
import img4 from '/public/muse/Page5/img4.webp'
import img5 from '/public/muse/Page5/img5.webp'
import Button from '../../../../components/Button/Button.jsx'
import video1 from '/public/muse/Page5/video1.mp4'
import VideoCarousel from '../../../../components/VideoCarousel/VideoCarousel.jsx'
import useVideoControl from '../../../../Hooks/useVideoControl.js';
import { mediaData } from '../../../../components/Carousel/imageGroups.js'


const Page5 = () => {

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
        <div className='Page2-container overflow'>
            <section>
                <div className='Menu1-container page-2-overlay'>
                    <img src={img1} />
                    <div className='text-overlay text-overplay-2'>
                        <h1>SPIRIT OF ECSTASY CHALLENGE</h1>
                    </div>
                </div>
            </section>
            <section className='Page-2-item'>
                <div className='Menu1-container Careers-container-section3'>
                    <div className='text-overlay color-overlay'>
                        <p>Titled “Stitched Urban Skin”, Bi Rongrong’s winning artwork for the Spirit of
                            Ecstasy Challenge consists of three layers of two-dimensional sheets made from
                            different materials: specially treated metal,
                            an animated LED light sheet, and a Perspex sheet embedded with crochet.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={img2} />
                    <div className='item-span-fix fix-best-span'>
                        <span>Bi Rongrong, 2022, Stitched Urban Skin, for Muse, The Rolls-Royce Arts Programme,
                            photo by Zhang Jin
                        </span>
                    </div>
                </div>
            </section>
            <section>
                <div className='fix-best-img-page'>
                    <img src={img3} />
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section2 Careers-container-section3'>
                    <div className='text-overlay color-overlay'>
                        <p>Old and new are woven together as the artist revives a traditional Chinese crochet technique practised by a small female collective
                            working just outside of Shanghai. These women have used the same materials for the past 40 years, and by incorporating their knowledge into her work, Bi Rongrong helps keep their craft alive. In her work, the artist has used both their crochet pieces and embroidery created in her own studio, bringing her own spin to this ancient practice.</p>
                        <p>As the title of her work suggests, the artist also draws inspiration from the multi-layered landscape of cities. The sheets are hung together with a space
                            between them, creating a three-dimensional effect which invites viewers to peer into the artwork. The animated lights in the LED sheet have been designed to mirror historical and contemporary architectural shapes which the artist has “collected” over the years, and are accompanied by a sound piece. The overall effect is a dynamic sculpture which combines craftsmanship and innovation.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-preowned-video">
                    <img src={img4} alt="Nebula" />
                    <div className='Menu1-video Preowned-video'>
                        <video
                            src={video1}
                            ref={setVideoRef('video4')}
                            onMouseEnter={() => handleMouseEnter('video4')}
                            onMouseLeave={() => handleMouseLeave('video4')}
                            onClick={() => handleVideoClick('video4')}
                            muted
                        />
                        <div className='video-controls'>
                            <button className='control-btn' onClick={() => handleVideoClick('video4')}>
                                {isPlaying ? 'Pause' : 'Play'}
                            </button>
                            <button className='control-btn' onClick={() => handleFullscreenClick('video4')}>
                                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='Menu1-container page-2-overlay'>
                    <img src={img5} />
                    <div className='text-overlay text-overplay-2 text-fix-last-best'>
                        <p>INTRODUCING SPIRIT OF ECSTASY CHALLENGE WINNER</p>
                        <h1>GHIZLANE SAHLI</h1>
                        <div className='Page1-button fix2-button'>
                            <Link to='/Inspiring-Greatness'>                           
                            <Button label='EXPLORE' style={{ border: 'none', backgroundColor: 'transparent', fontSize: '13px' }} color='black' />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <VideoCarousel media={mediaData} />
                </div>
            </section>
            <section className='Page-2-item Page-2-color-item color-best-abc'>
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
                        <div style={{marginTop: '30px'}}>
                            <Button label='STAY CONNECTED' style={{ backgroundColor: '#6D30A7', padding: '15px' }} borderColor='none' color='White' />
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
                                <img src={img5} alt="Find Your Dealer" />
                                <h4>FIND A DEALER</h4>
                                <p>Find a Rolls-Royce dealer near you and book a test drive or discover more about the bespoke services we offer.</p>
                            </div>
                        </div>
                    </div>
                    <Link to='/Inspiring-Greatness'>
                        <Button label='Inspiring Greatness' style={{ border: 'none', backgroundColor: 'transparent' }} color='white' />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Page5