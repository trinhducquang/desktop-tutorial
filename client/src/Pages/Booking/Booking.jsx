import React, { useState } from 'react';
import './Booking.scss';
import vali1 from '/public/Booking/vali1.avif';
import validata from '/public/Booking/validata.avif';
import validata2 from '/public/Booking/validata2.avif';
import validata3 from '/public/Booking/validata3.avif';
import validata7 from '/public/Booking/validata7.avif';
import validata8 from '/public/Booking/validata8.avif';
import validata9 from '/public/Booking/validata9.avif';
import validata10 from '/public/Booking/validata10.avif';
import validata11 from '/public/Booking/validata11.avif';
import vali from '/public/Booking/vali.mp4';
import colorimg1 from '/public/Booking/colorimg1.avif';
import colorimg2 from '/public/Booking/colorimg2.avif';
import FooterTop from '../../components/Footer-top/FooterTop';
import handbag from '/public/Booking/handbag.png';
import ship from '/public/Booking/ship.png';
import useRating from '../../Hooks/useRating';
import down from '/public/Booking/down.png';
import down2 from '/public/Booking/arrow2.png';
import Close from '/public/Booking/close.png';
import cong from '/public/Booking/cong.png';


const Booking = () => {
    const [showMore, setShowMore] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [show3D, setShow3D] = useState(false);
    const [expandedItem, setExpandedItem] = useState(null); // Track the expanded item
    const { rating, handleRating } = useRating();

    const handleItemClick = (item) => {
        setExpandedItem(expandedItem === item ? null : item);
    };

    return (
        <div>
            <div className='Booking-container'>
                <div className='Booking-container-item'>
                    <div className='Booking-item-1'>
                        <div>
                            <img src={vali1} />
                            <button onClick={() => setShow3D(true)}>Try in 3D</button>
                        </div>
                        <div>
                            <video src={vali} autoPlay muted loop />
                        </div>
                        <div className='abc'>
                            <img src={validata} />
                            <img src={validata2} />
                        </div>
                        <div>
                            <img src={validata3} />
                        </div>
                        <div className={showMore ? 'visible' : 'hidden'}>
                            <img src={validata7} />
                            <img src={validata8} />
                        </div>
                        <button className='show-button' onClick={() => setShowMore(!showMore)}>
                            {showMore ? 'Show Less' : 'See more images (2)'}
                        </button>
                    </div>
                    <div className='Booking-item-2'>
                        <div className='item-list-1'>
                            <p>Original</p>
                            <h1>Trunk XL</h1>
                            <span>$2,450.00</span>
                            <p>
                                Crafted from high-end anodized aluminum,
                                RIMOWA Original is an iconic luggage design,
                                instantly recognizable with its sleek lines
                                and signature grooves.
                                {isExpanded && (
                                    <>
                                        <p>
                                            Within a vast range of sizes,
                                            find your trusted and durable
                                            companion for your business and
                                            leisure travels.
                                        </p>
                                        <p>Ideal for 2 weeks or more of travel, the RIMOWA Original Trunk Plus in black features several ingenious functionalities:</p>
                                        <ul className='feature-list'>
                                            <li>Stage-free telescopic handle</li>
                                            <li>RIMOWA Multiwheel® System</li>
                                            <li>TSA-approved locks</li>
                                            <li>Flex Divider</li>
                                        </ul>
                                        <p>Includes a complimentary leather luggage tag and a sticker.
                                            Designed in Germany. Produced in our RIMOWA factories.</p>
                                    </>
                                )}
                            </p>
                            <button className='read-more-button' onClick={() => setIsExpanded(!isExpanded)}>
                                {isExpanded ? 'Read Less' : 'Read More'}
                                <img src={down} />
                            </button>
                            <p><a href="#">Size guide</a></p>
                        </div>
                        <div className='item-list-2'>
                            <button>
                                <span>Trunk XL</span>
                                <span>31.5 x 17.2 x 17 inch</span>
                                <img src={down2} />
                            </button>
                        </div>
                        <div className='item-list-3'>
                            <span>Color:</span>
                            <p>Black</p>
                        </div>
                        <div className='item-list-4'>
                            <button><img src={colorimg1} /></button>
                            <button><img src={colorimg2} /></button>
                        </div>
                        <div className='hr'></div>
                        <div className='item-list-5'>
                            <button>ADD TO CART</button>
                            <div>
                                <span>Rate:</span>
                                <div className='rating'>
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <span
                                            key={star}
                                            className={`star ${rating >= star ? 'filled' : ''}`}
                                            onClick={() => handleRating(star)}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='item-list-6'>
                            <div>
                                <img src={ship} />
                                <div>
                                    <strong>Expected Delivery (United States)</strong>
                                    <p>Express : Aug 06 - Aug 08</p>
                                    <p>Standard : Aug 08 - Aug 13</p>
                                </div>
                            </div>
                            <div>
                                <img src={handbag} />
                                <div>
                                    <strong>Pick up in store</strong>
                                    <p>Available to pick up <br /> in store</p>
                                    <p><a href="#">Pick up in store</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='item-list-7'>
                            <span>Key elements</span>
                            <div className='item-list-7-item'>
                                <div>
                                    <img src={validata8} />
                                    <span>TSA-Approved Locks</span>
                                    <p>Each of our suitcases features TSA-approved
                                        locks that can be opened by security during
                                        airline baggage checks without causing any damage.</p>
                                </div>
                                <div>
                                    <img src={validata9} />
                                    <span>Flex Divider</span>
                                    <p>Packed items are kept in perfect
                                        order during transit with the height
                                        adjustable Flex Divider, which can be
                                        adapted to suit your belongings.
                                    </p>
                                </div>
                                <div>
                                    <img src={validata10} />
                                    <span>RIMOWA Multiwheel® System</span>
                                    <p>Pioneered by RIMOWA, this high-end
                                        system guarantees stable and effortless
                                        steering thanks to ball-bearing mounted
                                        wheels with cushioned axels.
                                    </p>
                                </div>
                                <div>
                                    <img src={validata11} />
                                    <span>Telescopic Handle</span>
                                    <p>Engineered to offer seamless
                                        stage-free adjustment for maximum
                                        comfort and smooth maneuverability.
                                    </p>
                                </div>
                            </div>
                            <ul className='ul-booking-list'>
                                <li onClick={() => handleItemClick('size')} className='li-size-list'>
                                    <div>
                                        <img src={cong} />
                                        <p>Size and Weight </p>
                                    </div>
                                    <div className='fix-booking-1'>
                                        {expandedItem === 'size' && <p>Additional details about size and weight.</p>}
                                    </div>
                                </li>
                                <li onClick={() => handleItemClick('materials')} className='li-size-list'>
                                    <div>
                                        <img src={cong} />
                                        <p>Materials</p>
                                    </div>
                                    <div className='size-best fix-booking-1'>
                                        {expandedItem === 'materials' && <>
                                            <p>Outside: Aluminum</p>
                                            <p>Inside: Polyester</p>
                                            <p>Handles: Plastic</p>
                                            <p>Wheels: Hard plastic</p>
                                            <p>Dividers: Polyester</p>
                                        </>}
                                    </div>
                                </li>
                               <li onClick={() => handleItemClick('shipping')} className='li-size-list'>
                                    <div>
                                        <img src={cong} />
                                        <p>Shipping and Returns</p>
                                    </div>
                                    <div>
                                        {expandedItem === 'shipping' &&
                                            <div  className='fix-menu-1 fix-booking-1'>
                                                <div>
                                                    <p>Express shipping</p>
                                                    <p>$35</p>
                                                </div>
                                                <div>
                                                    <p>Standard shipping for orders that are $300 and over</p>
                                                    <p>Free of charge</p>
                                                </div>
                                                <div>
                                                    <p>Standard shipping for orders under $300</p>
                                                    <p>$5</p>
                                                </div>

                                                <div>
                                                    <p>From the date of delivery, you have 30 days to return your item(s). Products should be returned unused,
                                                        undamaged, and packaged in their original boxes.</p>
                                                </div>

                                            </div>
                                        }

                                    </div>
                                </li>
                                <li onClick={() => handleItemClick('warranty')} className='li-size-list'>
                                    <div>
                                        <img src={cong} />
                                        <p>Lifetime Guarantee</p>
                                    </div>
                                    <div className='fix-booking-1'>
                                        {expandedItem === 'warranty' &&
                                            <p>
                                                This product comes with RIMOWA's
                                                lifetime guarantee. For easy enjoyment
                                                of the lifetime guarantee, please register
                                                your RIMOWA suitcase here.
                                            </p>}
                                    </div>
                                </li>
                                <li onClick={() => handleItemClick('contact')} className='li-size-list'>
                                    <div>
                                        <img src={cong} />
                                        <p>Contact Us</p>
                                    </div>
                                    <div className='fix-booking-1'>
                                        {expandedItem === 'contact' &&
                                            <>
                                                <p>Call us at:
                                                    <br />
                                                    312-635-6607
                                                    <br />
                                                    <br />
                                                    Contact us by email
                                                </p>
                                            </>
                                        }
                                    </div>
                                </li>
                                <li onClick={() => handleItemClick('faq')} className='li-size-list'>
                                    <div >
                                        <img src={cong} />
                                        <p>FAQ</p>
                                    </div>
                                    <div className='li-size-list fix-booking-1'>
                                        {expandedItem === 'faq' && <p>See our FAQs.</p>}
                                    </div>
                                </li>
                            </ul>
                            <p className='fix-booking-last'>Product SKU: 97363004</p>
                        </div>
                    </div>
                </div>
                {show3D && (

                    <div className="iframe-container">
                        <button className="close-button" onClick={() => setShow3D(false)}><img src={Close} /></button>
                        <div>
                            <iframe
                                src="https://rimowa.threedium.co.uk/product-experience/latest/?sku=92585014&lang=en"
                                frameBorder="0"
                                allowFullScreen
                                title="3D Product Experience"
                            ></iframe>
                        </div>
                    </div>
                )}
                <div>
                    <h1>Related products</h1>
                </div>
            </div>
            <FooterTop />
        </div>
    );
};

export default Booking;
