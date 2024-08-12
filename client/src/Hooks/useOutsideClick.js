import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, closeCart, finishClosing } from '../Store/menuSlice';

const useOutsideClick = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const isCartOpen = useSelector((state) => state.menu.isCartOpen);
  const isClosing = useSelector((state) => state.menu.isClosing);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const cartPanel = document.querySelector('.cart-panel');
      const menuPanel = document.querySelector('.side-menu-content');

      if (isCartOpen && cartPanel && !cartPanel.contains(event.target)) {
        dispatch(closeCart());
      }

      if (isMenuOpen && menuPanel && !menuPanel.contains(event.target)) {
        dispatch(closeMenu());
      }
    };

    if (isCartOpen || isMenuOpen) {
      document.body.classList.toggle('menu-open', isMenuOpen);
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
      document.addEventListener('mousedown', handleOutsideClick);
    } else if (isClosing) {
      setTimeout(() => dispatch(finishClosing(false)), 3000);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMenuOpen, isCartOpen, isClosing, dispatch]);

  return null;
};

export default useOutsideClick;
