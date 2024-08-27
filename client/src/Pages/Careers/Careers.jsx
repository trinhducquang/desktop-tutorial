import img1 from '/Careers/img1.jpg'
import img2 from '/Careers/img2.jpg'
import img3 from '/Careers/img3.jpg'
import img4 from '/Careers/img4.jpg'
import img22 from '/Careers/img22.jpg'
import img23 from '/Careers/img23.jpg'
import img24 from '/Careers/img24.jpg'
import img25 from '/Careers/img25.jpg'
import img26 from '/Careers/img26.jpg'
import rose from '/Careers/rose.mp4'
import design from '/public/Careers/Design.mp4'
import RIMOWATravel from '/public/Careers/RIMOWATravel.mp4'
import useVideoControl from '../../Hooks/useVideoControl'
import Carousel from '../../components/Carousel/Carousel'
import { CareersMedia } from '../../components/Carousel/imageGroups'
import { CareersVideo } from '../../components/Carousel/imageGroups'
import './Careers.scss'
import Button from '../../components/Button/Button'


const Careers = () => {

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
        <div className='Careers-container overflow'>
            <section>
                <div>
                    <div className='Navbar-img'>
                        <img src={img1} alt="Culinan" />
                        <div className={`img-content`}>
                            <h2>MAKE YOUR MARK</h2>
                            <h1>CAREERS AT ROLLS-ROYCE MOTOR CARS</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section'>
                    <div className='text-overlay color-overlay'>
                        <h1>WHO WE ARE LOOKING FOR</h1>
                        <p>Experience the world of Rimowa. From the initial design phase and
                            meticulous production to the final delivery and customer service, bringing our
                            renowned travel solutions to life requires a dedicated team of hardworking, responsible,
                            and innovative individuals — each of whom plays a crucial role in shaping the future of Rimowa.
                            Whether you are starting your career with one of our graduate programs, internships, or apprenticeships,
                            or if you are an experienced professional seeking an exciting new challenge, we provide a diverse array
                            of career opportunities for those who are ready to make a significant impact. At Rimowa, we believe
                            in nurturing talent and offering pathways for growth and development, ensuring that every team
                            member has the chance to contribute to our ongoing success and innovation in the world
                            of luxury travel.</p>
                        <div className='Careers-buttons'>
                            <Button label='APPLICATION ADVICE' style={{ backgroundColor: '#676776', border: 'none', color: 'white' }} />
                            <Button label='SEARCH & APPLY' style={{ backgroundColor: 'white' }} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <img src={img2} />
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section2'>
                    <div className='text-overlay color-overlay'>
                        <h1>THE RIGHT PATH FOR YOU</h1>
                        <p>
                            As a leading name in luxury travel solutions, Rimowa is seeking the expertise of talented individuals across a range of disciplines, including engineering, bespoke design, finance, sales and marketing, IT, human resources, and communications. Whether you are looking to elevate your career to new heights or embark on an entirely new path, Rimowa is committed to supporting your professional growth. We invest in your development through various educational programs and reward your dedication to helping us redefine the travel experience. Discover more about our benefits and workplace culture.</p>
                        <p>Our team members share common qualities: they are innovative, passionate, and detail-oriented. They demonstrate excellent communication and collaboration skills, and approach challenges with effective problem-solving and critical thinking.</p>
                        <p>At Rimowa, we believe that innovation thrives on fresh perspectives and new ideas. That’s why we are dedicated to fostering enthusiastic individuals through our entry-level programs and development schemes, ensuring that our legacy of excellence continues to evolve with new talent.</p>
                        <div className='Careers-buttons'>
                            <Button label='SEARCH & APPLY' style={{ backgroundColor: 'white' }} />
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div className='Menu1-video Careers-video'>
                    <video
                        src={design}
                        ref={setVideoRef('design')}
                        autoPlay
                        onMouseEnter={() => handleMouseEnter('design')}
                        onMouseLeave={() => handleMouseLeave('design')}
                        muted
                    />
                    <div className='video-controls'>
                        <button className='control-btn' onClick={() => handleVideoClick('design')}>
                            {isPlaying ? 'Pause' : 'Play'}
                        </button>
                        <button className='control-btn' onClick={() => handleFullscreenClick('design')}>
                            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section2'>
                    <div className='text-overlay color-overlay'>
                        <h1>GRADUATE PROGRAMME</h1>
                        <p>We are seeking graduates from a variety of backgrounds and disciplines to bring new perspectives to Rimowa, while building a strong foundation for a rewarding and successful career. Our two-year programmes are available in areas such as Engineering, Design, Sales and Marketing, Finance, IT, Human Resources, and Communications.</p>
                        <p>Our team members share essential qualities; they are innovative, passionate, and detail-oriented. They demonstrate excellent communication and teamwork abilities, and approach challenges with effective problem-solving and critical thinking skills.</p>
                        <p>Innovation at Rimowa thrives on fresh ideas and enthusiasm. That’s why we are dedicated to supporting and developing motivated individuals through our entry-level programmes and development schemes, ensuring that our tradition of excellence continues to grow with new talent.</p>
                        <div className='Careers-buttons'>
                            <Button label='GRADUATES: APPLY NOW' style={{ backgroundColor: '#676776', border: 'none', color: 'white' }} />
                            <Button label='Sign Up For Email Updates' style={{ backgroundColor: 'white' }} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-careers'>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <h2>DEFINE YOUR FUTURE</h2>
                    <p>As a graduate at Rimowa, you’ll be immersed in our welcoming and inclusive culture, taking on proactive responsibilities from day one. You’ll have the opportunity to shape your career according to your interests, strengths, and learning goals. We strive to inspire excellence in everything we do, giving you the freedom to challenge conventions and test your ideas — growing both personally and professionally with each step you take.</p>
                    <p>
                        In addition to personalized training and workshops, you will benefit from the guidance of experienced mentors through our graduate mentoring programme. Their expertise will support you in networking, developing your skills, and navigating your chosen career path. Our networking groups and supportive management are also dedicated to nurturing your career, ensuring you are well-prepared to excel at Rimowa.</p>
                    <p>If you’re interested in discovering more about our graduate programmes, please sign up to receive regular email updates.</p>
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section2'>
                    <div className='text-overlay color-overlay careers-overlay-8'>
                        <p>“The graduate programme at Rimowa provided me with diverse experiences across various departments and even included an international placement in our headquarters in Cologne. After a year on the programme, during a review with my manager, we explored opportunities for permanent positions in my final months as a graduate.”</p>
                        <div>ALEX</div>
                        <div>Former Graduate, Product Development Specialist</div>
                    </div>
                </div>
            </section>
            <section className='section-careers section-careers-1'>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <h2>SHAPE YOUR CAREER WITH US</h2>
                    <p>As a graduate at Rimowa, you’ll be fully integrated into our welcoming and inclusive culture from day one. You will take on proactive responsibilities and have the opportunity to shape your career according to your interests, strengths, and learning goals. With our commitment to excellence in everything we do, you’ll have the freedom to challenge conventions and test your ideas — growing both personally and professionally with every step you take.</p>
                    <p>
                        In addition to personalized training and workshops, you will benefit from the guidance of experienced mentors through our graduate mentoring programme. Their expertise will assist you in networking, developing your personal and professional skills, and navigating your chosen career path. Our networking groups and supportive management are also dedicated to nurturing your career, ensuring you are well-prepared to excel at Rimowa.</p>
                    <p>If you’re interested in discovering more about our graduate programmes, please sign up to receive regular email updates.</p>
                    <div style={{paddingLeft: '0px'}}>
                        <Button label='Sign Up For Email Updates' style={{ backgroundColor: 'white' }} />
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className='Navbar-img Navbar2-img'>
                        <div className='img-content content-2'>
                            <h2>GRADUATE STORIES</h2>
                        </div>
                    </div>
                </div>
                <Carousel media={CareersMedia} />
            </section>
            <section>
                <div className='section-9'>
                    <h3>RIMOWA x Tiffany</h3>
                    <div className='Navbar-img'>
                        <img src={img22} alt="Culinan" />
                    </div>
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section2'>
                    <div className='text-overlay color-overlay'>
                        <h1>INTERNSHIPS</h1>
                        <p>Are you a second-year university student ready to gain real-world experience during your third-year placement? Our paid internships offer you the opportunity to immerse yourself in the working culture and processes at Rimowa from the ground up. You’ll receive hands-on training and mentorship from industry-leading professionals. Areas of experience may include Engineering, Design, Sales and Marketing, IT, Finance, and Communications.</p>
                        <p>Spanning 13 months, our internships are a fantastic way to expand your career prospects and take control of your personal development. From day one, you will engage in various projects, gaining invaluable insights into the company's operations while exploring the full extent of your potential.</p>
                        <p>As with all Rimowa employees, interns will enjoy a range of benefits — including a competitive salary and generous holiday allowance — and will receive ongoing support and networking opportunities. Learn more about the benefits and workplace culture that await you at Rimowa.</p>
                        <p>The application window opens on October 1st and closes on November 30th, or sooner if we reach a high volume of applications. To stay informed and receive updates on available internships at Rimowa, please sign up for regular email updates.</p>

                        <div className='Careers-buttons'>
                            <Button label='APPLICATION ADVICE' style={{ backgroundColor: '#676776', border: 'none', color: 'white' }} />
                            <Button label='SEARCH & APPLY' style={{ backgroundColor: 'white' }} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='Menu1-video Careers-video'>
                    <video
                        src={rose}
                        ref={setVideoRef('rose')}
                        onMouseEnter={() => handleMouseEnter('rose')}
                        onMouseLeave={() => handleMouseLeave('rose')}
                        muted
                    />
                    <div className='video-controls'>
                        <button className='control-btn' onClick={() => handleVideoClick('rose')}>
                            {isPlaying ? 'Pause' : 'Play'}
                        </button>
                        <button className='control-btn' onClick={() => handleFullscreenClick('rose')}>
                            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section2 '>
                    <div className='text-overlay color-overlay fixx-sss'>
                        <h1>APPRENTICESHIPS</h1>
                        <p>If you are about to leave school, eager to jump-start your career, and are passionate, creative, and innovative, an apprenticeship with Rimowa offers a rewarding and hands-on path to a lasting career. We are looking for enthusiastic individuals brimming with potential who are excited to forge their path and learn from some of the most talented professionals in the industry.</p>
                        <p>Our apprenticeships typically last between two and four years and are based at our headquarters. Combining on-the-job training with academic study, you will work towards a nationally recognized qualification or degree. Throughout your journey, our mentors, managers, and supportive community will provide all the guidance and insight you need to excel in your new role.</p>
                        <p>Whether you are interested in creative and craft-based roles or more technical and analytical positions, we offer a variety of exciting opportunities to match different skills and interests. As long as you are a team player, a great communicator, and enjoy problem-solving, you will thrive as a Rimowa apprentice.</p>
                        <p>The courses we offer can vary from year to year and may include areas such as Design, Engineering, and Modern Manufacturing, equipping you with essential skills in areas like materials, finishing techniques, and maintenance engineering. To explore all available apprenticeships, please visit our apprentice recruitment website.</p>
                        <p>As valued members of the Rimowa team, apprentices receive excellent benefits and numerous opportunities for growth. Many apprentices relocate to our headquarters, coming from various locations across the country, and quickly become part of our supportive and empowering community. Discover more about what to expect when you join Rimowa, a leader in luxury travel solutions.</p>
                        <p>Apprenticeships typically start around September 1st, with the application window opening in January for 6-8 weeks. If you’re interested in learning more, sign up for email updates to receive information about available opportunities and our top application tips.</p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className='Navbar-img Navbar2-img'>
                        <div className='img-content content-2'>
                            <h2>APPRENTICE STORIES</h2>
                        </div>
                    </div>
                </div>
                <Carousel media={CareersVideo} />
            </section>
            <section>
                <div className='section-9'>
                    <div className='Navbar-img'>
                        <img src={img23} alt="Culinan" />
                    </div>
                </div>
            </section>
            <section>
                <div className='Menu1-container menu1-container-2 Careers-container-section2'>
                    <div className='text-overlay color-overlay'>
                        <h1>A SUPPORTIVE COMMUNITY</h1>
                        <p>At Rimowa, we believe in fostering a supportive community that enhances every aspect of your professional journey. Our managers are dedicated to helping you shape and follow a meaningful career path, ensuring success in both your professional and personal endeavors. Whether it's through opportunities to work internationally or participate in tailored training programs, we encourage you to embrace a wide range of experiences. This approach not only expands your network but also helps you build genuine, lasting connections.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='Menu1-background-container Careers-container-section2'>
                    <div className='Menu1-video '>
                        <video src={RIMOWATravel}
                            ref={setVideoRef('RIMOWATravel')}
                            onMouseEnter={() => handleMouseEnter('RIMOWATravel')}
                            onMouseLeave={() => handleMouseLeave('RIMOWATravel')}
                            muted
                        />
                        <div className='video-controls'>
                            <button className='control-btn' onClick={() => handleVideoClick('RIMOWATravel')}>
                                {isPlaying ? 'Pause' : 'Play'}
                            </button>
                            <button className='control-btn' onClick={() => handleFullscreenClick('RIMOWATravel')}>
                                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='Menu1-container menu1-container-2'>
                    <div className='text-overlay color-overlay'>
                        <h1>EMBRACE A COLLABORATIVE ENVIRONMENT</h1>
                        <p>At Rimowa, we cultivate a collaborative environment that enhances every aspect of your career. Our leaders are dedicated to guiding you in defining and pursuing a meaningful career path, ensuring growth in both your professional and personal life. Whether it’s through international assignments or specialized training programs, we encourage you to take advantage of a variety of opportunities. This approach not only expands your professional network but also fosters the development of genuine, lasting relationships.</p>
                        <div className='Careers-buttons '>
                            <Button label='SEARCH & APPLY' style={{ backgroundColor: 'white' }} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-careers section-careers-1 section-careers-2'>
                <img src={img24} />
                <div>
                    <h2>SHAPE YOUR CAREER</h2>
                    <p>As a graduate, you’ll become immersed in our friendly and inclusive culture, take on proactive responsibility from the get-go,
                        and will be empowered to shape your career based on your interests, strengths, and learning. Since we aim to inspire greatness in everything we create,
                        you’ll have the freedom to challenge the norm and put your thinking to the test — growing as individuals every step of the way.</p>
                    <p>
                        Along with personalized training and workshops, you will receive the full support of senior mentors through our graduate mentoring programme.
                        Their knowledge and experience will help you network, develop your personal and professional skill set, and guide you down the path of your choosing.
                        Our networking groups and supportive management are also here to nurture your career, ensuring you’re fully equipped to excel at Rimowa.</p>
                    <p>If you’re interested in learning more about our graduate programmes, please sign up to receive regular email updates.</p>
                </div>
            </section>
            <section className='section-careers section-careers-1 section-careers-2 section-careers-3'>
                <img src={img25} />
                <div>
                    <h2>BUILD YOUR FUTURE</h2>
                    <p>As a graduate, you’ll become immersed in our friendly and inclusive culture, take on proactive responsibility from the get-go,
                        and will be empowered to shape your career based on your interests, strengths, and learning. Since we aim to inspire greatness in everything we create,
                        you’ll have the freedom to challenge the norm and put your thinking to the test — growing as individuals every step of the way.</p>
                    <p>
                        Along with personalized training and workshops, you will receive the full support of senior mentors through our graduate mentoring programme.
                        Their knowledge and experience will help you network, develop your personal and professional skill set, and guide you down the path of your choosing.
                        Our networking groups and supportive management are also here to nurture your career, ensuring you’re fully equipped to excel at Rimowa.</p>
                    <p>If you’re interested in learning more about our graduate programmes, please sign up to receive regular email updates.</p>
                </div>
            </section>
            <section className='section-careers section-careers-1 section-careers-2'>
                <img src={img26} />
                <div>
                    <h2>ACHIEVE YOUR GOALS</h2>
                    <p>As a graduate, you’ll become immersed in our friendly and inclusive culture, take on proactive responsibility from the get-go,
                        and will be empowered to shape your career based on your interests, strengths, and learning. Since we aim to inspire greatness in everything we create,
                        you’ll have the freedom to challenge the norm and put your thinking to the test — growing as individuals every step of the way.</p>
                    <p>
                        Along with personalized training and workshops, you will receive the full support of senior mentors through our graduate mentoring programme.
                        Their knowledge and experience will help you network, develop your personal and professional skill set, and guide you down the path of your choosing.
                        Our networking groups and supportive management are also here to nurture your career, ensuring you’re fully equipped to excel at Rimowa.</p>
                    <p>If you’re interested in learning more about our graduate programmes, please sign up to receive regular email updates.</p>
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section'>
                    <div className='text-overlay color-overlay'>
                        <h1>GET IN TOUCH</h1>
                        <p>Stay connected with the latest career opportunities at Rimowa by following us on LinkedIn.</p>
                        <p>We frequently offer a variety of temporary positions and contracts. For detailed information, please reach out to our recruitment partners, Staffline and Hays.</p>
                        <p>If you’re interested in learning more about our Future Talent programmes (internships, graduate or apprenticeship programmes), please subscribe to our regular email updates.</p>
                        <p>For any questions or assistance with your application, don’t hesitate to contact our Recruitment team.</p>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Careers