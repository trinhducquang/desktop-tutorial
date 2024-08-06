import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import vali1 from '/public/Booking/vali1.avif';
import './CartMenu.scss';
import Carousel2 from '../Carousel/Carousel2';
import { WhispersMedia } from '../../components/Carousel/imageGroups';
import useMenu from '../../Hooks/useMenu'; 
import { Link } from 'react-router-dom';
const CartMenu = ({ isCartOpen, handleCloseCart }) => {
  const {
    handleSubmit, 
    
  } = useMenu();

  return (
    <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
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
        <div className='cart-content-2'>
          <img src={vali1} alt="Product Image" />
          <div className='cart-content-2-item'>
            <div>
              <h3>Original</h3>
              <p>Trunk XL</p>
              <p>$2,450.00</p>
              <h4>Remove</h4>
            </div>
          </div>
          <div>
            <button>-</button>
            <button>0</button>
            <button>+</button>
          </div>
        </div>
        <div>
          <Carousel2 media={WhispersMedia} title="Recommended for you" />
        </div>
      </div>
      <div className='cart-content-3'>
        <div className='cart-content-3-item'>
          <p>Total</p>
          <p>(2 items)</p>
          <p>$2.475.00</p>
        </div>
        <div className='cart-content-3-item-2'>
          <button onClick={handleSubmit}>CHECKOUT NOW</button>
        </div>
        <div>
          <Link to = '/User'>Modify your shopping cart</Link>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
