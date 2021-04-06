import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import { useFormWithValidation } from '../../utils/FormValidation';
import cn from 'classnames';

function Form({ onSubmit, handleAuth, link }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    handleAuth(values);
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      {link === 'signup' && (
        <>
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
        </>
      )}
      <label className='form__label' htmlFor='Введите почту'>
        E-mail
      </label>
      <input
        className='form__input'
        id='email'
        type='email'
        name='email'
        required
        value={values.email}
        onChange={handleChange}
        autoComplete='off'
      />
      {errors.email && (
        <span className='form__input-error'>{errors.email}</span>
      )}

      <label className='form__label' htmlFor='Введите пароль'>
        Пароль
      </label>
      <input
        className='form__input'
        id='password'
        type='password'
        name='password'
        required
        minLength='6'
        value={values.password}
        onChange={handleChange}
        autoComplete='off'
      />
      {errors.password && (
        <span className='form__input-error'>{errors.password}</span>
      )}

      <button
        className={cn('form__button', { form__button_active: isValid })}
        type='submit'
        disabled={!isValid}
      >
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
