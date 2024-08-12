import React from 'react';
import { useLocation } from 'react-router-dom';
import useMenu from '../../Hooks/useMenu';
import Navbar from './Navbar';
import Menu from './Menu';
import CartMenu from './CartMenu';
import './Menu.scss';
import Booking from '../../Pages/Booking/Booking';

const MenuComponent = () => {
  const location = useLocation();
  const {
    isMenuOpen,
    isClosing,
    isNavMenuVisible,
    scrollY,
    totalQuantity,
    menuItems,
    handleMenuClick,
    handleCloseMenu,
    handleCartClick,
    handleCloseCart,
    isCartOpen
  } = useMenu(location);

  const shouldShowOverlay = isMenuOpen || isCartOpen;

  const pathSegments = location.pathname.split('/');
  const id = pathSegments[pathSegments.length - 1];

  const sectionClass = location.pathname.startsWith(`/Booking/${id}`) ? 'booking-page' :
    location.pathname === '/User' ? 'user-page' :
      location.pathname === '/Login' ? 'login-page' :
        location.pathname === '/Resgiter' ? 'resgiter-page' : '';


  const navBarClass = location.pathname === '/Muse' ? 'booking-page' :
    location.pathname === '/User' ? 'user-page' : '';

  return (
    <section className={`${sectionClass} ${shouldShowOverlay ? 'darken' : ''}`}>
      <Navbar
        location={location}
        isMenuOpen={isMenuOpen}
        handleMenuClick={handleMenuClick}
        handleCartClick={handleCartClick}
        isNavMenuVisible={isNavMenuVisible}
        totalQuantity={totalQuantity}
        navBarClass={navBarClass}
        id={id}
      />
      <Menu
        isMenuOpen={isMenuOpen}
        isClosing={isClosing}
        scrollY={scrollY}
        handleCloseMenu={handleCloseMenu}
        menuItems={menuItems}
        isCartOpen={isCartOpen}
        handleCloseCart={handleCloseCart}
      />
      <CartMenu
        isCartOpen={isCartOpen}
        handleCloseCart={handleCloseCart}
      />
       
    </section>
  );
};

export default MenuComponent;
