import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg';

function Login({ handleLogin }) {
  return (
    <section className='login'>
      <div className='login__container'>
        <Link to='/'>
          <img className='login__logo' src={logo} alt='Логотип' />
        </Link>
        <h2 className='login__title'>Рады видеть!</h2>
        <Form
          link='signin'
          handleAuth={handleLogin}
          onSubmit={{
            buttonText: 'Войти',
            promt: 'Ещё не зарегистрированы?',
            route: '/signup',
            linkText: 'Регистрация',
          }}
        />
      </div>
    </section>
  );
}

export default Login;
