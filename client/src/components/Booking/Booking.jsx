import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Store/cartSlice';
import './Booking.scss';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from 'react-icons/fa'
import img1 from '/video/main/img1.webp';

const Booking = () => {
    const [quantity, setQuantity] = useState(1);
    const pricePerItem = 100;
    const [price, setPrice] = useState(pricePerItem);
    const dispatch = useDispatch();

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        setPrice((quantity + 1) * pricePerItem);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setPrice((quantity - 1) * pricePerItem);
        }
    };

    const handleAddToCart = () => {
        dispatch(addItemToCart({ id: 1, name: 'Product name', quantity, price, image: img1 }));
    };
    
    return (
        <div className='single-product-main-content'>
            <div className='layout'>
                <div className='single-product-page'>
                    <div className='left'>
                        <img src={img1} />
                    </div>
                    <div className='right'>
                        <span className="name">Product name</span>
                        <span className="price">${price}</span>
                        <span className="desc">Product description</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decreaseQuantity}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increaseQuantity}>+</span>
                            </div>
                            <button className='add-to-cart-button' onClick={handleAddToCart}>
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className='divider' />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>HeadPhones</span>
                            </span>
                            <span className='text-bold'>
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;

