import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Menu = ({
  isMenuOpen,
  isClosing,
  scrollY,
  handleCloseMenu,
  menuItems,
}) => {
  return (
    <div className={`side-menu ${isMenuOpen ? 'open' : ''} ${scrollY > 50 ? 'scrolled' : ''}`}>
      <div className='side-menu-content'>
        <div className='close-button' onClick={handleCloseMenu}>
          <IconButton className='fix'>
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
  );
};

export default Menu;
