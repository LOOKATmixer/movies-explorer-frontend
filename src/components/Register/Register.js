import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg';

function Register({ handleRegister }) {

  return (
    <section className='register'>
      <div className='register__container'>
        <Link to='/'>
          <img className='register__logo' src={logo} alt='Логотип' />
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <Form
          link='signup'
          handleAuth={handleRegister}
          onSubmit={{
            buttonText: 'Зарегистрироваться',
            promt: 'Уже зарегистрированы?',
            route: '/signin',
            linkText: 'Войти',
          }}
        />
      </div>
    </section>
  );
}

export default Register;
