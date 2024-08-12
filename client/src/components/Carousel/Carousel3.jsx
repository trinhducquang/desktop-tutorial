import React, { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import './Carousel3.scss';
import AdminConfig from '../../Admin/AdminConfig';
import { Link } from 'react-router-dom';
import { useCart } from '../../Hooks/CartContext';
import useHover from '../../Hooks/useHover'; // Import useHover

const Carousel = () => {
    const { url } = AdminConfig;
    const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHover(); // Use useHover
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '0px'
    };

    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);

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
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchImage = async () => {
        try {
            const response = await fetch(`${url}AdminProduct.php`, {
                headers: {
                    'X-React-File-Name': 'AdminImage.jsx'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(url);
        fetchImage();
    }, [url]);

    const groupedImages = images.reduce((acc, img) => {
        if (!acc[img.product_id]) {
            acc[img.product_id] = [];
        }
        acc[img.product_id].push(img);
        return acc;
    }, {});

    const { addToCart } = useCart();

    const handleAddToCart = useCallback((product) => {
        const filterImage = images.filter(imgL => imgL.product_id == product.id);
        const mainImage = filterImage.slice(0, 2).length > 0 ? filterImage[0].image : null;

        const productToAdd = {
            id: product.id,
            name: product.name,
            price: parseFloat(product.price) || 0,
            image: mainImage,
        };
        addToCart(productToAdd);
    }, [addToCart, images]);

    return (
        <div className='carousel-new-container'>
            <Slider {...settings} className='carousel-new-slider'>
                {
                    products.map((product) => (
                        <div key={product.id} className='carousel-new-item'>
                            {
                                Object.entries(groupedImages)
                                    .filter(([productId, imageList]) => productId === product.id)
                                    .map(([productId, imageList]) => {
                                        const [image1, image2] = imageList.slice(0, 2);

                                        return (
                                            <Link to={`/Booking/${productId}`} key={productId}>
                                                <div
                                                    className='img-container'
                                                    onMouseEnter={() => handleMouseEnter(product.id)}
                                                    onMouseLeave={handleMouseLeave}
                                                >
                                                    {image1 && (
                                                        <img
                                                            src={image1.image}
                                                            alt={`Product ${productId} - Image 1`}
                                                            className={`img1 ${hoveredItem === productId ? 'hidden' : ''}`}
                                                        />
                                                    )}
                                                    {image2 && (
                                                        <img
                                                            src={image2.image}
                                                            alt={`Product ${productId} - Image 2`}
                                                            className={`imgright ${hoveredItem === productId ? 'visible' : ''}`}
                                                        />
                                                    )}
                                                </div>
                                            </Link>
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
                    ))
                }
            </Slider>
        </div>
    );
};

export default Carousel;
