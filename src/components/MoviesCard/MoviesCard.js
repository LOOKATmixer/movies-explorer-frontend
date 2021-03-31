import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import imgCard from '../../images/movie-card-example.jpeg';
import moviesIconCard from '../../images/like-active.svg';
import moviesSavedCardIcon from '../../images/close-card.svg';
import saveCardIcon from '../../images/like.svg';

function MoviesCard({ movie, movieLike }) {
  const { pathname } = useLocation();
  const isAdded = false; // Поменять на false для проверки

  const moviesIcon = isAdded ? moviesIconCard : saveCardIcon;

  const cardIcon = pathname === '/movies' ? moviesIcon : moviesSavedCardIcon;

  const movieImage = movie.image
    ? `https://api.nomoreparties.co${movie.image.url}`
    : imgCard;

  const getTime = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч' + minutes + 'м';
  };

  return (
    <li className='card'>
      <a href={movie.trailerLink} rel='noreferrer' target='_blank'>
        <img src={movieImage} alt='постер фильма' className='card__image'></img>
      </a>
      <div className='card__container'>
        <div className='card__text'>
          <h3 className='card__title'>{movie.nameRU}</h3>
          <p className='card__duration'>{getTime(movie.duration)}</p>
        </div>
        <button type='button' aria-label='card-like' className='card__like'>
          <img className='card__icon' src={cardIcon} alt='like' />
        </button>
      </div>
    </li>
  );
}

export default MoviesCard;
