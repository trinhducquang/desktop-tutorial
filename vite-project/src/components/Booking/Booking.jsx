import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from 'react-icons/fa'
import img1 from '/video/main/img1.webp'

const Booking = () => {
    return (
        <div className='single-product-main-content'>
            <div className='layout'>
                <div className='single-product-page'>
                    <div className='left'>
                        <img src={img1} />
                    </div>
                    <div className='right'>
                        <span className="name">Product name</span>
                        <span className="price">Price</span>
                        <span className="desc">Product description</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking