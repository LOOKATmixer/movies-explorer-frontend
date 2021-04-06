import { useState, useEffect } from 'react';
import './MoviesCard.css';
import imgCard from '../../images/movie-card-not-found.jpeg';
import cn from 'classnames';

function MoviesCard({ movie, onMovieLike, savedList, onMovieDelete, isSaved }) {
  const [isLiked, setIsLiked] = useState(false);

  const movieImage = (movie) => {
    if (movie.image) {
      if (movie.image.url) {
        return `https://api.nomoreparties.co${movie.image.url}`;
      } else if (movie.image) {
        return movie.image;
      }
    }
    return imgCard;
  };

  const getTime = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч' + minutes + 'м';
  };

  useEffect(() => {
    setIsLiked(Object.values(savedList).some((i) => i.movieId === movie.id));
  }, [movie.id, savedList]);

  const handleLikeClick = () => {
    if (isLiked) {
      onMovieDelete(Object.entries(savedList).find((i) => i.movieId === movie.id));
    } else if (isSaved) {
      onMovieDelete(movie);
    } else {
      onMovieLike(movie);
    }
    setIsLiked(Object.values(savedList).some((i) => i.movieId === movie.id));
  };

  return (
    <>
      <li className='card'>
        <a href={movie.trailerLink} rel='noreferrer' target='_blank'>
          <img
            src={movieImage(movie)}
            alt='постер фильма'
            className='card__image'
          ></img>
        </a>
        <div className='card__container'>
          <div className='card__text'>
            <h3 className='card__title'>{movie.nameRU}</h3>
            <p className='card__duration'>{getTime(movie.duration)}</p>
          </div>
          <button
            className={cn(
              'card__like',
              { 'card__like-active': isLiked },
              { 'card__like-delete': isSaved }
            )}
            aria-label='like'
            type='button'
            onClick={handleLikeClick}
          ></button>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
