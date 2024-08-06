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

  const shouldShowOverlay = isMenuOpen || isCartOpen;

  // Thêm điều kiện cho các trang khác nhau
  const sectionClass = location.pathname === '/Booking' ? 'booking-page' : 
                       location.pathname === '/User' ? 'user-page' : '';

  const navBarClass = location.pathname === '/Muse' ? 'muse-page' : 
                      location.pathname === '/User' ? 'user-page' : '';

  return (
    <section className={sectionClass}>
      <Navbar
        location={location}
        isMenuOpen={isMenuOpen}
        handleMenuClick={handleMenuClick}
        handleCartClick={handleCartClick}
        isNavMenuVisible={isNavMenuVisible}
        totalQuantity={totalQuantity}
        navBarClass={navBarClass}  
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
