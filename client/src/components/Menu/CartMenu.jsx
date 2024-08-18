import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './CartMenu.scss';
import Carousel2 from '../Carousel/Carousel2';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../Hooks/CartContext';
import Cookies from 'js-cookie';
import AdminConfig from '../../Admin/AdminConfig';
import axios from 'axios';

const CartMenu = ({ isCartOpen, handleCloseCart }) => {

  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    return sum + itemPrice * item.quantity;
  }, 0);

  const formatPrice = (price) => {
    const numPrice = parseFloat(price);
    return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2);
  };

  const handleSubmitPaypal = async () => {
    try {
      const res = await axios.post('http://localhost:8000/payment', { cartItems });
      if (res && res.data) {
        const link = res.data.links[1].href;
        return link;
      }
    } catch (error) {
      console.error('Error during PayPal submission:', error);
      throw error;
    }
  };

  const { url, urlLogin } = AdminConfig;
  const navigate = useNavigate();


  const [products, setProducts] = useState({ // lấy thông tin của user theo id
    id: null,
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const id = Cookies.get('userId');

  useEffect(() => {
    if (id) {
      fetch(`${url}AdminProduct.php/${id}`, {
        headers: {
          'X-React-File-Name': 'AdminById.jsx',
          'x-File-Type': 'user',
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setProducts({
            id: data.id,
            name: data.name || '',
            email: data.email || '',
            phone: data.phone || '',
            address: data.address || ''
          });
        })
       
        .catch(error => {
          console.error('Fetch error:', error);
        });
    }
  }, [id, url]);

  const handleSubmit = async (event) => { // để khi nhấn vào checkout thì lưu vào csdl 
    event.preventDefault();

    const orderDetail = cartItems.map((item) => ({
      fields: {
        product_id: item.id,
        quantity: item.quantity.toString(),
        price_product: item.price,
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

    try {
      const response = await fetch(`${url}AdminProduct.php`, {
        method: 'POST',
        headers: {
          'X-React-File-Name': 'OrderProduct.jsx'
        },
        body: JSON.stringify(order)
      });
      const data = await response.json();
      
      clearCart();
      //navigate('/Library');
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  const clickSubmit = async (e) => {
    e.preventDefault();

    const userId = Cookies.get('userId');

    if (!userId) {
      navigate('/login');
      return;
    }

    try {
      const paypalLink = await handleSubmitPaypal();

      await handleSubmit(e);

      if (paypalLink) {

        window.location.href = paypalLink;

        alert('Checkout successfully');
        clearCart();
      }
    } catch (error) {

      console.error('Error during checkout:', error);

    }
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
