import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import cn from 'classnames';

function MoviesCardList({
  movies,
  showMore,
  badMovieRequest,
  emptyMoviesList,
  movieLike,
}) {
  const { movieCards, showItems, addItems } = movies;

  const showMoreMovies = () => {
    showMore(showItems + addItems);
  };

  return (
    <section className='movies'>
      {badMovieRequest && (
        <p className='movies__not-found'>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      )}
      {emptyMoviesList && (
        <p className='movies__not-found'>Ничего не найдено</p>
      )}
      <ul className='movies__list'>
        {movieCards.map((movie, idx) => {
          if (idx < showItems) {
            return (
              <MoviesCard key={movie.id} movie={movie} movieLike={movieLike} />
            );
          }
          return null;
        })}
      </ul>
      <button
        onClick={showMoreMovies}
        className={cn('movies__button', {
          'movies__button_is-active': movieCards.length > showItems,
        })}
        type='submit'
        name='more'
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
