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

const MenuComponent = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const isClosing = useSelector((state) => state.menu.isClosing);
  const scrollY = useSelector((state) => state.menu.scrollY);
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
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      dispatch(finishClosing(false));

      const handleOutsideClick = (event) => {
        const menuElement = document.querySelector('.side-menu-content');
        if (menuElement && !menuElement.contains(event.target)) {
          handleCloseMenu();
        }
      };

      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);

      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
        document.removeEventListener('touchstart', handleOutsideClick);
      };
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'auto';
      if (isClosing) {
        setTimeout(() => dispatch(finishClosing(false)), 3000);
      }
    }
  }, [isMenuOpen, isClosing, dispatch]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const cartElement = document.querySelector('.cart-panel-content');
      if (cartElement && !cartElement.contains(event.target)) {
        handleCloseCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
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

  const menuItems = [
    { name: "INSPIRING GREATNESS", link: "/menu1" },
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
                  <div className='badge'>{totalQuantity}</div> {/* Hiển thị số lượng giỏ hàng */}
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
                  <a href='./Menu1'>Inspiring Greatness</a>
                  <Link to="/vision">Vali</Link>
                  <Link to="/values">handbag</Link>
                  <Link to="/experience">Backpack</Link>
                  <Link to="/visionaries">Gentlemen</Link>
                  <Link to="/objects">Ladies</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`side-menu ${isMenuOpen ? 'open' : ''} ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className='side-menu-content'>
          <div className='close-button' onClick={handleCloseMenu}>
            <IconButton>
              <CloseIcon style={{ color: 'white' }} />
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
          <h2>Shopping Cart</h2>
          <div className='close-cart-button' onClick={handleCloseCart}>
            <IconButton>
              <CloseIcon />
            </IconButton>
            <span>Close</span>
          </div>
        </div>
        <div className='cart-container'>
            <div className='cart-items'>
              {cartItems.map((item) => (
                <div key={item.id} className='cart-item'>
                  <img src={item.image} alt={item.name} className='cart-item-image' />
                  <div className='cart-item-details'>
                    <span className='cart-item-name'>{item.name}</span>
                    <span className='cart-item-price'>${item.price}</span>
                    <span className='cart-item-quantity'>Qty: {item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className='total-price'>
              <span>Total:</span>
              <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
            </div>
          </div>
      </div>
    </section>
  );
};

export default MenuComponent;
