import React, { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import './Carousel2.scss';
import AdminConfig from '../../Admin/AdminConfig';
import { useCart } from '../../Hooks/CartContext';
import useHover from '../../Hooks/useHover'; // Import useHover

const Carousel = ({ title }) => {
    const { url } = AdminConfig;
    const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHover(); // Use useHover

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '35px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0',
                },
            },
        ],
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
        // e.preventDefault();
        // console.log('abd');
        // return;
        const filterImage = images.filter(imgL => imgL.product_id == product.id);
        const mainImage = filterImage.slice(0, 2).length > 0 ? filterImage[0].image : null;

        const productToAdd = {
            id: parseFloat(product.id),
            name: product.name,
            price: parseFloat(product.price) || 0,
            image: mainImage,
        };
        addToCart(productToAdd);
    }, [addToCart, images]);

    

    return (
        <div className='carousel-container'>
            <p className='carousel-title'>{title}</p>
            <Slider {...settings} className='carousel-2-container'>
                {
                    products.map((product) => (
                        <div className="carousel-2-item" key={product.id}>
                            {
                                Object.entries(groupedImages)
                                    .filter(([productId, imageList]) => productId === product.id)
                                    .map(([productId, imageList]) => {
                                        const [image1, image2] = imageList.slice(0, 2);

                                        return (
                                            <div
                                                className='img-container'
                                                onMouseEnter={() => handleMouseEnter(product.id)}
                                                onMouseLeave={handleMouseLeave}
                                                key={productId}
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
                                        );
                                    })
                            }
                            <div className='carousel-2-item-1'>
                                <span className='item-caption'>{product.name}</span>
                                <span className='item-price'>${product.price}</span>
                                <div>
                                    <button type='button' className='add-to-cart-button' onClick={() => handleAddToCart(product)}>Add to Cart</button>
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
