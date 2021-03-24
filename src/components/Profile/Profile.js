import React from 'react';
import './Profile.css';

function Profile({ name }) {
  return (
    <section className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, {name}!</h2>
        <form className='profile__form'>
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
            />
          </label>
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
            />
          </label>
          <button className='profile__button' type='submit'>
            Редактировать
          </button>
          <button
            className='profile__button profile__button-logout'
            type='button'
          >
            Выйти из аккаунта
          </button>
        </form>
      </div>
    </section>
  );
}

export default Profile;
