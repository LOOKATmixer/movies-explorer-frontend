import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  handleSeachMovie,
  movies,
  contentLoading,
  showMore,
  badMovieRequest,
  emptyMoviesList,
}) {
  return (
    <>
      <SearchForm handleSeachMovie={handleSeachMovie} />
      {contentLoading && <Preloader />}
      <MoviesCardList
        movies={movies}
        badMovieRequest={badMovieRequest}
        emptyMoviesList={emptyMoviesList}
        showMore={showMore}
      />
    </>
  );
}

export default Movies;
