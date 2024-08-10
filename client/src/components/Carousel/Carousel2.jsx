import React, { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import './Carousel2.scss';
import AdminConfig from '../../Admin/AdminConfig';
import { useCart } from '../../Hooks/CartContext';

const Carousel = ({ media, title }) => {
    const { url } = AdminConfig;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '40px',

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
        <div className='carousel-container'>
            <p className='carousel-title'>{title}</p>
            <Slider {...settings} className='carousel-2-container'>
                {/* {media.map((item, index) => (
                    <div key={index} className="carousel-2-item">
                        <img src={item.src} alt={`slide ${index}`} />
                        <div className='carousel-2-item-1'>
                            <span className='item-caption'>{item.caption}</span>
                            <span className='item-price'>{item.price}</span>
                            <div>
                                <button className='add-to-cart-button'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))} */}
                {
                    products.map((product) => (
                        <div className="carousel-2-item" key={product.id}>
                            {
                                Object.entries(groupedImages)
                                    .filter(([productId, imageList]) => productId === product.id)
                                    .map(([productId, imageList]) => {
                                        const [image1, image2] = imageList.slice(0, 2);

                                        return (
                                            // <div key={productId}>
                                                image1 && (
                                                    <img
                                                        src={image1.image}
                                                        alt={`Product ${productId} - Image 1`}
                                                        
                                                    />
                                                )
                                            // </div>
                                        );
                                    })
                            }

                            <div className='carousel-2-item-1'>
                                <span className='item-caption'>{product.name}</span>
                                <span className='item-price'>${product.price}</span>
                                <div>
                                    <button className='add-to-cart-button' onClick={() => handleAddToCart(product)}>Add to Cart</button>
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
