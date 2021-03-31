import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../utils/FormValidation';

function Register({ handleRegister }) {
  const { values, errors, handleChange } = useFormWithValidation({});

  return (
    <section className='register'>
      <div className='register__container'>
        <Link to='/'>
          <img className='register__logo' src={logo} alt='Логотип' />
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <Form
          handleAuth={handleRegister}
          onSubmit={{
            buttonText: 'Зарегистрироваться',
            promt: 'Уже зарегистрированы?',
            route: '/signin',
            linkText: 'Войти',
          }}
        >
          <label className='form__label' htmlFor='Введите имя'>
            Имя
          </label>
          <input
            className='form__input'
            id='name'
            type='text'
            name='name'
            required
            value={values.name}
            onChange={handleChange}
            minLength={2}
            autoComplete='off'
          />
          {errors.name && (
            <span className='form__input-error'>{errors.name}</span>
          )}
        </Form>
      </div>
    </section>
  );
}

export default Register;
