import React, { useState, useEffect } from 'react'
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
import useMenu from '../../Hooks/useMenu';
import AdminConfig from '../../Admin/AdminConfig'



const User = () => {
    const { url } = AdminConfig;
    // const {
    //     handleSubmit,

    // } = useMenu();

    const [products, setProducts] = useState([]);

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
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(url);
        fetchImage();
        fetchUser(url);
        fetchOrder(url, userId);
        fetchOrderDetail(url);
    }, [url]);

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



    // sessionStorage.setItem('userId', '2');
    const userId = sessionStorage.getItem('userId');

    const [users, setUsers] = useState([]);

    const fetchUser = async (url) => {
        try {
            let resp = await fetch(`${url}AdminProduct.php`, {
                method: 'GET',
                headers: {
                    'X-React-File-Name': 'AdminUsers.jsx'
                }
            });

            if (!resp.ok) {
                throw new Error('Failed to fetch entertainment data.');
            }

            let data = await resp.json();
            const filteredProducts = data.filter(product => product.id == parseInt(userId));

            console.log(filteredProducts);

            setUsers(filteredProducts);
            // console.log(products);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const [orders, setOrders] = useState([]);
    const [orderDetails, setOrderDetails] = useState([]);

    const fetchOrder = async (url, userId) => {
        try {
            let resp = await fetch(`${url}AdminProduct.php/${userId}`, {
                method: 'GET',
                headers: {
                    'X-React-File-Name': 'AdminById.jsx',
                    'x-File-Type': 'order_by_Id'
                }
            });

            if (!resp.ok) {
                throw new Error('Failed to fetch entertainment data.');
            }

            let data = await resp.json();
            console.log(data);

            setOrders(data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }

    const deleteOrder = async (event, prd) => {
        event.preventDefault();

        let cf = window.confirm("Are you sure you want to delete this product?");
        if (!cf) {
            return;
        }

        setLoading(true);
        try {
            let resp = await fetch(`${url}AdminProduct.php/${prd.id}`, {
                method: "DELETE",
                headers: {
                    'X-React-File-Name': 'AdminDelete.jsx',
                    'X-File-Type': 'order'
                }
            });

            if (!resp.ok) {
                throw new Error('Failed to fetch entertainment data.');
            }
            let data = await resp.json();

            fetchOrder(url);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchOrderDetail = async (url) => {
        try {
            let resp = await fetch(`${url}AdminProduct.php`, {
                method: 'GET',
                headers: {
                    'X-React-File-Name': 'AdminOrderDetail.jsx'
                }
            });

            if (!resp.ok) {
                throw new Error('Failed to fetch entertainment data.');
            }

            let data = await resp.json();
            console.log(data);

            setOrderDetails(data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const deleteOrderDetail = async (event, prd) => {
        event.preventDefault();

        let cf = window.confirm("Are you sure you want to delete this product?");
        if (!cf) {
            return;
        }

        try {
            let resp = await fetch(`${url}AdminProduct.php/${prd.id}`, {
                method: "DELETE",
                headers: {
                    'X-React-File-Name': 'AdminDelete.jsx',
                    'X-File-Type': 'order_detail'
                }
            });

            if (!resp.ok) {
                throw new Error('Failed to fetch entertainment data.');
            }

            let data = await resp.json();
            fetchOrderDetail(url);
        } catch (error) {
            console.log(error);
        }
    }


    let executed = false;

    const [showMore, setShowMore] = useState({});

    // Function to toggle visibility for a specific order
    const handleToggle = (orderId) => {
        setShowMore(prevState => ({
            ...prevState,
            [orderId]: !prevState[orderId]
        }));
    };



    return (
        <div className='User-container overflow'>
            <div className='User-item'>
                {/* <div className='User-item-1'>
                    <div className='item-1'>
                        <p>Total (1 item)</p>
                        <span>$760.00</span>
                        <button onClick={handleSubmit}>Proceed to checkout</button>
                    </div>
                </div> */}
                <div className='User-item-1'>
                    {
                        users.length > 0 ? (
                            users.map(user => (
                                <div className="user-info" key={user.id}>
                                    <h3>{user.name}</h3>
                                    <p>Email: {user.email}</p>
                                    <p>Phone: {user.phone}</p>
                                    <p>Address: {user.address}</p>
                                </div>
                            ))
                        ) : (
                            <p>No users found.</p>
                        )
                    }
                </div>

                <div className='User-item-2'>
                    <div className='item-2'>
                        <h1>Your Order</h1>
                        <p>Your delivery address is currently in United States.</p>
                    </div>
                </div>


                <div className='User-item-3'>
                    <div className='item-3-left'>
                        <div className='item-3-left-item' >
                            {
                                orders.map((order) => {

                                    return (
                                        <>
                                            <div className='item-3-left-item-1' key={order.id}>
                                                <h3>Order Id: {order.id}</h3>
                                                <h2>User Id: {order.user_id}</h2>
                                                <h4>Order Date: {order.order_date}</h4>
                                                <h4>Total Amount: ${order.total_amount}</h4>

                                                <div className={showMore[order.id] ? 'visible' : 'hidden'}>
                                                    {
                                                        orderDetails
                                                            .filter((orderDetail) => orderDetail.order_id == order.id)
                                                            .map((orderDetail) => {

                                                                return (
                                                                    <div style={{ 'margin-right': '10px' }}>
                                                                        {/* Order Id: {orderDetail.order_id} */}
                                                                        {
                                                                            products
                                                                                .filter((product) => product.id == orderDetail.product_id)
                                                                                .map((product) => (
                                                                                    <div className='item' key={product.id}>
                                                                                        <div className=''>
                                                                                            {/* Product Id: {orderDetail.product_id}
                                                                                        <br></br> */}
                                                                                            {
                                                                                                Object.entries(groupedImages)
                                                                                                    .filter(([productId, imageList]) => productId === orderDetail.product_id)
                                                                                                    .map(([productId, imageList]) => {
                                                                                                        const [image1, image2] = imageList.slice(0, 2);

                                                                                                        return (
                                                                                                            <>
                                                                                                                Order Id: {orderDetail.order_id}
                                                                                                                <br></br>
                                                                                                                Product Id: {orderDetail.product_id}
                                                                                                                <br></br>
                                                                                                                Product Name: {product.name}
                                                                                                                <br></br>
                                                                                                                Price per Product: {orderDetail.price_product}
                                                                                                                <br></br>
                                                                                                                Quantity: {orderDetail.quantity}
                                                                                                                <br></br>
                                                                                                                Subtotal: {orderDetail.subtotal}
                                                                                                                <br></br>

                                                                                                                {image1 && (
                                                                                                                    <img
                                                                                                                        src={image1.image}
                                                                                                                        alt={`Product ${productId} - Image 1`}
                                                                                                                    />
                                                                                                                )}
                                                                                                            </>
                                                                                                        )
                                                                                                    })
                                                                                            }
                                                                                        </div>
                                                                                    </div>
                                                                                ))
                                                                        }
                                                                    </div>
                                                                )
                                                            })
                                                    }
                                                    {/* {image1 && (
                                                        <img
                                                            src={image1.image}
                                                            alt={`Product ${productId} - image 1`}
                                                        />
                                                    )} */}


                                                </div>
                                                <button className='show-button' onClick={() => handleToggle(order.id)}>
                                                    {showMore[order.id] ? 'Show Less' : 'Show Order Detail'}
                                                </button>
                                            </div>
                                            <div className='item-3-left-item-2'>
                                                {/* <h5 onClick={() => deleteOrder}>REMOVE</h5> */}
                                            </div><hr />
                                        </>
                                    )
                                })
                            }
                        </div>

                    </div>

                    {/* <div className='item-3-left'>
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
                        </div> */}


                    <div className='item-3-right'>
                        <div className='item-3-right-item-1'>
                            {/* <div>
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
                            </div> */}
                        </div>
                        {/* <div className='item-3-right-item-2'>
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
                            </div> */}
                        {/* <div className='item-3-right-item-3'>
                                <p>Accepted payment methods</p>
                                <div>
                                    <img src={paypal} />
                                    <img src={Visa} />
                                    <img src={Mastercard} />
                                    <img src={discover} />
                                    <img src={Amex} />
                                    <img src={dinersclub} />
                                </div>
                            </div> */}

                    </div>
                </div>




                {/* <div className='User-item-4'>
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
                </div> */}
            </div>
            <FooterTop />
        </div>
    )
}

export default User;
