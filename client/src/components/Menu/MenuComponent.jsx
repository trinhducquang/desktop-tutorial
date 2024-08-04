import React from 'react';
import { useLocation } from 'react-router-dom';
import useMenu from '../../Hooks/useMenu';
import Navbar from './Navbar';
import Menu from './Menu';
import CartMenu from './CartMenu';
import './Menu.scss';

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

  // Xác định xem lớp phủ có nên hiển thị không
  const shouldShowOverlay = isMenuOpen || isCartOpen;

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
        isCartOpen={isCartOpen}
        handleCloseCart={handleCloseCart}
      />
      <CartMenu
        isCartOpen={isCartOpen}
        handleCloseCart={handleCloseCart}
      />
      {shouldShowOverlay && (
        <div
          className={`overlay ${shouldShowOverlay ? 'open' : ''}`}
          onClick={isMenuOpen ? handleCloseMenu : handleCloseCart}
        ></div>
      )}
    </section>
  );
};

export default MenuComponent;
