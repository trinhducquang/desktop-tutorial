import React from 'react'
import './Page2.scss'
import video1page2 from '/public/muse/page2/video1page2.mp4'
import video2page2 from '/public/muse/page2/video2page2.mp4'
import useVideoControl from '../../../../Hooks/useVideoControl.js';
import img1 from '/public/muse/page2/img1.png'
import img2 from '/public/muse/page2/img2.png'
import img3 from '/public/muse/page2/img3.png'
import img4 from '/public/muse/img4.webp';
import img5 from '/public/muse/img5.webp';
import img6 from '/public/muse/img6.webp';
import { GrLinkNext } from 'react-icons/gr';
import { Link } from 'react-router-dom';





const Page2 = () => {

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
        <div className='Page2-container'>
            <section>
                <div className='Menu1-container page-2-overlay'>
                    <video src={video1page2} autoPlay loop muted />
                    <div className='text-overlay text-overplay-2'>
                        <h1>SPIRIT OF ECSTASY CHALLENGE</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className='Menu1-background-container '>
                    <div className='text-overlay'>
                        <h2>The Exhibition</h2>
                        <p>Explore the unveiling of the inaugural Spirit of Ecstasy Challenge
                            exhibition, showcasing three winning artists who created unique objects
                            inspired by the Spirit of Ecstasy, the sculptural figurine that adorns the
                            bonnet of every Rolls-Royce motor car. </p>
                    </div>
                    <div className='Menu1-video Menu-best-video'>
                        <video
                            src={video2page2}
                            ref={setVideoRef('video2page2')}
                            onMouseEnter={() => handleMouseEnter('video2page2')}
                            onMouseLeave={() => handleMouseLeave('video2page2')}
                            onClick={() => handleVideoClick('video2page2')}
                            muted
                        />
                        <div className='video-controls'>
                            <button className='control-btn' onClick={() => handleVideoClick('video2page2')}>
                                {isPlaying ? 'Pause' : 'Play'}
                            </button>
                            <button className='control-btn' onClick={() => handleFullscreenClick('video2page2')}>
                                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                            </button>
                        </div>
                    </div>
                    <div className='text-overlay text-overplay-kk '>
                        <p>The three winning artists, Scarlett Yang, Ghizlane Sahli, and Bi Rongrong, were selected by an
                            esteemed jury of design experts including Anders Warming, Director of Design, Rolls-Royce Motor Cars;
                            Yoon Ahn, Creative Director of AMBUSH and Director of Jewellery at Dior Men; Tim Marlow, Chief Executive
                            and Director at the Design Museum, London; and Sumayya Vally, Founder and Principal at Counterspace Studio,
                            Johannesburg.
                        </p>
                        <br />
                        <br />
                        <p>Each edition of the Challenge will focus on a different medium, and this year’s
                            edition challenged participants to push the creative boundaries of textiles.
                        </p>
                    </div>
                </div>
            </section>
            <section className='Page-2-item page-2-fix'>
                <div className='Menu1-container Careers-container-section2'>
                    <div className='text-overlay color-overlay'>
                        <h1>Bi Rongrong</h1>
                        <p>Bi Rongrong’s multidisciplinary practice is a visual record of the artist’s experiences of urban spaces,
                            as she collects imagery from each of the cities she visits. Busy, colourful, and richly textured, her vibrant
                            canvases, collages and installations reflect the dynamism of urban life. Her artwork for the Spirit of Ecstasy
                            Challenge, Stitched Urban Skin, deciphers the city and all of its forms through layers of metal, perspex, LED lighting,
                            and crochet textile. The piece draws together imagery from Bi’s encyclopaedic collection of urban imagery, and much like
                            the Spirit of Ecstasy figurine, utilises both ancient craftsmanship and innovative technologies – weaving together not
                            only locations but also histories.
                        </p>
                    </div>
                </div>
            </section>
            <section className='page2-section-2-container'>
                <div>
                    <img src={img2} />
                </div>
                <div className='Menu1-container whisper-container-v2'>
                    <div className='text-overlay text-overplay-v1 text-overplay-v2'>
                        <p>For Rolls-Royce owners, Whispers unlocks new horizons,
                            and grants access to the most memorable experiences.
                            Discover a world where unique opportunities to connect
                            meet unparalleled possibilities.
                        </p>
                    </div>
                </div>
            </section>
            <section className='Page-2-item page-3-fix'>
                <div className='Menu1-container Careers-container-section2'>
                    <div className='text-overlay color-overlay'>
                        <h1>Ghizlane Sahli</h1>
                        <p>Ghizlane Sahli has spent the past decade exploring the poetics of materials
                            through her striking abstract art, which draws together both fine textiles
                            and unexpected found elements. Working closely with artisans in Marrakech’s
                            Medina, Sahli demonstrates how ancestral techniques can be used to engage in
                            contemporary dialogues, while showcasing the rich tradition of textiles of her
                            country. Nissa’s Rina is a joyous celebration of femininity and freedom, resembling
                            the two triumphant wings of the Rolls-Royce’s Spirit of Ecstasy in flight. The sculpture
                            is composed almost entirely of recycled materials, wrapped tightly and crocheted with
                            locally-sourced gold leaf, as well as gold and white thread.
                        </p>
                    </div>
                </div>
            </section>
            <section className='page2-section-2-container'>
                <div>
                    <img src={img1} />
                </div>
                <div className='Menu1-container whisper-container-v2'>
                    <div className='text-overlay text-overplay-v1 text-overplay-v2' >
                        <p style={{ marginTop: '0px !impotarnt' }}>For Rolls-Royce owners, Whispers unlocks new horizons,
                            and grants access to the most memorable experiences.
                            Discover a world where unique opportunities to connect
                            meet unparalleled possibilities.
                        </p>
                    </div>
                </div>
            </section>
            <section className='Page-2-item page-3-fix'>
                <div className='Menu1-container Careers-container-section2'>
                    <div className='text-overlay color-overlay'>
                        <h1>SCARLETT YANG</h1>
                        <p>Scarlett Yang creates futuristic fabrics from biomaterials, before using digital technologies
                            to reimagine them as garments and sculptural pieces. Her artwork for the Spirit of Ecstasy
                            Challenge, Transient Materiality, is an ethereal metre-high sculpture made from algae,
                            collected from the Dorset coast, dried, and transformed into a synthetic biopolymer. Transient
                            Materiality is directly inspired by the soaring Spirit of Ecstasy figurine and Rolls-Royce’s
                            advanced approach to fabrics and processes.
                        </p>
                    </div>
                </div>
            </section>
            <section className='page2-section-2-container'>
                <div>
                    <img src={img3} />
                </div>
                <div className='Menu1-container whisper-container-v2 fix-top-abc'>
                    <div className='text-overlay text-overplay-v1 text-overplay-v2' >
                        <p >Installation View, Spirit of Ecstasy Challenge Exhibition,
                            Cromwell Place, London, 5 - 8 October 2022.
                            Image courtesy Muse, the Rolls-Royce Arts Programme. Photo © Luke Walker,
                            Ghizlane Sahli, Nissa’s Rina, courtesy Adnane Zemmama.
                        </p>
                    </div>
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
                        <div className='Page1-button'>
                            <button>STAY CONNECTED
                                <GrLinkNext className="arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='color-seticon-last '>
                <div className='Navbar-item '>
                    <div>
                        <h3>CONTINUE YOUR JOURNEY</h3>
                    </div>
                    <div className='content-container'>
                        <div className='Navbar-content'>
                            <div>
                                <img src={img4} alt="Discover Bespoke" />
                                <h4>DISCOVER BESPOKE</h4>
                                <p>Choose from our exclusive collections or collaborate with our craftspeople and designers to create a Rolls-Royce wholly unique to you. This is Rolls-Royce Bespoke.</p>
                            </div>
                        </div>
                        <div className='Navbar-content'>
                            <div>
                                <img src={img5} alt="Explore Models" />
                                <h4>EXPLORE MODELS</h4>
                                <p>Explore our stunning collection of new Rolls-Royce models. Whether you’re looking for the ultimate luxury saloon, a sporty coupe or a refined convertible, we have something for you.</p>
                            </div>
                        </div>
                        <div className='Navbar-content'>
                            <div>
                                <img src={img6} alt="Find Your Dealer" />
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

export default Page2