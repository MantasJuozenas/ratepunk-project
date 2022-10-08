import React, { useState } from 'react';
import Icon from '../../UI/Icon';
import burger from '../../../assets/menu.svg';
import style from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import HeadingComponent, { MobileFlex } from './Navigation.styles';
import close from '../../../assets/close.svg';

function Navigation() {
  const [active, setActive] = useState('Chrome Extension');
  const [mobileMenu, setMobileMenu] = useState(false);

  function handleMenuToggle(e) {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  }

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
    <HeadingComponent isMobile={mobileMenu}>
      <MobileFlex>
        <div className={style.logo}>
          <Icon img={logo} alt='ratepunk logo' />
        </div>
        <div className={style.info}>
          {mobileMenu ? (
            <Icon onClick={(e) => handleMenuToggle(e)} img={close} alt='close image' />
          ) : (
            <Icon onClick={(e) => handleMenuToggle(e)} img={burger} alt='dropdown burger' />
          )}
        </div>
      </MobileFlex>
      <nav className={mobileMenu ? style.navLinks_mobile : style.navLinks}>
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
      </nav>
    </HeadingComponent>
  );
}

export default Navigation;
