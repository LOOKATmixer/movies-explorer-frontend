import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import AuthNav from '../AuthNav/AuthNav';
import MovieNav from '../MovieNav/MovieNav';

function Header({ loggedIn, background }) {
  return (
    <header className={`header header_bg-color_${background}`}>
      <Link to='/' className='header__link'>
        <img className='header__logo' src={logo} alt='Logo'></img>
      </Link>
      {!loggedIn && <AuthNav />}
      {loggedIn && <MovieNav />}
    </header>
  );
}

export default Header;
