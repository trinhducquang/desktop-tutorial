import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({
  location,
  isMenuOpen,
  handleMenuClick,
  handleCartClick,
  isNavMenuVisible,
  totalQuantity,
}) => {
  return (
    <div className='Navbar-container'>
      <div className='container-item'>
        <div className='top-row'>
          <div className={`menu-button ${isMenuOpen ? 'hidden' : ''}`} onClick={handleMenuClick}>
            <MenuIcon />
            <span>MENU</span>
          </div>
          <div>
            <Link to='/'><h1>RIMOWA</h1></Link>
          </div>
          <div className='find-dealer'>
            {location.pathname === '/Booking' ? (
              <div className='shopping-cart-container' onClick={handleCartClick}>
                <ShoppingCartIcon />
                <div className='badge'>{totalQuantity}</div>
              </div>
            ) : (
              <>
                <SearchIcon />
                <span>FIND A DEALER</span>
              </>
            )}
          </div>
        </div>
        {isNavMenuVisible && location.pathname === '/Inspiring-Greatness' && (
          <div className='Navbar-container-menu1'>
            <div className='additional-items'>
              <a href='./menu1'>Inspiring Greatness</a>
              <Link to="/vali">Vali</Link>
              <Link to="/handbag">Handbag</Link>
              <Link to="/Backpack">Backpack</Link>
              <Link to="/Gentlemen">Gentlemen</Link>
              <Link to="/Ladies">Ladies</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
