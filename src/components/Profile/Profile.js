import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/FormValidation';
import cn from 'classnames';


function Profile({ signOut, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email,
    });
  }

  return (
    <>
      <Header loggedIn={true} background='dark' />
      <section className='profile'>
        <div className='profile__container'>
          <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
          <form onSubmit={handleSubmit} className='profile__form'>
            <label className='profile__label' htmlFor='name'>
              Имя
              <input
                className='profile__input'
                id='name'
                name='name'
                type='text'
                placeholder='Ваше имя'
                minLength='2'
                maxLength='30'
                autoComplete='off'
                onChange={handleChange}
                defaultValue={currentUser.name}
                error={errors.name}
              />
              
            </label>
            {errors.name && <span className="profile__error">{errors.name}</span>}
            <label className='profile__label' htmlFor='email'>
              Почта
              <input
                className='profile__input'
                id='email'
                name='email'
                type='email'
                placeholder='Ваша почта'
                required
                autoComplete='off'
                onChange={handleChange}
                defaultValue={currentUser.email}
                error={errors.email}
              />
              
            </label>
            {errors.email && <span className="profile__error">{errors.email}</span>}
            <button className={cn("profile__button", {"profile__button_active" : isValid})} disabled={!isValid} type='submit'>
              Редактировать
            </button>
            <Link to="/"
              className='profile__logout'
              onClick={signOut}
            >
              Выйти из аккаунта
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
