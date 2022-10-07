import React from 'react';
import logo from '../../assets/logo.svg';
import burger from '../../assets/menu.svg';
import Icon from '../UI/Icon';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Icon img={logo} alt='ratepunk logo' />
      </div>
      <nav>
        <div className={style.info}>
          <Icon img={burger} alt='dropdown burger' />
        </div>
      </nav>
    </header>
  );
}

export default Header;
