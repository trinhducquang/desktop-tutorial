import React from 'react';
import { useLocation } from 'react-router-dom';
import useMenu from '../../Hooks/useMenu';
import Navbar from './Navbar';
import Menu from './Menu';
import CartPanel from './CartPanel';
import './Menu.scss';

const MenuComponent = () => {
  const location = useLocation();
  const {
    isMenuOpen,
    isClosing,
    isNavMenuVisible,
    isCartOpen,
    scrollY,
    totalQuantity,
    cartItems,
    menuItems,
    handleMenuClick,
    handleCloseMenu,
    handleCartClick,
    handleCloseCart,
    handleSubmit,
  } = useMenu(location);

  return (
    <section className={location.pathname === '/Booking' ? 'booking-page' : ''}>
      <Navbar
        location={location}
        isMenuOpen={isMenuOpen}
        handleMenuClick={handleMenuClick}
        handleCartClick={handleCartClick}
        isNavMenuVisible={isNavMenuVisible}
        totalQuantity={totalQuantity}
      />
      <Menu
        isMenuOpen={isMenuOpen}
        isClosing={isClosing}
        scrollY={scrollY}
        handleCloseMenu={handleCloseMenu}
        menuItems={menuItems}
      />
      <CartPanel
        isCartOpen={isCartOpen}
        handleCloseCart={handleCloseCart}
        cartItems={cartItems}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default MenuComponent;
