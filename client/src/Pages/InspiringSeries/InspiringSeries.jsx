import React from 'react'
import './InspiringSeries.scss'
import ArcticBlue from '/public/InspiringSeries/ArcticBlue.mp4'
import img from '/public/InspiringSeries/img.webp'
import Espisode from '/public/InspiringSeries/Espisode.mp4'
import useVideoControl from '../../Hooks/useVideoControl';
import Carousel from '../../components/Carousel/Carousel'
import { CareersVideo } from '../../components/Carousel/imageGroups.js';
import { epstion3 } from '../../components/Carousel/imageGroups.js';

import { GrLinkNext } from "react-icons/gr";

const InspiringSeries = () => {

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
        <div>
            <section>
                <div className='Menu1-container'>
                    <video src={ArcticBlue} autoPlay loop muted />
                    <div className='text-overlay'>
                        <h1>INSPIRING GREATNESS</h1>
                        <p>Inspiring Greatness exists at the very core of Rolls-Royce Motor Cars. It is the guiding force from which our innovation, aspirations, and ongoing legacy unfold. As we continue to extend the limits of possibility, Inspiring Greatness will forever remain our ultimate pursuit.</p>
                    </div>
                </div>
            </section>
            <div className='inspiringSeries-container'>
                <section>
                    <div className='Menu1-container section1-container'>
                        <div className='text-overlay text-series-color'>
                            <p>Limits are meant to be pushed and boundaries redrawn. In recognition of those who shape the world around us, Rolls-Royce presents
                                an anthology of aspirational stories highlighting extraordinary
                                ambition and distinguished achievement. For these are the prized hallmarks that define the Home of Rolls-Royce in Goodwood.</p>
                            <p>Join us as we celebrate exceptional individuals, ideas and endeavours, aiming to inspire
                                a new wave of icons on their ascent towards greatness.</p>
                            <div className='Careers-buttons'>
                                <button>
                                    <span>SEARCH & APPLY</span>
                                    <GrLinkNext className="arrow" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <hr />
                </div>
                <section>
                    <div className='Menu1-background-container'>
                        <div className='text-overlay'>
                            <h2>THE VOICE OF THE MAKER</h2>
                            <p>Showcasing savoir-faire at the Home of Rolls-Royce in Goodwood.</p>
                        </div>
                        <div className='Menu1-video Menu-best-video'>
                            <video
                                src={ArcticBlue}
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
                        <div className='text-overlay'>
                            <p>In celebration of the Lunar New Year, the ‘Year of the Dragon’ fascia
                                is meticulously hand-painted by a single Rolls-Royce lacquer specialist.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='Menu1-container Careers-container-section2 section1-container'>
                        <div className='text-overlay color-overlay careers-overlay-8'>
                            <p>‘To create a three-dimensional effect on the dragon, I used multiple shades of red layered on top of each other.’</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="img-section img-section-3">
                        <div className='image-container'>
                            <img src={img} alt="Nebula" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='Menu1-container section1-container'>
                        <div className='text-overlay text-series-color'>
                            <h1>OTHER CHAPTER EPISODES</h1>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='Menu1-background-container'>
                        <div className='Menu1-video'>
                            <video
                                src={Espisode}
                                ref={setVideoRef('Espisode')}
                                onMouseEnter={() => handleMouseEnter('Espisode')}
                                onMouseLeave={() => handleMouseLeave('Espisode')}
                                onClick={() => handleVideoClick('Espisode')}
                                muted
                            />
                            <div className='video-controls'>
                                <button className='control-btn' onClick={() => handleVideoClick('Espisode')}>
                                    {isPlaying ? 'Pause' : 'Play'}
                                </button>
                                <button className='control-btn' onClick={() => handleFullscreenClick('Espisode')}>
                                    {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                                </button>
                            </div>
                        </div>
                        <div className='text-overlay '>
                            <h2>ELEVATING PARQUETRY WITH COACHBUILD</h2>
                            <p>With techniques honed as a Rolls-Royce apprentice,
                                this wood specialist crafts a parquetry masterpiece for a singular Coachbuild offering.</p>
                        </div>
                    </div>
                </section>
                <div>
                    <hr />
                </div>
                <section>
                    <div className='Menu1-container whisper-container-v1'>
                        <div className='text-overlay text-overplay-v1'>
                            <h3>CHAPTER 4</h3>
                            <h1>BEYOND LIMITATION</h1>
                            <div>
                                <span />
                            </div>
                            <p>Highlighting those who are courageously pushing the boundaries of possibility.</p>
                        </div>
                    </div>
                    <div>
                        <Carousel media={CareersVideo} />
                    </div>
                    <div className='Menu1-container section1-container section2-container'>
                        <div className='text-overlay text-series-color'>
                            <h2>OTHER CHAPTER EPISODES</h2>
                            <p>Join Refik Anadol on his journey to create bespoke, human-centric artworks that blur the line between </p>
                        </div>
                    </div>
                </section>
                <div>
                    <hr />
                </div>
                <section>
                    <div className='Menu1-container whisper-container-v1'>
                        <div className='text-overlay text-overplay-v1'>
                            <h3>CHAPTER 3</h3>
                            <h1>BEYOND LIMITATION</h1>
                            <div>
                                <span />
                            </div>
                            <p>Highlighting those who are courageously pushing the boundaries of possibility.</p>
                        </div>
                    </div>
                    <div>
                        <Carousel media={epstion3} />
                    </div>
                    <div className='Menu1-container section1-container section2-container'>
                        <div className='text-overlay text-series-color'>
                            <h2>OTHER CHAPTER EPISODES</h2>
                            <p>Join Refik Anadol on his journey to create bespoke, human-centric artworks that blur the line between </p>
                        </div>
                    </div>
                </section>
                <div>
                    <hr />
                </div>
                <section>
                    <div className='Menu1-container whisper-container-v1'>
                        <div className='text-overlay text-overplay-v1'>
                            <h3>CHAPTER 2</h3>
                            <h1>BEYOND LIMITATION</h1>
                            <div>
                                <span />
                            </div>
                            <p>Highlighting those who are courageously pushing the boundaries of possibility.</p>
                        </div>
                    </div>
                    <div>
                        <Carousel media={CareersVideo} />
                    </div>
                    <div className='Menu1-container section1-container section2-container'>
                        <div className='text-overlay text-series-color'>
                            <h2>OTHER CHAPTER EPISODES</h2>
                            <p>Join Refik Anadol on his journey to create bespoke, human-centric artworks that blur the line between </p>
                        </div>
                    </div>
                </section>
                <div>
                    <hr />
                </div>
                <section>
                    <div className='Menu1-container whisper-container-v1'>
                        <div className='text-overlay text-overplay-v1'>
                            <h3>CHAPTER 1</h3>
                            <h1>BEYOND LIMITATION</h1>
                            <div>
                                <span />
                            </div>
                            <p>Highlighting those who are courageously pushing the boundaries of possibility.</p>
                        </div>
                    </div>
                    <div>
                        <Carousel media={CareersVideo} />
                    </div>
                    <div className='Menu1-container section1-container section2-container'>
                        <div className='text-overlay text-series-color'>
                            <h2>OTHER CHAPTER EPISODES</h2>
                            <p>Join Refik Anadol on his journey to create bespoke, human-centric artworks that blur the line between </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default InspiringSeries