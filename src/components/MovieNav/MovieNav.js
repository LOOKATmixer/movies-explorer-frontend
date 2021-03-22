import { React, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MovieNav.css';

function MovieNav() {
  const [showItems, setShowItems] = useState(false);

  const toggleSidebar = () => setShowItems(!showItems);

  return (
    <nav className='nav'>
      <button
        className='nav__menu-button'
        type='button'
        onClick={toggleSidebar}
      ></button>
      <div
        className={`nav__container ${
          showItems ? 'nav__container_visible' : ''
        }`}
      >
        <div
          className={`nav__sidebar ${showItems ? 'nav__sidebar_visible' : ''}`}
        >
          <div className='nav__list-container'>
            <button
              className='nav__button-close'
              type='button'
              onClick={toggleSidebar}
            ></button>
            <ul className='nav__list'>
              <li className='nav__list-item nav__list-item_type_main'>
                <Link to='/' className='nav__link nav__link_type_burger'>
                  Главная
                </Link>
              </li>
              <li className='nav__list-item'>
                <NavLink
                  to='/movies'
                  className='nav__link nav__link_type_burger'
                >
                  Фильмы
                </NavLink>
              </li>
              <li className='nav__list-item'>
                <NavLink
                  to='/saved-movies'
                  className='nav__link nav__link_type_burger'
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to='/profile'
            className='nav__link nav__link_type_profile'
          ></NavLink>
        </div>
      </div>
    </nav>
  );
}

export default MovieNav;
