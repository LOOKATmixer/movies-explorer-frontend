import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
  const [isLoading, setLoading] = useState(false);

  const handlePreloader = () => {
    setLoading(true);
  };

  return (
    <section className='movies'>
      <p className='movies__not-found'>Ничего не найдено</p>
      <ul className='movies__list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      {isLoading ? (
        <Preloader />
      ) : (
        <button
          className='movies__button'
          type='button'
          name='more'
          onClick={handlePreloader}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
