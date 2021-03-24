import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className='register'>
      <div className='register__container'>
        <Link to='/'>
          <img className='register__logo' src={logo} alt='Логотип' />
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <Form
          onSubmit={{
            buttonText: 'Зарегистрироваться',
            promt: 'Уже зарегистрированы?',
            route: '/signin',
            linkText: 'Войти',
          }}>
            <label className='form__label' htmlFor='Введите имя'>
        Имя
      </label>
      <input className='form__input' id='name' type='text' required />
      <span className='form__input-error'>Что-то пошло не так...</span>
            </Form>
      </div>
    </section>
  );
}

export default Register;
