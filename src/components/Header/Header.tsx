import * as React from 'react';
import logo from '../../assets/images/aalto-logo.png';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style['header']}>
      <div className={style['logo-container']}>
        <img src={logo} alt="Logo" className={style['logo']}/>
      </div>
    </header>
  )
};

export default Header;