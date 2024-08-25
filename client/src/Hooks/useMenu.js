import { useDispatch, useSelector } from 'react-redux';
import { openMenu, closeMenu, openCart, closeCart } from '../Store/menuSlice';
import useScroll from './useScroll';
import useOutsideClick from './useOutsideClick';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const useMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const isCartOpen = useSelector((state) => state.menu.isCartOpen);
  const isClosing = useSelector((state) => state.menu.isClosing);
  const location = useLocation();
  const scrollY = useSelector((state) => state.menu.scrollY);

  useScroll();
  useOutsideClick(); 

  const handleMenuClick = () => dispatch(openMenu());
  const handleCloseMenu = () => dispatch(closeMenu());
  const handleCartClick = () => dispatch(openCart());
  const handleCloseCart = () => dispatch(closeCart());

  const isLoggedIn = !!Cookies.get('userId'); 

  const menuItems = [
    { name: "TRAVEL COMPANIONS COLLECTION", link: "/Library" },
    { name: "MUSE ARTS PROGRAMME", link: "/Muse" },
    { name: "INSPIRING GREATNESS", link: "/Inspiring-Greatness" },
    { name: "OBJECTS OF LUXURY", link: "/Luxury" },
    { name: "PROVENANCE", link: "/pre-owned" },
    { name: "OWNERSHIP", link: "/ownership" },
    // { name: "LIBRARY", link: "/Library" },
    { name: isLoggedIn ? "LOGOUT" : "LOGIN", link: isLoggedIn ? "#" : "/Login" },
  ];

  const isNavMenuVisible = scrollY <= 50;

  return {
    isMenuOpen,
    isClosing,
    currentPage: location.pathname,
    isNavMenuVisible,
    isCartOpen,
    handleMenuClick,
    handleCloseMenu,
    handleCartClick,
    handleCloseCart,
    menuItems,
  };
};

export default useMenu;
