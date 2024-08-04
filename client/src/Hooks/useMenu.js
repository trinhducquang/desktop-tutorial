import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openMenu, closeMenu, setScrollY, finishClosing, setCurrentPage } from '../Store/menuSlice';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const useMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const isClosing = useSelector((state) => state.menu.isClosing);
  const currentPage = useSelector((state) => state.menu.currentPage);
  const scrollY = useSelector((state) => state.menu.scrollY);
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [isNavMenuVisible, setIsNavMenuVisible] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    dispatch(setCurrentPage(location.pathname));

    const handleScroll = () => {
      dispatch(setScrollY(window.scrollY));

      setIsNavMenuVisible(window.scrollY <= 50);

      const navbar = document.querySelector('.Navbar-container');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      if (location.pathname === '/Inspiring-Greatness' && window.scrollY > 100) {
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
      if (isMenuOpen && !document.querySelector('.side-menu-content')?.contains(event.target)) {
        handleCloseMenu();
      }

      if (isCartOpen && !document.querySelector('.cart-panel')?.contains(event.target)) {
        handleCloseCart();
      }
    };

    if (isMenuOpen || isCartOpen) {
      document.body.classList.toggle('menu-open', isMenuOpen);
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
      dispatch(finishClosing(false));
      document.addEventListener('mousedown', handleOutsideClick);
    } else if (isClosing) {
      setTimeout(() => dispatch(finishClosing(false)), 3000);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen, isCartOpen, isClosing, dispatch]);

  const handleMenuClick = () => dispatch(openMenu());
  const handleCloseMenu = () => dispatch(closeMenu());
  const handleCartClick = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/payment');
      if (res?.data) {
        const link = res.data.links[1].href;
        window.location.href = link;
      }
    } catch (error) {
      console.error('Error during payment submission:', error);
    }
  };

  const menuItems = [
    { name: "INSPIRING GREATNESS", link: "/Inspiring-Greatness" },
    { name: "MODELS", link: "/models" },
    { name: "BESPOKE", link: "/bespoke" },
    { name: "OWNERSHIP", link: "/ownership" },
    { name: "PROVENANCE", link: "/provenance" },
    { name: "BOUTIQUE", link: "/boutique" },
    { name: "LIBRARY", link: "/Library" },
  ];

  return {
    isMenuOpen,
    isClosing,
    currentPage,
    isNavMenuVisible,
    isCartOpen,
    cartItems,
    totalQuantity,
    handleMenuClick,
    handleCloseMenu,
    handleCartClick,
    handleCloseCart,
    handleSubmit,
    menuItems
  };
};

export default useMenu;
