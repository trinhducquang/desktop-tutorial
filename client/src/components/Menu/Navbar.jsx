import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import user from '/public/icon/user.png'
import Shopcart from '/public/icon/shopping-bag.png'
import './Navbar.scss';

const Navbar = ({
  location,
  isMenuOpen,
  handleMenuClick,
  handleCartClick,
  isNavMenuVisible,
  totalQuantity,
  navBarClass,
  id
}) => {
  return (
    <div className={`Navbar-container ${navBarClass}`}>
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
            <div className='shopping-cart-container' onClick={handleCartClick}>
              <img src={Shopcart}/>
              <div className='badge'>{totalQuantity}</div>
            </div>
          </div>
        </div>
        {isNavMenuVisible && location.pathname === '/Inspiring-Greatness' && (
          <div className='Navbar-container-menu1'>
            <div className='additional-items'>
              <a href='./menu1'>Inspiring Greatness</a>
              <Link to="/Vali">Vali</Link>
              <Link to="/Handbag">Handbag</Link>
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
