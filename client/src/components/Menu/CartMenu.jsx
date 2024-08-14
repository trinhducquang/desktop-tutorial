import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './CartMenu.scss';
import Carousel2 from '../Carousel/Carousel2';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../Hooks/CartContext';

import AdminConfig from '../../Admin/AdminConfig';
import axios from 'axios';

const CartMenu = ({ isCartOpen, handleCloseCart }) => {

  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  //console.log(cartItems);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    return sum + itemPrice * item.quantity;
  }, 0);

  const formatPrice = (price) => {
    const numPrice = parseFloat(price);
    return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2);
  };

  const handleSubmitPaypal = async (e) => {
    e.preventDefault();
    let res = await axios.post('http://localhost:8000/payment', { cartItems });

    console.log(res);

    if (res && res.data) {
      let link = res.data.links[1].href;
      window.location.href = link;
    }
  };

  const { url, urlLogin } = AdminConfig;
  const navigate = useNavigate();

  // sessionStorage.setItem('userId', '2');

  const id = sessionStorage.getItem('userId');


  const [products, setProducts] = useState({
    id: null,
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    fetch(`${url}AdminProduct.php/${id}`, {
      headers: {
        'X-React-File-Name': 'AdminById.jsx',
        'x-File-Type': 'user'
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(data => {
      setProducts({
        ...products,
        id: data.id,
        name: data.name ? data.name : '',
        email: data.email ? data.email : '',
        phone: data.phone ? data.phone : '',
        address: data.address ? data.address : ''
      });
    }).catch(error => {
      console.error('Fetch error:', error);
    });
  }, [id, url]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const orderDetail = cartItems.map((item) => ({
      fields: {
        product_id: item.id,
        quantity: item.quantity.toString(),
        price_product: item.price
      }
    }));

    const order = {
      fields: {
        user_id: products.id,
        name: products.name,
        email: products.email,
        phone: products.phone,
        address: products.address,
        orderDetails: orderDetail
      }
    };

    console.log(order);
    fetch(`${url}AdminProduct.php`, {
      method: 'POST',
      headers: {
        'X-React-File-Name': 'OrderProduct.jsx'
      },
      body: JSON.stringify(order)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Checkout successfully');
        clearCart();
        navigate('./Library');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    // handleSubmitPaypal();
  };

  return (
    <form className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
      <div className='cart-content'>
        <span className='close-button' onClick={handleCloseCart}>
          <IconButton className='fix'>
            <CloseIcon style={{ color: 'black' }} />
          </IconButton>
        </span>
        <h1>Your Shopping bag</h1>
      </div>
      <div className='cart-content-2-container'>
        <div className='border-bottom'>
          {cartItems.map((item) => (
            <div key={item.id} className='cart-content-2'>
              <img src={item.image} alt={item.name} />
              <div className='cart-content-2-item'>
                <div>
                  <h3>Original</h3>
                  <p>{item.name}</p>
                  <p>${formatPrice(item.price)}</p>
                  <h4 onClick={() => removeFromCart(item.id)}>Remove</h4>
                </div>
              </div>
              <div>
                {/* <button onClick={(e) => {
                  e.preventDefault();
                  updateQuantity(item.id, item.quantity - 1);
                }}>-</button>
                <button>{item.quantity}</button>
                <button onClick={(e) => {
                  e.preventDefault();
                  updateQuantity(item.id, item.quantity + 1);
                }}>+</button> */}

                <button type='button' onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button disabled>{item.quantity}</button>
                <button type='button' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Carousel2 title="Recommended for you" />
        </div>
      </div>
      <div className='cart-content-3'>
        <div className='cart-content-3-item'>
          <p>Total</p>
          <p>({totalItems} items)</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div className='cart-content-3-item-2'>
          <button onClick={(e) => clickSubmit(e)}>CHECKOUT NOW</button>
        </div>
        <div>
          <Link to='/User'>Modify your shopping cart</Link>
        </div>
      </div>
    </form>
  );
};

export default CartMenu;
