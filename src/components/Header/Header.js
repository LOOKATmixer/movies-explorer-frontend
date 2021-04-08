import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import AuthNav from '../AuthNav/AuthNav';
import MovieNav from '../MovieNav/MovieNav';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({ background }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <header className={`header header_bg-color_${background}`}>
      <Link to='/' className='header__link'>
        <img className='header__logo' src={logo} alt='Logo'></img>
      </Link>
      {!currentUser.email && <AuthNav />}
      {currentUser.email && <MovieNav />}
    </header>
  );
}

export default Header;
