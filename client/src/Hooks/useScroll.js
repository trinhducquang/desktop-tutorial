import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollY, closeMenu, setCurrentPage } from '../Store/menuSlice';
import { useLocation } from 'react-router-dom';

const useScroll = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  useEffect(() => {
    dispatch(setCurrentPage(location.pathname));

    const handleScroll = () => {
      dispatch(setScrollY(window.scrollY));

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, location.pathname]);

  return null;
};

export default useScroll;
