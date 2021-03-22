import React from 'react';
import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="error">
      <div className="error__container">
        <h1 className="error__title">404</h1>
        <p className="error__subtitle">Страница не найдена</p>
      </div>
      <Link to="/" className="error__link">
        Назад
      </Link>
    </div>
  );
};

export default PageNotFound;