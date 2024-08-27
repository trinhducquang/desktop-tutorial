import img from '/public/Whispers/img.jpg';
import './whispers.scss';
import { GrLinkNext } from "react-icons/gr";
import Roll from '/video/Rolls.mp4';
import useVideoControl from '../../Hooks/useVideoControl';
import Carousel from '../../components/Carousel/Carousel';
import { WhispersMedia } from '../../components/Carousel/imageGroups';
import img1 from '/public/muse/page3/img1.webp'
import img2 from '/public/muse/page3/img2.webp'
import img3 from '/public/muse/page3/img3.webp'
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
const Whispers = () => {
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
      <section>
        <div className='whisper-container'>
          <div className='Navbar-img'>
            <img src={img} alt="Cullinan" />
            <div className='img-content'>
              <h2>CHARGING SPECTRE</h2>
              <Button label = 'DISCOVER NOW' style={{border: 'none'}}/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='Menu1-container whisper-container-v1'>
          <div className='text-overlay text-overplay-v1'>
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
      <section className='background-color'>
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
        <Button label='REQUEST ACCESS' style={{ border: '2px solid white', background: 'transparent', fontSize: '13px', color: 'white' }} />
      </section>
      <section className='background-color-v1'>
        <div className='Menu1-container whisper-container-v2 whisper-container-v5'>
          <div className='text-overlay text-overplay-v1 text-overplay-v2'>
            <h1>EXPLORE WHISPERS</h1>
            <p>For Rolls-Royce owners, Whispers unlocks new horizons, and grants access to the most memorable experiences.
              Discover a world where unique opportunities to connect meet unparalleled possibilities.</p>
          </div>
        </div>
        <div className='carousel-padding'>
          <Carousel media={WhispersMedia} />
          <div className='Menu1-container heightwhisper'>
            <div className='text-overlay text-overplay-v2'>
              <p>For Rolls-Royce owners, Whispers unlocks new horizons, and grants access to the most memorable experiences. Discover a world where unique opportunities to connect meet unparalleled possibilities.</p>
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
            <Link to='/Inspiring-Greatness'>
              <Button label='Inspiring Greatness' style={{background: 'transparent', color: 'white' }} />
            </Link>
        </div>
      </section>
    </div>
  );
}

export default Whispers;
