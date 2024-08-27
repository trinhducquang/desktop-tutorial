import './InspiringGreatness.scss';
import useVideoControl from '../../Hooks/useVideoControl'
import menu1 from '/video/Menu1/menu1.mp4';
import menu2 from '/video/Menu1/menu2.mp4';
import img1 from '/video/Menu1/main1-img1.webp';
import img2 from '/video/Menu1/main1-img2.webp';
import img3 from '/video/Menu1/main1-img3.webp';
import img4 from '/video/Menu1/main1-img4.webp';
import img5 from '/video/Menu1/main1-img5.webp';
import img6 from '/video/Menu1/main1-img6.webp';
import img7 from '/video/Menu1/main1-img7.webp';
import img8 from '/video/Menu1/main1-img8.webp';
import img9 from '/video/Menu1/main1-img9.webp';
import img10 from '/video/Menu1/main1-img10.webp';
import img11 from '/video/Menu1/main1-img11.webp';
import img13 from '/video/Menu1/main1-img13.webp';
import img14 from '/video/Menu1/main1-img14.webp';
import img15 from '/video/Menu1/main1-img15.webp';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button'

const InspiringGreatness = () => {
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
    <div className='Inspiring-Greatness-Container'>
      <section>
        <div className='Menu1-container'>
          <video src={menu1} autoPlay loop muted />
        </div>
      </section>
      <section>
        <div className='Menu1-background-container'>
          <div className='text-overlay'>
            <h2>INSPIRING GREATNESS SERIES</h2>
            <p>This inspirational series from Rolls-Royce offers a window into the worlds of those defying the ordinary. Discover stories from remarkable individuals who are on unrelenting quests for greatness.</p>
          </div>
          <div className='Menu1-video'>
            <video
              src={menu2}
              ref={setVideoRef('menu2')}
              onMouseEnter={() => handleMouseEnter('menu2')}
              onMouseLeave={() => handleMouseLeave('menu2')}
              onClick={() => handleVideoClick('menu2')}
              muted
            />
            <div className='video-controls'>
              <button className='control-btn' onClick={() => handleVideoClick('menu2')}>
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <button className='control-btn' onClick={() => handleFullscreenClick('menu2')}>
                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              </button>
            </div>
          </div>
          <div className='fix-alk-in'>
            <Link to='/Inspiring-Series'>
              <Button label='Watch All Episodes' style={{backgroundColor: 'white'}}/>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className='Navbar-item Navbar-item-Menu1'>
          <div>
            <h3>VALI</h3>
            <p>The pioneering visions of Rolls-Royce Motor Cars unlock a future of unprecedented potential.</p>
          </div>
          <div className='content-container'>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img1} alt="Discover Bespoke" />
                <h4>SPECTRE</h4>
                <p>The marque’s first all-electric motor car is a prophecy fulfilled.</p>
              </div>
            </div>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img2} alt="Explore Models" />
                <h4>THE HISTORY OF COACHBUILD</h4>
                <p>Legacy, craft, and inspiration. A vision realised without compromise.</p>
              </div>
            </div>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img3} alt="Find Your Dealer" />
                <h4>The future in the making: Rolls‑Royce 103EX: Vision Next 100</h4>
                <p>Introducing the visionary Rolls-Royce 103EX. Journey into the future of luxury travel, with our first ever autonomous motor car.</p>
              </div>
            </div>
          </div>
          <Link to='/Vali'>
            <Button label='DISCOVER MORE' style={{backgroundColor: 'white'}}/>
          </Link>
        </div>
      </section>
      <section>
        <div className='Navbar-item Navbar-item-Menu1 Navbar-item-Menu2'>
          <div>
            <h3>HANDBAG</h3>
            <p>Excellence, perfection, and greatness underpin everything we do. By attaining these values, the impossible becomes reality.</p>
          </div>
          <div className='content-container'>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img4} alt="Discover Bespoke" />
                <h4>SPECTRE</h4>
                <p>The marque’s first all-electric motor car is a prophecy fulfilled.</p>
              </div>
            </div>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img5} alt="Explore Models" />
                <h4>THE HISTORY OF COACHBUILD</h4>
                <p>Legacy, craft, and inspiration. A vision realised without compromise.</p>
              </div>
            </div>
            <div className='Navbar-content Navbar-content-1'>
            </div>
          </div>
          <Link to='/Handbag'>
            <Button label='DISCOVER MORE' style={{backgroundColor: 'white'}}/>
          </Link>
        </div>
      </section>
      <section>
        <div className='Navbar-item Navbar-item-Menu1'>
          <div>
            <h3>BACKPACK</h3>
            <p>As a world-class marque, there is more to Rolls-Royce than meets the eye. Explore the experiences and events placing us at the summit of luxury.</p>
          </div>
          <div className='content-container'>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img6} alt="Discover Bespoke" />
                <h4>Goodwood Festival of Speed</h4>
                <p>Experience the world’s finest curation of cars, stars, and motor sport royalty over four splendid days.</p>
              </div>
            </div>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img7} alt="Explore Models" />
                <h4>Enjoy a Private Privilege</h4>
                <p>Go behind the scenes at the Home of Rolls‑Royce in Goodwood, and discover the striking rooms that inspire the creation of truly individual motor cars.</p>
              </div>
            </div>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img8} alt="Find Your Dealer" />
                <h4>Goodwood Revival</h4>
                <p>A golden era of motoring.</p>
              </div>
            </div>
          </div>
          <Link to='/Backpack'>
            <Button label='DISCOVER MORE' style={{backgroundColor: 'white'}}/>
          </Link>
        </div>
      </section>
      <section>
        <div className='Navbar-item Navbar-item-Menu1 Navbar-item-Menu2'>
          <div>
            <h3>GENTLEMEN</h3>
            <p>Excellence, perfection, and greatness underpin everything we do. By attaining these values, the impossible becomes reality.</p>
          </div>
          <div className='content-container'>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img9} alt="Discover Bespoke" />
                <h4>THE HISTORY OF COACHBUILD</h4>
                <p>Legacy, craft, and inspiration. A vision realised without compromise.</p>
              </div>
            </div>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img10} alt="Explore Models" />
                <h4>SPECTRE</h4>
                <p>The marque’s first all-electric motor car is a prophecy fulfilled.</p>
              </div>
            </div>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img11} alt="Find Your Dealer" />
                <h4>Discover Bespoke</h4>
                <p>Explore a world of personalisation and discover the true essence of bespoke luxury.</p>
              </div>
            </div>
          </div>
          <Link to='/Gentlemen'>
            <Button label='DISCOVER MORE' style={{backgroundColor: 'white'}}/>
          </Link>
        </div>
      </section>
      <section>
        <div className='Navbar-item Navbar-item-Menu1'>
          <div>
            <h3>LADIES</h3>
            <p>The pioneering visions of Rolls-Royce Motor Cars unlock a future of unprecedented potential.</p>
          </div>
          <div className='content-container'>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img13} alt="Discover Bespoke" />
                <h4>SPECTRE</h4>
                <p>The marque’s first all-electric motor car is a prophecy fulfilled.</p>
              </div>
            </div>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img14} alt="Explore Models" />
                <h4>THE HISTORY OF COACHBUILD</h4>
                <p>Legacy, craft, and inspiration. A vision realised without compromise.</p>
              </div>
            </div>
            <div className='Navbar-content Navbar-content-1'>
              <div>
                <img src={img15} alt="Find Your Dealer" />
                <h4>The future in the making: Rolls‑Royce 103EX: Vision Next 100</h4>
                <p>Introducing the visionary Rolls-Royce 103EX. Journey into the future of luxury travel, with our first ever autonomous motor car.</p>
              </div>
            </div>
          </div>
            <Link to='/Ladies'>
            <Button label='DISCOVER MORE' style={{backgroundColor: 'white'}}/>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default InspiringGreatness;
