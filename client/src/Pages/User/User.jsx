import React, { useState, useEffect } from 'react'
import FooterTop from '../../components/Footer-top/FooterTop'
import './User.scss'
import Carousel3 from '../../components/Carousel/Carousel3';
import { WhispersMedia } from '../../components/Carousel/imageGroups';
import AdminConfig from '../../Admin/AdminConfig'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'



const User = () => {
    const { url } = AdminConfig;

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
            // console.log(data);
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

    // const userId = sessionStorage.getItem('userId');
    const userId = Cookies.get('userId');

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

            // console.log(filteredProducts);

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
            // console.log(data);

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
            // console.log(error);
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
            // console.log(data);

            setOrderDetails(data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const deleteOrderDetail = async (event, id) => {
        event.preventDefault();

        let cf = window.confirm("Are you sure you want to delete this product?");
        if (!cf) {
            return;
        }

        try {
            let resp = await fetch(`${url}AdminProduct.php/${id}`, {
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
            // console.log(error);
        }
    }

    let executed = false;

    return (
        <div className='User-container overflow'>
            <div className='User-item'>
                <div className='User-item-1'>
                    {
                        users.length > 0 ? (
                            users.map(user => (
                                <div className="user-info" key={user.id}>
                                    <h3>{user.name}</h3>
                                    <h3>{user.id}</h3>
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
                                orders
                                .filter(order => order.user_id == userId)
                                .map((order) => {
                                    return (
                                        <div key={order.id}>
                                            <div className='item-3-left-item-1' >
                                                {
                                                    orderDetails
                                                        .filter((orderDetail) => orderDetail.order_id == order.id)
                                                        .map((orderDetail) => {

                                                            return (
                                                                <div style={{ 'marginRight': '10px' }} key={orderDetail.id} >
                                                                    {
                                                                        products
                                                                            .filter((product) => product.id == orderDetail.product_id)
                                                                            .map((product) => (
                                                                                <div className='item' key={product.id}>
                                                                                    <div className='item-flex'>
                                                                                        {
                                                                                            Object.entries(groupedImages)
                                                                                                .filter(([productId, imageList]) => productId === orderDetail.product_id)
                                                                                                .map(([productId, imageList]) => {
                                                                                                    const [image1, image2] = imageList.slice(0, 2);

                                                                                                    return (
                                                                                                        <div key={productId}>
                                                                                                            <div className='flex-item-container' >
                                                                                                                <div className='item-1-flex'>
                                                                                                                    <div >
                                                                                                                        {image1 && (
                                                                                                                            <img
                                                                                                                                src={image1.image}
                                                                                                                                alt={`Product ${productId} - Image 1`}
                                                                                                                            />
                                                                                                                        )}
                                                                                                                    </div>
                                                                                                                    <div className='item-2-flex' >
                                                                                                                        <div>
                                                                                                                            <p>Order Id: {orderDetail.order_id}</p>
                                                                                                                            <p>Product Id: {orderDetail.product_id}</p>
                                                                                                                            <p>Product Name: {product.name}</p>
                                                                                                                            <p>Price per Product: {orderDetail.price_product}</p>
                                                                                                                            <p>Quantity: {orderDetail.quantity}</p>
                                                                                                                            <p>Order Date: {order.order_date}</p>
                                                                                                                        </div>
                                                                                                                        <div>
                                                                                                                            <button onClick={(event) => deleteOrderDetail(event, orderDetail.id)}>REMOVE</button>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div className='item-flex-item'>
                                                                                                                    <div><p>Subtotal: {orderDetail.subtotal}</p></div>
                                                                                                                    <div><p>THANH TOÁN THÀNH CÔNG</p></div>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                        </div>
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
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
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
                        <Link to='/Inspiring-Greatness'><button>BACK TO SHOP</button></Link>
                    </div>
                </div>
            </div>
            <FooterTop />
        </div>
    )
}

export default User;
