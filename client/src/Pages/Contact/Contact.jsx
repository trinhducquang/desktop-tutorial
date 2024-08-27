import { useState } from 'react';
import './Contact.scss';
import contact from '/contact/contact.webp';
import img5 from '/contact/img5.webp';
import { GrLinkNext } from 'react-icons/gr';
import cong from '/public/contact/cong.svg';
import Button from '../../components/Button/Button';

const Contact = () => {
    const [isAssistanceVisible, setAssistanceVisible] = useState(false);

    const toggleAssistance = () => {
        setAssistanceVisible(!isAssistanceVisible);
    };

    return (
        <div className='overflow'>
            <section>
                <div className='Navbar-img'>
                    <img src={contact} alt="Rimowa Contact" />
                    <div className='img-content'>
                        <h2>CONTACT US</h2>
                    </div>
                </div>
            </section>
            <section>
                <div className='Contact-container'>
                    <div>
                        <h2>ASK US A QUESTION</h2>
                        <div style={{ marginTop: '70px' }}>
                            <Button label='Contact Us' style={{ backgroundColor: '#6D30A7' }} borderColor='none' color='White' />
                        </div>
                    </div>
                    <div className='Contact-info Contact-info-1'>
                        <div className='info-wrapper'>
                            <div className='info-content'>
                                <p><strong>THE HOME OF RIMOWA</strong></p>
                                <p>Every Rimowa product is crafted with precision at our state-of-the-art facilities.</p>
                                <p><strong>Rimowa</strong></p>
                                <p>The Drive, Westhampnett, Chichester, West Sussex, PO18 0SH</p>
                                <p>For model, general queries, and Rimowa Gift Collection purchases, we have dedicated teams ready to assist you, wherever you are.</p>

                                <p><strong>International</strong></p>
                                <p>+ 44 (0)1243 525700 or email enquiries@rimowa.com</p>
                                <p>Monday to Friday 06:30-19:00 (GMT)</p>
                                <p>Saturday to Sunday 09:00-18:00 (GMT)</p>

                                <p><strong>Japan</strong></p>
                                <p>+ 81 (0)120 980242 or email enquiries.jp@rimowa.com</p>
                                <p>Monday to Friday 06:30-19:00 (JST)</p>
                                <p>Saturday to Sunday 09:00-18:00 (JST)</p>

                                <p><strong>North America</strong></p>
                                <p>+1 877-877-3735 or email generalenquiries@rimowa.com</p>
                                <p>Monday to Friday 06:30-19:00 (EST)</p>
                                <p>Saturday to Sunday 09:00-18:00 (EST)</p>

                                <p><strong>China</strong></p>
                                <p>+86 400 818 7979</p>
                                <p>Monday to Sunday – Open at all times</p>
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className='Contact-info'>
                        <div className='info-wrapper'>
                            <div className='info-content'>
                                <p><strong>SUPPORT FOR OUR CUSTOMERS</strong></p>
                                <p>Our Customer Relations teams are ready to assist you, wherever you are.</p>

                                <p><strong>International</strong></p>
                                <p>+44 (0) 1243 384300</p>
                                <p>customer.relations@rimowa.com</p>

                                <p><strong>North America</strong></p>
                                <p>+1 877 877 3735</p>
                                <p>customer.relations@rimowa.com</p>

                                <p><strong>China</strong></p>
                                <p>+86 400 818 7979</p>
                                <p>customer.relationschina@rimowa.com</p>
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className='Contact-info'>
                        <div className='info-wrapper'>
                            <div className='info-content'>
                                <p><strong>Ensuring Your Journey is Smooth</strong></p>
                                <p>For four years after you take ownership of your new Rimowa product, you’re covered by a comprehensive Roadside Assistance recovery package. Should something unexpected happen, simply call us and a dedicated advisor will be at your service.</p>
                            </div>
                            <br />
                            <br />
                            <p className='assistance-toggle' onClick={toggleAssistance}>
                                {isAssistanceVisible ? 'Hide Roadside Assistance' : 'Show Roadside Assistance'}
                                <img src={cong} alt="Toggle Icon" />
                            </p>
                            {isAssistanceVisible && (
                                <ul className='assistance-list'>
                                    <li>Australia: +61 1 800 420 035</li>
                                    <li>Austria: +49 895 880 995 55</li>
                                    <li>Bahrain: +97 339 760 100</li>
                                    <li>Belgium: +32 3 890 5676</li>
                                    <li>Brazil: 0800-707-7910 / +55 11 5186-0809</li>
                                    <li>Bulgaria: +35928060765</li>
                                    <li>Cambodia: +85 595 999 499</li>
                                    <li>Canada: +1 877 671 3039</li>
                                    <li>Chile: +56 984 190 00</li>
                                    <li>China: +86 400 676 5888</li>
                                    <li>Czech Republic: 283 002761 / +42 202 830 02761</li>
                                    <li>Denmark: +45 803 040 45</li>
                                    <li>Estonia: +372 633 7070</li>
                                    <li>Finland: +358 205 308 011</li>
                                    <li>France: +33 805 540 405</li>
                                    <li>Germany: +49 800 700 707 0</li>
                                    <li>Greece: +30 210 700 80 00</li>
                                    <li>Hong Kong: +852 3543 3023</li>
                                    <li>Hungary: +36 183 307 80</li>
                                    <li>Iceland: +354 800 0400</li>
                                    <li>India: +91 22 660 11 830</li>
                                    <li>Indonesia: +62 21 522 92 777</li>
                                    <li>Ireland: +353 1800 816 818</li>
                                    <li>Israel: +972 3 920 2202</li>
                                    <li>Italy: +39 800 767 447</li>
                                    <li>Japan: +81 3 3864 5489</li>
                                    <li>Jordan: +962 6 400 4888</li>
                                    <li>Kuwait: +965 188 1717</li>
                                    <li>Latvia: +371 6 707 144</li>
                                    <li>Lebanon: +961 1 991 646</li>
                                    <li>Liechtenstein: +41 800 122 144</li>
                                    <li>Lithuania: +370 5 264 1550</li>
                                    <li>Luxembourg: +352 262 993 66</li>
                                    <li>Malaysia: +60 3 7728 2121</li>
                                    <li>Malta: +356 235 88 200</li>
                                    <li>Mexico: +52 55 5281 6181</li>
                                    <li>Morocco: +212 5376 09012</li>
                                    <li>Netherlands: +31 206 048 543</li>
                                    <li>New Zealand: +64 9 303 0480</li>
                                    <li>Nigeria: +234 705 500 0083</li>
                                    <li>Norway: +47 21 54 16 56</li>
                                    <li>Oman: +968 2479 0077</li>
                                    <li>Pakistan: +92 300 929 5421</li>
                                    <li>Peru: +51 989 964 174</li>
                                    <li>Poland: +48 22 545 63 66</li>
                                    <li>Portugal: +351 211 547 927</li>
                                    <li>Qatar: +974 4033 4478</li>
                                    <li>Romania: +40 31 432 5000</li>
                                    <li>Russia: +7 495 287 82 07</li>
                                    <li>Saudi Arabia: +966 800 850 0416</li>
                                    <li>Singapore: +65 6436 5353</li>
                                    <li>South Africa: +27 21 555 9044</li>
                                    <li>South Korea: +82 2 3456 7890</li>
                                    <li>Spain: +34 901 200 240</li>
                                    <li>Sweden: +46 20 411 22 11</li>
                                    <li>Switzerland: +41 844 844 909</li>
                                    <li>Taiwan: +886 2 8101 8822</li>
                                    <li>Thailand: +66 2266 2200</li>
                                    <li>Turkey: +90 216 666 8686</li>
                                    <li>Ukraine: +380 44 496 67 88</li>
                                    <li>United Arab Emirates: +971 800 734 688</li>
                                    <li>United Kingdom: +44 800 500 099</li>
                                    <li>United States: +1 877 877 3735</li>
                                    <li>Vietnam: +84 28 3911 8888</li>
                                </ul>
                            )}
                            <br />
                            <br />
                        </div>
                        <br />
                        <br />
                    </div>
                    <br />
                    <div className='fix-top'>
                        <h3>Press Room</h3>
                        <p>The Rimowa Press Room provides access to the latest official headlines, stories, press kits, product, and brand imagery. Just register for access.</p>
                        <div style={{ marginTop: '70px' }}>
                            <Button label='visit pressclub' style={{ backgroundColor: '#6D30A7' }} borderColor='none' color='White' />
                        </div>
                    </div>
                    <br />
                </div>
            </section>
            <section>
                <div className='Navbar-img'>
                    <img src={img5} alt="Rimowa Image" />
                </div>
            </section>
        </div>
    );
};

export default Contact;
