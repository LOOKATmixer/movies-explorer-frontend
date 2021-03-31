import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
      <Header loggedIn={true} background='dark' />
      <SearchForm handleSeachMovie={handleSeachMovie} />
      {contentLoading && <Preloader />}
      <MoviesCardList
        movies={movies}
        badMovieRequest={badMovieRequest}
        emptyMoviesList={emptyMoviesList}
        showMore={showMore}
      />
      <Footer />
    </>
  );
}

export default Movies;
