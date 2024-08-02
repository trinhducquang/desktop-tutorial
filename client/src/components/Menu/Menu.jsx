import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openMenu, closeMenu, setScrollY, finishClosing, setCurrentPage } from '../../Store/menuSlice';
import './Menu.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const MenuComponent = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const isClosing = useSelector((state) => state.menu.isClosing);
  const currentPage = useSelector((state) => state.menu.currentPage);
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [isNavMenuVisible, setIsNavMenuVisible] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    dispatch(setCurrentPage(location.pathname));

    const handleScroll = () => {
      dispatch(setScrollY(window.scrollY));

      if (window.scrollY > 50) {
        setIsNavMenuVisible(false);
      } else {
        setIsNavMenuVisible(true);
      }

      const navbar = document.querySelector('.Navbar-container');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      if (location.pathname === '/menu1' && window.scrollY > 100) {
        dispatch(closeMenu());
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const menuElement = document.querySelector('.side-menu-content');
      if (menuElement && !menuElement.contains(event.target)) {
        handleCloseMenu();
      }
    };

    if (isMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      dispatch(finishClosing(false));

      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'auto';
      if (isClosing) {
        setTimeout(() => dispatch(finishClosing(false)), 3000);
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen, isClosing, dispatch]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const cartElement = document.querySelector('.cart-panel');
      if (cartElement && !cartElement.contains(event.target)) {
        handleCloseCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isCartOpen]);

  const handleMenuClick = () => {
    dispatch(openMenu());
  };

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post('http://localhost:8000/payment');
    console.log(res);
    if (res && res.data) {
      let link = res.data.links[1].href
      window.location.href = link
    }
  }

  const menuItems = [
    { name: "INSPIRING GREATNESS", link: "/Inspiring-Greatness" },
    { name: "MODELS", link: "/models" },
    { name: "BESPOKE", link: "/bespoke" },
    { name: "OWNERSHIP", link: "/ownership" },
    { name: "PROVENANCE", link: "/provenance" },
    { name: "BOUTIQUE", link: "/boutique" },
    { name: "LIBRARY", link: "/Library" },
  ];

  return (
    <section className={location.pathname === '/Booking' ? 'booking-page' : ''}>
      <div className='Navbar-container'>
        <div className='container-item'>
          <div className={`top-row`}>
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
          <div >
            {isNavMenuVisible && currentPage === '/menu1' && (
              <div className='Navbar-container-menu1'>
                <div className='additional-items'>
                  <a href='./menu1'>Inspiring Greatness</a>
                  <Link to="/vali">Vali</Link>
                  <Link to="/handbag">handbag</Link>
                  <Link to="/Backpack">Backpack</Link>
                  <Link to="/Gentlemen">Gentlemen</Link>
                  <Link to="/Ladies">Ladies</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`side-menu ${isMenuOpen ? 'open' : ''} ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className='side-menu-content'>
          <div className='close-button' onClick={handleCloseMenu}>
            <IconButton className='fix'>
              <CloseIcon style={{ color: 'white', }} />
            </IconButton>
            <span>CLOSE</span>
          </div>
          <div className='menu-items'>
            {menuItems.map((item, index) => (
              <Link
                to={item.link}
                className={isClosing ? 'closing' : 'appearing'}
                style={{ animationDelay: `${index * 0.1}s` }}
                key={index}
              >
                {item.name}
              </Link>
            ))}
            <div className={`menu-background ${isClosing ? 'closing' : ''}`}></div>
          </div>
        </div>
      </div>
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
              <button onClick={HandleSubmit}>CHECKOUT</button>
            </div>
          </div>
        </section>

      </div>
    </section>

  );
};

export default MenuComponent;
