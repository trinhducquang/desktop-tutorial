import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './CartMenu.scss';
import { useCart } from '../../Hooks/CartContext';
import AdminConfig from '../../Admin/AdminConfig';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

  const handleSubmitPaypal = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/payment', { cartItems });
      console.log(res);

      if (res && res.data) {
        const link = res.data.links[1].href;
        window.location.href = link;
      }
    } catch (error) {
      console.error('Error during PayPal payment creation:', error);
    }
  };

  const { url } = AdminConfig;
  const navigate = useNavigate();
  const [products, setProducts] = useState({
    id: null,
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    const id = sessionStorage.getItem('uesrId') || '1'; 
    fetch(`${url}AdminProduct.php/${id}`, {
      headers: {
        'X-React-File-Name': 'AdminById.jsx',
        'x-File-Type': 'user'
      }
    })
    .then(response => response.json())
    .then(data => {
      setProducts({
        ...products,
        id: data.id,
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        address: data.address || ''
      });
    })
    .catch(error => console.error('Fetch error:', error));
  }, []);

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
    .catch(error => console.error(error));
  };

  return (
    <form className={`cart-panel ${isCartOpen ? 'open' : ''}`} onSubmit={handleSubmit}>
      <div className='cart-content'>
        <span className='close-button' onClick={handleCloseCart}>
          <IconButton className='fix'>
            <CloseIcon style={{ color: 'black' }} />
          </IconButton>
          <span>CLOSE</span>
        </span>
        <h1>Your Shopping bag</h1>
      </div>
      <div className='cart-content-2-container'>
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
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <button>{item.quantity}</button>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className='cart-content-3'>
        <div className='cart-content-3-item'>
          <p>Total</p>
          <p>({totalItems} items)</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div className='cart-content-3-item-2'>
          <button onClick={handleSubmitPaypal}>CHECKOUT NOW</button>
        </div>
      </div>
    </form>
  );
};

export default CartMenu;
