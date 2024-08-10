import React, { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import './Carousel3.scss';
import AdminConfig from '../../Admin/AdminConfig';
import { Link } from 'react-router-dom';
import { useCart } from '../../Hooks/CartContext';

// const Carousel = ({ media }) => {
const Carousel = () => {
    const {url} = AdminConfig;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '0px'
    };

    const [products, setProducts] = useState([])

    const fetchData = async (url) => {
        try {
            let resp = await fetch(`${url}AdminProduct.php`, {
                method: 'GET',
                headers: {
                    'X-React-File-Name': 'AdminProduct.jsx'
                }
            });

            if (!resp.ok) {
                throw new Error('Failed to fetch product data.');
            }

            let data = await resp.json();
            // console.log(data);
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(url);
        fetchImage();
        fetchProductAttri();
    }, [url]);

    const [productAttributes, setPorductAttributes] = useState([]);

    const fetchProductAttri = async () => {
        try {
            let response = await fetch(`${url}AdminProduct.php`, {
                headers: {
                    'X-React-File-Name': 'AdminProductAttri.jsx'
                }
            });
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log(data);
            setPorductAttributes(data);
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
            setImages(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const groupedImages = images.reduce((acc, img) => {
        // if (img.product_id === products.id) {
        if (!acc[img.product_id]) {
            acc[img.product_id] = [];
        }
        acc[img.product_id].push(img);
        // }
        return acc;
    }, {});


    const { addToCart } = useCart();
    const handleAddToCart = useCallback((product) => {
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
    }, [addToCart]);


    return (
        <div className='carousel-new-container'>
            <Slider {...settings} className='carousel-new-slider'>
                {/* {media.map((item, index) => (
                    <div key={index} className="carousel-new-item">
                        <img src={item.src} alt={`slide ${index}`} />
                        <div className='carousel-new-item-info'>
                            <span className='carousel-item-caption'>{item.caption}</span>
                            <span className='carousel-item-price'>{item.price}</span>
                            <div>
                                <button className='carousel-add-to-cart-button'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))} */}
                {
                    products.map((product) => (
                        <div className='' key={product.id}>
                            <div className="carousel-new-item">
                                {
                                    Object.entries(groupedImages)
                                        .filter(([productId, imageList]) => productId === product.id)
                                        .map(([productId, imageList]) => {
                                            const [image1, image2] = imageList.slice(0, 2);

                                            return (
                                                // <Link to={`/Booking/${productId}`}>
                                                    // <div key={productId}>
                                                        image1 && (
                                                            <img
                                                                src={image1.image}
                                                                alt={`Product ${productId} - Image 1`}
                                                                // className='carousel-new-item-info'
                                                            />
                                                        )
                                                    // </div>
                                                // </Link>
                                            );
                                        })
                                }

                                <div className='carousel-new-item-info'>
                                    <span className='carousel-item-caption'>{product.name}</span>
                                    <span className='carousel-item-price'>${product.price}</span>
                                    <div>
                                        <button className='carousel-add-to-cart-button' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))
                }
            </Slider>
        </div>
    );
};

export default Carousel;
