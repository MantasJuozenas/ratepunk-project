import React from 'react';
import logo from '../../assets/logo.svg';
import burger from '../../assets/menu.svg';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt='ratepunk logo' />
      </div>
      <div className={style.info}>
        <img src={burger} alt='dropdown burger' />
      </div>
    </header>
  );
}

export default Header;
