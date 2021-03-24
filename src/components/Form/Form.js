import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

function Form({ onSubmit, children }) {
  return (
    <form className='form' onSubmit={onSubmit}>
      {children}
      <label className='form__label' htmlFor='Введите почту'>
        E-mail
      </label>
      <input className='form__input' id='email' type='email' required />
      <span className='form__input-error'>Что-то пошло не так...</span>

      <label className='form__label' htmlFor='Введите пароль'>
        Пароль
      </label>
      <input className='form__input' id='password' type='password' required />
      <span className='form__input-error'>Что-то пошло не так...</span>

      <button className='form__button' type='submit'>
        {onSubmit.buttonText}
      </button>
      <p className='form__promt'>
        {`${onSubmit.promt} `}
        <Link className='form__link' to={onSubmit.route}>
          {onSubmit.linkText}
        </Link>
      </p>
    </form>
  );
}

export default Form;
