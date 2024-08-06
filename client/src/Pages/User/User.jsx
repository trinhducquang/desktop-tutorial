import React from 'react'
import FooterTop from '../../components/Footer-top/FooterTop'
import './User.scss'
import img1 from '../../../public/User/img1.png'
import cano from '../../../public/User/cano.png'
import box from '../../../public/User/box.png'
import order from '../../../public/User/order.png'
import paypal from '../../../public/User/paypal.png'
import Visa from '../../../public/User/Visa.png'
import Mastercard from '../../../public/User/Mastercard.png'
import discover from '../../../public/User/discover.png'
import Amex from '../../../public/User/Amex.png'
import dinersclub from '../../../public/User/dinersclub.png'
import Carousel3 from '../../components/Carousel/Carousel3';
import { WhispersMedia } from '../../components/Carousel/imageGroups';



const User = () => {
    return (
        <div className='User-container'>
            <div className='User-item'>
                <div className='User-item-1'>
                    <div className='item-1'>
                        <p>Total (1 item)</p>
                        <span>$760.00</span>
                        <button>Proceed to checkout</button>
                    </div>
                </div>
                <div className='User-item-2'>
                    <div className='item-2'>
                        <h1>Your Cart</h1>
                        <p>Your delivery address is currently in United States.</p>
                    </div>
                </div>
                <div className='User-item-3'>
                    <div className='item-3-left'>
                        <div>
                            <img src={img1} alt="Product Image" />
                        </div>
                        <div className='item-3-left-item'>
                            <div className='item-3-left-item-1'>
                                <h3>Essential Lite</h3>
                                <h2>Cabin</h2>
                                <p>Color: Gloss Ivory Beige</p>
                                <h4>IN STOCK</h4>
                            </div>
                            <div className='item-3-left-item-2'>
                                <div className='button'>
                                    <button>-</button>
                                    <button>0</button>
                                    <button>+</button>
                                </div>
                                <h5>REMOVE</h5>
                                <h4>$1,704.55</h4>
                            </div>
                        </div>
                    </div>
                    <div className='item-3-right'>
                        <div className='item-3-right-item-1'>
                            <div>
                                <h3>Subtotal</h3>
                                <h3>$760.00</h3>
                            </div>
                            <div>
                                <h3>Shipping</h3>
                                <h3>-</h3>
                            </div>
                            <div>
                                <h3>Estimated sales tax</h3>
                                <h3>-</h3>
                            </div>
                            <div>
                                <h3>Estimated Total</h3>
                                <h3>$1,875.00</h3>
                            </div>
                        </div>
                        <div className='item-3-right-item-2'>
                            <div>
                                <img src={cano} />
                                <p>Free Pickup in store</p>
                            </div>
                            <div>
                                <img src={box} />
                                <p>Please enjoy express deliveries on all orders</p>
                            </div>
                            <div>
                                <img src={order} />
                                <p>Free returns on all orders</p>
                            </div>
                        </div>
                        <div className='item-3-right-item-3'>
                            <p>Accepted payment methods</p>
                            <div>
                                <img src={paypal} />
                                <img src={Visa} />
                                <img src={Mastercard} />
                                <img src={discover} />
                                <img src={Amex} />
                                <img src={dinersclub} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='User-item-4'>
                    <div className='User-item-4-item-1'>
                        <p>YOU MIGHT ALSO LIKE</p>
                        <span>Our most popular items handpicked for you.</span>
                    </div>
                    <div className='User-item-4-item-2'>
                        <Carousel3 media={WhispersMedia} />
                    </div>
                    <div className='User-item-4-item-3'>
                        <button>BACK TO SHOP</button>
                    </div>
                </div>
            </div>
            <FooterTop />
        </div>
    )
}

export default User;
