import React from 'react';
import './MoviesCard.css';
import imgCard from '../../images/movie-card-example.jpeg';

function MoviesCard() {
  return (
    <li className='card'>
      <img src={imgCard} alt='постер фильма' className='card__image'></img>
      <div className='card__container'>
        <div className='card__text'>
          <h3 className='card__title'>33 слова о дизайне</h3>
          <p className='card__duration'>1ч 47м</p>
        </div>
        <button
          type='button'
          aria-label='card-like'
          className='card__like card__like-active'
        >
        </button>
      </div>
    </li>
  );
}

export default MoviesCard;
