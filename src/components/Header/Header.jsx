import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import burger from '../../assets/menu.svg';
import ContainerWrapper from '../UI/ContainerWrapper';
import Icon from '../UI/Icon';
import style from './Header.module.scss';
import Navigation from './Navigation/Navigation';

function Header() {
  const [active, setActive] = useState('Chrome Extension');

  function isActive(e) {
    switch (e.target.textContent) {
      case 'Chrome Extension':
        setActive('Chrome Extension');
        break;
      case 'Price Comparison':
        setActive('Price Comparison');
        break;
      case 'Blog':
        setActive('Blog');
        break;
      default:
        break;
    }
  }

  return (
    <header className={style.header}>
      <ContainerWrapper>
        {/* <div className={style.headerFlex}>
          <div className={style.logo}>
            <Icon img={logo} alt='ratepunk logo' />
          </div> */}
        {/* <nav>
            <div className={style.info}>
              <Icon onClick={handleBurger} img={burger} alt='dropdown burger' />
            </div>
            {
              <div className={style.navLinks}>
                <Link
                  onClick={(e) => isActive(e)}
                  className={active === 'Chrome Extension' ? `${style.navLink_active} font` : `${style.navLink} font`}
                  to='/'
                >
                  Chrome Extension
                </Link>
                <Link
                  onClick={(e) => isActive(e)}
                  className={active === 'Price Comparison' ? `${style.navLink_active} font` : `${style.navLink} font`}
                  to='/'
                >
                  Price Comparison
                </Link>
                <Link
                  onClick={(e) => isActive(e)}
                  className={active === 'Blog' ? `${style.navLink_active} font` : `${style.navLink} font`}
                  to='/'
                >
                  Blog
                </Link>
              </div>
            }
          </nav> */}
        <Navigation />
        {/* </div> */}
      </ContainerWrapper>
    </header>
  );
}

export default Header;
