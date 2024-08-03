import React from 'react'
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
import { GrLinkNext } from 'react-icons/gr'


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
                        <p>Experience Rolls-Royce Motor Cars. From design and production to launch and ownership services, bringing our iconic products into the world requires
                            a dedicated team of hard-working, responsible, and creative individuals —
                            each of whom helps shape the chapters in Rolls-Royce Motor Cars’ story. Whether you are starting
                            your career through one of our graduate programmes, internships or apprenticeships, or are an experienced professional
                            looking for an exciting new path, we offer a wide range of career opportunities for people ready to make their mark.</p>
                        <div className='Careers-buttons'>
                            <button>
                                <span>APPLICATION ADVICE</span>
                                <GrLinkNext className="arrow" />
                            </button>
                            <button>
                                <span>SEARCH & APPLY</span>
                                <GrLinkNext className="arrow" />
                            </button>
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
                            As a world-class marque, we require the expertise of experienced engineers and bespoke designers, as well as professionals in Finance,
                            Sales and Marketing, IT, Human Resources, Communications, and more. If you’re ready to take your career to the next level, or kick-start
                            a new career path altogether, Rolls-Royce Motor Cars supports your ambitions, invests in your learning
                            through educational schemes, and rewards your commitment to helping us inspire greatness. Read more about our benefits and working culture.</p>
                        <p>Our employees are connected by common threads; they are innovative, passionate, and have a sharp eye for detail. They also exhibit excellent
                            communication and teamwork skills, and face challenges head-on with efficient problem-solving and critical thinking.</p>
                        <p>Our innovation, however, does not rely on experience alone. New ideas and new drive powers Rolls-Royce’s ingenuity, which
                            is why we’re committed to nurturing passionate individuals through our entry level programmes and schemes.</p>
                        <div className='Careers-buttons'>
                            <button>
                                <span>SEARCH & APPLY</span>
                                <GrLinkNext className="arrow" />
                            </button>
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
                        <p>We are looking for graduates from diverse backgrounds and disciplines to bring fresh thinking to
                            Rolls-Royce Motor Cars, all whilst laying the foundations for a rewarding and fulfilling career. Our two-year
                            programmes may take place in Engineering, Manufacturing, Sales and Marketing, Bespoke Design, Finance, IT, Human Resources, and Communications.</p>
                        <p>Our employees are connected by common threads; they are innovative, passionate, and have a sharp eye for detail. They also exhibit excellent
                            communication and teamwork skills, and face challenges head-on with efficient problem-solving and critical thinking.</p>
                        <p>Our innovation, however, does not rely on experience alone. New ideas and new drive powers Rolls-Royce’s ingenuity, which
                            is why we’re committed to nurturing passionate individuals through our entry level programmes and schemes.</p>
                        <div className='Careers-buttons'>
                            <button>
                                <span>GRADUATES: APPLY NOW</span>
                                <GrLinkNext className="arrow" />
                            </button>
                            <button>
                                <span>Sign Up For Email Updates</span>
                                <GrLinkNext className="arrow" />
                            </button>
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
                    <p>As a graduate, you’ll become immersed in our friendly and inclusive culture, take on proactive responsibility from the get-go,
                        and will be empowered to shape your career based on your interests, strengths, and learning. Since we aim to inspire greatness in everything we create,
                        you’ll have the freedom to challenge the norm and put your thinking to the test — growing as individuals every step of the way.</p>
                    <p>
                        Along with personalised training and workshops, you will receive the full support of senior mentors through our graduate mentoring programme.
                        Their knowledge and experience will help you network, develop your personal and professional skill set, and guide you down the path of your choosing.
                        Our networking groups and supportive management are also here to nurture your career, ensuring you’re fully equipped to excel at Rolls-Royce Motor Cars.</p>
                    <p> If you’re interested in learning more about our graduate programmes, please sign up to receive regular email updates.</p>
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section2'>
                    <div className='text-overlay color-overlay careers-overlay-8'>
                        <p>‘The graduate programme gave me a variety of experiences across different areas of the business and even
                            included a placement in Munich. After a year on the scheme, during a review with my manager, we discussed
                            opportunities for potential permanent positions in my final 6 months as a graduate.’</p>
                        <div>CARA</div>
                        <div>Former Graduate, Quality Specialist</div>
                    </div>
                </div>
            </section>
            <section className='section-careers section-careers-1'>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <h2>DEFINE YOUR FUTURE</h2>
                    <p>As a graduate, you’ll become immersed in our friendly and inclusive culture, take on proactive responsibility from the get-go,
                        and will be empowered to shape your career based on your interests, strengths, and learning. Since we aim to inspire greatness in everything we create,
                        you’ll have the freedom to challenge the norm and put your thinking to the test — growing as individuals every step of the way.</p>
                    <p>
                        Along with personalised training and workshops, you will receive the full support of senior mentors through our graduate mentoring programme.
                        Their knowledge and experience will help you network, develop your personal and professional skill set, and guide you down the path of your choosing.
                        Our networking groups and supportive management are also here to nurture your career, ensuring you’re fully equipped to excel at Rolls-Royce Motor Cars.</p>
                    <p> If you’re interested in learning more about our graduate programmes, please sign up to receive regular email updates.</p>
                    <div className='Careers-buttons Careers-buttons2'>
                        <button>
                            <span>Sign Up For Email Updates</span>
                            <GrLinkNext className="arrow" />
                        </button>
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
                <div className='Menu1-container Careers-container-section2 Careers-container-section3'>
                    <div className='text-overlay color-overlay'>
                        <h1>INTERNSHIPS</h1>
                        <p>Are you a second-year university student ready to take on real-world experience during your third-year placement? Our paid internships
                            immerse you in the working culture and processes at Goodwood from the ground up, as well as providing you with training and mentorship from
                            industry-leading professionals. The areas you can gain experience in may include Manufacturing, Sales and Marketing, Engineering, IT, Finance,
                            and Communications.</p>
                        <p>Lasting 13 months, our internships are a wonderful way to widen your career prospects and take charge of your personal development. From day one, you will
                            enjoy hands-on involvement in a number of projects, gaining invaluable insight into the workings of the company whilst pushing the boundaries of your potential.</p>
                        <p>OJust like all Rolls-Royce employees, interns will enjoy an array of benefits — including a competitive salary and 27 days’ holiday — and will receive ongoing support
                            and networking opportunities. Read more about the benefits and working culture awaiting you when you join us at Goodwood.</p>
                        <p>Are you a second-year university student ready to take on real-world experience during your third-year placement? Our paid internships
                            immerse you in the working culture and processes at Goodwood from the ground up, as well as providing you with training and mentorship from
                            industry-leading professionals. The areas you can gain experience in may include Manufacturing, Sales and Marketing, Engineering, IT, Finance,
                            and Communications.</p>
                        <p>The application window opens 1 October and closes 30 November or sooner if we receive a high level of applications. If you want to learn more, sign
                            up for regular email updates to receive information on the internships available at Rolls-Royce Motor Cars.</p>
                        <p>We accept applications around October and November. To learn more, sign up for regular email updates for exact dates
                            and to receive information on the internships available at Rolls-Royce Motor Cars.</p>
                        <div className='Careers-buttons'>
                            <button>
                                <span>GRADUATES: APPLY NOW</span>
                                <GrLinkNext className="arrow" />
                            </button>
                            <button>
                                <span>Sign Up For Email Updates</span>
                                <GrLinkNext className="arrow" />
                            </button>
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
                <div className='Menu1-container Careers-container-section2 Careers-container-section3'>
                    <div className='text-overlay color-overlay'>
                        <h1>APPRENTICESHIPS</h1>
                        <p>If you are about to leave school, want to get a head start on your career, and are passionate, creative, and innovative, training with us as
                            an apprentice is a rewarding and hands-on route into a lasting career at Rolls-Royce Motor Cars.
                            We are searching for enthusiastic individuals full of potential who are eager to pave their way and learn from the industry’s most talented.</p>
                        <p>Apprenticeships last between two and four years and are based at the Home of Rolls-Royce. Combining on-the-job training with studying, you will
                            work towards a nationally recognised qualification or degree. Our mentors, managers, and close-knit community will support your journey, offering
                            all the guidance and insight you need to thrive in your new role.
                        </p>
                        <p>If you are looking for something creative and craft-based, or are interested
                            in working with numbers and technology, we have a range of exciting opportunities
                            that align with different skills and interests. As long as you’re a team player, a great
                            listener and communicator, and enjoy problem-solving, you will quickly succeed as a Rolls-Royce
                            Motor Cars apprentice.
                        </p>
                        <p>Courses on offer change from year to year. Some may take place in Business, Engineering, and Modern Manufacturing, which will provide you
                            with essential skills in areas such as leather, wood and lacquering, paint,
                            and electro-mechanical maintenance engineering. To see all available apprenticeships, please visit the apprentice recruitment website.</p>
                        <p>As integral members of the Rolls-Royce team, apprentices receive outstanding benefits and enjoy endless opportunities for growth. Many apprentices
                            make the exciting move to Chichester, West Sussex, coming from as far as Scotland and North Yorkshire. Once here, they instantly become part of our
                            empowering community, feeling the support
                            of mentors and newfound friends at every stage of their development. Read more on what to expect when you join the world’s most iconic marque.</p>
                        <p>Apprenticeships start around 1st September. The application window opens typically in January for 6-8 weeks. If you’re interested in learning more,
                            sign up for email updates to receive information on the opportunities available, as well as our top application tips.</p>
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
                <div className='Menu1-container menu1-container-2'>
                    <div className='text-overlay color-overlay'>
                        <h1>A SUPPORTIVE COMMUNITY</h1>
                        <p>At Rolls-Royce Motor Cars, a supportive community enriches every aspect of your working life.
                            Our managers are committed to helping you define and navigate a meaningful career path, ensuring
                            success in both your professional and personal pursuits. From working abroad to engaging in tailored
                            training programmes, we actively encourage you to seize a diverse range of opportunities. This not only
                            broadens your network but also facilitates the development of genuine, lasting connections.
                            through educational schemes, and rewards your commitment to helping us inspire greatness. Read
                            more about our benefits and working culture.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className='Menu1-background-container'>
                    <div className='Menu1-video'>
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
                        <h1>A SUPPORTIVE COMMUNITY</h1>
                        <p>At Rolls-Royce Motor Cars, a supportive community enriches every aspect of your working life.
                            Our managers are committed to helping you define and navigate a meaningful career path, ensuring
                            success in both your professional and personal pursuits. From working abroad to engaging in tailored
                            training programmes, we actively encourage you to seize a diverse range of opportunities. This not only
                            broadens your network but also facilitates the development of genuine, lasting connections.
                            through educational schemes, and rewards your commitment to helping us inspire greatness. Read
                            more about our benefits and working culture.
                        </p>
                        <div className='Careers-buttons Careers-buttons2'>
                            <button>
                                <span>Sign Up For Email Updates</span>
                                <GrLinkNext className="arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-careers section-careers-1 section-careers-2'>
                <img src={img24} />
                <div>
                    <h2>DEFINE YOUR FUTURE</h2>
                    <p>As a graduate, you’ll become immersed in our friendly and inclusive culture, take on proactive responsibility from the get-go,
                        and will be empowered to shape your career based on your interests, strengths, and learning. Since we aim to inspire greatness in everything we create,
                        you’ll have the freedom to challenge the norm and put your thinking to the test — growing as individuals every step of the way.</p>
                    <p>
                        Along with personalised training and workshops, you will receive the full support of senior mentors through our graduate mentoring programme.
                        Their knowledge and experience will help you network, develop your personal and professional skill set, and guide you down the path of your choosing.
                        Our networking groups and supportive management are also here to nurture your career, ensuring you’re fully equipped to excel at Rolls-Royce Motor Cars.</p>
                    <p> If you’re interested in learning more about our graduate programmes, please sign up to receive regular email updates.</p>
                </div>
            </section>
            <section className='section-careers section-careers-1 section-careers-2 section-careers-3'>
                <img src={img25} />
                <div>
                    <h2>DEFINE YOUR FUTURE</h2>
                    <p>As a graduate, you’ll become immersed in our friendly and inclusive culture, take on proactive responsibility from the get-go,
                        and will be empowered to shape your career based on your interests, strengths, and learning. Since we aim to inspire greatness in everything we create,
                        you’ll have the freedom to challenge the norm and put your thinking to the test — growing as individuals every step of the way.</p>
                    <p>
                        Along with personalised training and workshops, you will receive the full support of senior mentors through our graduate mentoring programme.
                        Their knowledge and experience will help you network, develop your personal and professional skill set, and guide you down the path of your choosing.
                        Our networking groups and supportive management are also here to nurture your career, ensuring you’re fully equipped to excel at Rolls-Royce Motor Cars.</p>
                    <p> If you’re interested in learning more about our graduate programmes, please sign up to receive regular email updates.</p>
                </div>
            </section>
            <section className='section-careers section-careers-1 section-careers-2'>
                <img src={img26} />
                <div>
                    <h2>DEFINE YOUR FUTURE</h2>
                    <p>As a graduate, you’ll become immersed in our friendly and inclusive culture, take on proactive responsibility from the get-go,
                        and will be empowered to shape your career based on your interests, strengths, and learning. Since we aim to inspire greatness in everything we create,
                        you’ll have the freedom to challenge the norm and put your thinking to the test — growing as individuals every step of the way.</p>
                    <p>
                        Along with personalised training and workshops, you will receive the full support of senior mentors through our graduate mentoring programme.
                        Their knowledge and experience will help you network, develop your personal and professional skill set, and guide you down the path of your choosing.
                        Our networking groups and supportive management are also here to nurture your career, ensuring you’re fully equipped to excel at Rolls-Royce Motor Cars.</p>
                    <p> If you’re interested in learning more about our graduate programmes, please sign up to receive regular email updates.</p>
                </div>
            </section>
            <section>
                <div className='Menu1-container Careers-container-section'>
                    <div className='text-overlay color-overlay'>
                        <h1>Contact</h1>
                        <p>You can also stay up to date with all new career opportunities at Rolls-Royce Motor Cars on LinkedIn.</p>
                        <p>We often have a wide range of temporary vacancies and contracts available. For more information, please contact our recruitment partners,
                            Staffline and Hays.</p>
                        <p>If you’d like to receive further information on our Future Talent programmes
                            (internships, graduate or apprentice programmes),
                            please sign up to our regular email updates.</p>
                        <p>If you have any questions or need help with your application, please contact our Recruitment team.</p>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Careers