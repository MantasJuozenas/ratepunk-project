import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import burger from '../../assets/menu.svg';
import ContainerWrapper from '../UI/ContainerWrapper';
import Icon from '../UI/Icon';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <ContainerWrapper>
        <div className={style.headerFlex}>
          <div className={style.logo}>
            <Icon img={logo} alt='ratepunk logo' />
          </div>
          <nav>
            <div className={style.info}>
              <Icon img={burger} alt='dropdown burger' />
            </div>
            <div className={style.navLinks}>
              <Link className={`${style.navLink} font`} to='/'>
                Chrome Extension
              </Link>
              <Link className={`${style.navLink} font`} to='/'>
                Price Comparison
              </Link>
              <Link className={`${style.navLink} font`} to='/'>
                Blog
              </Link>
            </div>
          </nav>
        </div>
      </ContainerWrapper>
    </header>
  );
}

export default Header;
