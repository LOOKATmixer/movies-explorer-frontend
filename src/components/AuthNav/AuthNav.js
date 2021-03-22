import React from 'react';
import { Link } from "react-router-dom";
import "./AuthNav.css";

function AuthNav() {
  return (
    <nav className="auth">
      <ul className="auth__list">
        <li className="auth__list-item">
          <Link to="/signup" className="auth__link auth__link_type_signup">
            Регистрация
          </Link>
        </li>
        <li className="auth__list-item">
          <Link to="/signin" className="auth__link auth__link_type_signin">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;