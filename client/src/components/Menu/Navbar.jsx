import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Shopcart from '/public/icon/shopping-bag.png';
import market from '/public/icon/market.png';
import './Navbar.scss';

const Navbar = ({
  isMenuOpen,
  handleMenuClick,
  handleCartClick,
  isNavMenuVisible,
  totalQuantity,
  navBarClass,
  id
}) => {
  const currentLocation = useLocation();

  const pathsWithMenu = [
    '/Inspiring-Greatness',
    '/Vali',
    '/Handbag',
    '/Backpack',
    '/Gentlemen',
    '/Ladies',
    '/Library'
  ];

  return (
    <div className={`Navbar-container ${navBarClass}`}>
      <div className='container-item'>
        <div className='top-row'>
          <div className={`menu-button ${isMenuOpen ? 'hidden' : ''}`} onClick={handleMenuClick}>
            <MenuIcon />
            <span>MENU</span>
          </div>
          <div>
            <Link to='/'><h1>RIMOWA</h1></Link>
          </div>
          <div className='find-dealer'>
            <div className='shopping-cart-container' onClick={handleCartClick}>
              <img
                src={currentLocation.pathname.startsWith(`/Booking/${id}`) ||
                     ['/Muse', '/Login', '/User', '/Register'].includes(currentLocation.pathname)
                     ? market
                     : Shopcart}
                alt="Shopping Cart"
              />
              <div className='badge'>{totalQuantity}</div>
            </div>
          </div>
        </div>
        {isNavMenuVisible && pathsWithMenu.includes(currentLocation.pathname) && (
          <div className='Navbar-container-menu1'>
            <div className='additional-items'>
              <a href='./Inspiring-Greatness'>Inspiring Greatness</a>
              <Link to="/Vali">Vali</Link>
              <Link to="/Handbag">Handbag</Link>
              <Link to="/Backpack">Backpack</Link>
              <Link to="/Gentlemen">Gentlemen</Link>
              <Link to="/Ladies">Ladies</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
