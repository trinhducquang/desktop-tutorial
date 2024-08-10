import React, { useState, useEffect } from 'react';
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
import Carousel3 from '../../components/Carousel/Carousel3';
import { WhispersMedia } from '../../components/Carousel/imageGroups';

import AdminConfig from '../../Admin/AdminConfig';
import { useParams } from 'react-router-dom';

import { useCart } from '../../Hooks/CartContext';


const Booking = () => {
    const { id } = useParams();
    const { url } = AdminConfig;

    const [showMore, setShowMore] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [show3D, setShow3D] = useState(false);
    const [expandedItem, setExpandedItem] = useState(null);
    const { rating, handleRating } = useRating();

    const [products, setProducts] = useState([]);

    const fetchData = async (url) => {
        try {
            let resp = await fetch(`${url}AdminProduct.php/${id}`, {
                method: 'GET',
                headers: {
                    'X-React-File-Name': 'AdminById.jsx',
                    'x-File-Type': 'product'
                }
            });

            if (!resp.ok) {
                throw new Error('Failed to fetch product data.');
            }

            let data = await resp.json();
            setProducts(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(url);
        fetchImage();
        fetchAttri();
        fetchAttriValue();
    }, [url]);

    const [attributes, setAttirbutes] = useState([]);
    const [attributeValue, setAttirbuteValue] = useState([]);

    const fetchAttri = async () => {
        try {
            let response = await fetch(`${url}AdminProduct.php`, {
                headers: {
                    'X-React-File-Name': 'AdminAttribute.jsx'
                }
            })
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log(data);
            setAttirbutes(data);
            // console.log(attributes);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    const fetchAttriValue = async () => {
        try {
            const response = await fetch(`${url}AdminProduct.php`, {
                headers: {
                    'X-React-File-Name': 'AdminAttriValue.jsx'
                }
            })
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log(data);
            setAttirbuteValue(data);
            // console.log(attributeValue);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    const [images, setImages] = useState([]);

    const fetchImage = async () => {
        try {
            const response = await fetch(`${url}AdminProduct.php`, {
                headers: {
                    'X-React-File-Name': 'AdminImage.jsx'
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log(data);
            setImages(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const groupedImages = images.reduce((acc, img) => {
        if (!acc[img.product_id]) {
            acc[img.product_id] = [];
        }
        acc[img.product_id].push(img);
        return acc;
    }, {});



    const handleItemClick = (item) => {
        setExpandedItem(expandedItem === item ? null : item);
    };
    // console.log(products)
    const product = products;
    // console.log(product.id)
    // console.log(groupedImages);
    let executed = false;

    
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const filterImage = images.filter(imgL => imgL.product_id == product.id);
        const mainImage = filterImage.slice(0, 2).length > 0 ? filterImage[0].image : null;
        // console.log(filterImage.slice(0, 1));

        const productToAdd = {
            id: product.id,
            name: product.name,
            price: parseFloat(product.price) || 0,
            image: mainImage,
        };
        addToCart(productToAdd);
    };


    return (
        <div className='overflow'>

            {/* product.id !== null && */}
            {
                // products.map((product) => ({
                // console.log(product) ||
                Object.entries(groupedImages)
                    // .filter(([productId, imageList]) => productId === product.id)
                    .map(([productId, imageList]) => {
                        // const imageArray = Array.from({ length: images.filter(img => img.product_id == product.id) }, (_, index) => `image${index + 1}`);

                        // console.log({ length: images.filter(img => img.product_id == product.id) });
                        // console.log(imageList);
                        const filterImage = images.filter(imgL => imgL.product_id == product.id)
                        // console.log(filterImage);
                        // console.log('vao');
                        const [image3, image4, image5, image6, image7, image8, image9, image10, image11, image12] = filterImage.slice(2, 12);
                        // console.log(image3);

                        if (executed) return null; // Skip further items
                        executed = true;

                        return (

                            <div className='Booking-container' key={productId}>
                                <div className='Booking-container-item'>
                                    <div className='Booking-item-1'>
                                        <div>
                                            {/* <img src={vali1} /> */}
                                            {image3 && (
                                                <img
                                                    src={image3.image}
                                                    alt={`Product ${productId} - Image 3`}
                                                />
                                            )}
                                            <button onClick={() => setShow3D(true)}>Try in 3D</button>
                                        </div>
                                        <div>
                                            <video src={vali} autoPlay muted loop />
                                        </div>
                                        <div className='abc'>
                                            {/* <img src={validata} />
                                            <img src={validata2} /> */}
                                            {image4 && (
                                                <img
                                                    src={image4.image}
                                                    alt={`Product ${productId} - image 4`}
                                                />
                                            )}
                                            {image5 && (
                                                <img
                                                    src={image5.image}
                                                    alt={`Product ${productId} - image 5`}
                                                />
                                            )}
                                        </div>
                                        <div>
                                            {/* <img src={validata3} /> */}
                                            {image6 && (
                                                <img
                                                    src={image6.image}
                                                    alt={`Product ${productId} - image 6`}
                                                />
                                            )}
                                        </div>
                                        <div className={showMore ? 'visible' : 'hidden'}>
                                            {/* <img src={validata7} />
                                            <img src={validata8} /> */}
                                            {image7 && (
                                                <img
                                                    src={image7.image}
                                                    alt={`Product ${productId} - image 7`}
                                                />
                                            )}
                                            {image8 && (
                                                <img
                                                    src={image8.image}
                                                    alt={`Product ${productId} - image 8`}
                                                />
                                            )}
                                        </div>
                                        <button className='show-button' onClick={() => setShowMore(!showMore)}>
                                            {showMore ? 'Show Less' : 'See more images (2)'}
                                        </button>
                                    </div>
                                    <div className='Booking-item-2'>
                                        <div className='item-list-1'>
                                            <p>Original</p>
                                            {/* <h1>Trunk XL</h1> */}
                                            <h1>{product.name}</h1>
                                            {/* <span>$2,450.00</span> */}
                                            <span>${product.price}</span>
                                            {/* <p>
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
                                            </p> */}
                                            <p>{product.description}</p>
                                            <button className='read-more-button' onClick={() => setIsExpanded(!isExpanded)}>
                                                {isExpanded ? 'Read Less' : 'Read More'}
                                                <img src={down} />
                                            </button>
                                            <p><a href="#">Size guide</a></p>
                                        </div>
                                        <div className='item-list-2'>
                                            <button>
                                                {/* <span>Trunk XL</span> */}
                                                <span>{product.name}</span>
                                                {/* <span>31.5 x 17.2 x 17 inch</span> */}
                                                {
                                                    attributeValue.filter(attri_value => attri_value.id == product.size).map((attri_value) => (
                                                        <span>{attri_value.value}</span>
                                                    ))
                                                }
                                                <img src={down2} />
                                            </button>
                                        </div>
                                        <div className='item-list-3'>
                                            <span>Color:</span>
                                            {/* <p>Black</p> */}
                                            {
                                                attributeValue.filter(attri_value => attri_value.id == product.color).map((attri_value) => (
                                                    <p>{attri_value.value}</p>
                                                ))
                                            }
                                        </div>
                                        {/* <div className='item-list-4'>
                                            <button><img src={colorimg1} /></button>
                                            <button><img src={colorimg2} /></button>
                                        </div> */}
                                        <div className='hr'></div>
                                        <div className='item-list-5'>
                                            <button onClick={handleAddToCart}>ADD TO CART</button>
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
                                        {/* <div className='item-list-6'>
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
                                        </div> */}
                                        <div className='item-list-7'>
                                            <span>Key elements</span>
                                            <div className='item-list-7-item'>
                                                <div>
                                                    {/* <img src={validata8} /> */}
                                                    {image9 && (
                                                        <img
                                                            src={image9.image}
                                                            alt={`Product ${productId} - image 9`}
                                                        />
                                                    )}
                                                    <span>TSA-Approved Locks</span>
                                                    <p>Each of our suitcases features TSA-approved
                                                        locks that can be opened by security during
                                                        airline baggage checks without causing any damage.</p>
                                                </div>
                                                <div>
                                                    {/* <img src={validata9} /> */}
                                                    {image10 && (
                                                        <img
                                                            src={image10.image}
                                                            alt={`Product ${productId} - image 10`}
                                                        />
                                                    )}
                                                    <span>Flex Divider</span>
                                                    <p>Packed items are kept in perfect
                                                        order during transit with the height
                                                        adjustable Flex Divider, which can be
                                                        adapted to suit your belongings.
                                                    </p>
                                                </div>
                                                <div>
                                                    {/* <img src={validata10} /> */}
                                                    {image11 && (
                                                        <img
                                                            src={image11.image}
                                                            alt={`Product ${productId} - image 11`}
                                                        />
                                                    )}
                                                    <span>RIMOWA Multiwheel® System</span>
                                                    <p>Pioneered by RIMOWA, this high-end
                                                        system guarantees stable and effortless
                                                        steering thanks to ball-bearing mounted
                                                        wheels with cushioned axels.
                                                    </p>
                                                </div>
                                                <div>
                                                    {/* <img src={validata11} /> */}
                                                    {image12 && (
                                                        <img
                                                            src={image12.image}
                                                            alt={`Product ${productId} - image 12`}
                                                        />
                                                    )}
                                                    <span>Telescopic Handle</span>
                                                    <p>Engineered to offer seamless
                                                        stage-free adjustment for maximum
                                                        comfort and smooth maneuverability.
                                                    </p>
                                                </div>
                                            </div>
                                            <ul className='ul-booking-list'>
                                                <li onClick={() => handleItemClick('size')} className='li-size-list'>
                                                    <div className='fix-img-1'>
                                                        <img src={cong} className='fix-img' />
                                                        <p>Size and Weight </p>
                                                    </div>
                                                    <div className='fix-booking-1'>
                                                        {expandedItem === 'size' && <p>Additional details about size and weight.</p>}
                                                    </div>
                                                </li>
                                                <li onClick={() => handleItemClick('materials')} className='li-size-list'>
                                                    <div className='fix-img-1'>
                                                        <img src={cong} className='fix-img' />
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
                                                    <div className='fix-img-1' >
                                                        <img src={cong} className='fix-img' />
                                                        <p>Shipping and Returns</p>
                                                    </div>
                                                    <div>
                                                        {expandedItem === 'shipping' &&
                                                            <div className='fix-menu-1 fix-booking-1'>
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
                                                    <div className='fix-img-1' >
                                                        <img src={cong} className='fix-img' />
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
                                                    <div className='fix-img-1'>
                                                        <img src={cong} className='fix-img' />
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
                                                    <div className='fix-img-1'>
                                                        <img src={cong} className='fix-img' />
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
                                {
                                    show3D && (

                                        <div className="iframe-container">
                                            <button className="close-button" onClick={() => setShow3D(false)}><img src={Close} /></button>
                                            <div>
                                                <iframe
                                                    src={`${product.link}`}
                                                    frameBorder="0"
                                                    allowFullScreen
                                                    title="3D Product Experience"
                                                ></iframe>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            // <>vao</>

                        )
                    })
            }



            {/* <div className='Booking-container'>

            </div> */}

            <div className='fix-best-lat-booking'>
                <h1>Related products</h1>
                <p>You may also like</p>
                <Carousel3 media={WhispersMedia} />
            </div>
            <FooterTop />
        </div>
    );
};

export default Booking;
