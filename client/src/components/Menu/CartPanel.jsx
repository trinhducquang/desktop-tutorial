import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CartPanel = ({
  isCartOpen,
  handleCloseCart,
  cartItems,
  handleSubmit,
}) => {
  return (
    <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
      <div className='cart-panel-content'>
        <div className='cart-container'>
          <div>SHOPPING CART</div>
          <div className='cart-close-button' onClick={handleCloseCart}>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <section>
        <div className='cart-items'>
          {cartItems.map((item, index) => (
            <div key={index} className='cart-item'>
              <img src={item.image} alt={item.name} />
              <div className='item-details'>
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <div className='quantity-buttons'>
                  <span>-</span>
                  <span>{item.quantity}</span>
                  <span>+</span>
                </div>
              </div>
            </div>
          ))}
          <div className='cart-item-button'>
            <button onClick={handleSubmit}>CHECKOUT</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPanel;
