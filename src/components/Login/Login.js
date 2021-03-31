import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg';
import useFormWithValidation from '../../utils/FormValidation';

function Login({ handleLogin }) {
  return (
    <section className='login'>
      <div className='login__container'>
        <Link to='/'>
          <img className='login__logo' src={logo} alt='Логотип' />
        </Link>
        <h2 className='login__title'>Рады Видеть!</h2>
        <Form
          handleAuth={handleLogin}
          onSubmit={{
            buttonText: 'Войти',
            promt: 'Ещё не зарегистрированы?',
            route: '/signup',
            linkText: 'Регистрация',
          }}
        ></Form>
      </div>
    </section>
  );
}

export default Login;
