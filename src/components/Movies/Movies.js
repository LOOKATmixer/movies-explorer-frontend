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
  isLiked,
  onMovieLike,
  savedList,
  onMovieDelete,
  requestStatus,
}) {
  return (
    <>
      <Header background='dark' />
      <SearchForm handleSeachMovie={handleSeachMovie} link='movies' />
      {contentLoading && <Preloader />}
      <MoviesCardList
        movies={movies}
        badMovieRequest={badMovieRequest}
        emptyMoviesList={emptyMoviesList}
        showMore={showMore}
        isLiked={isLiked}
        onMovieLike={onMovieLike}
        savedList={savedList}
        onMovieDelete={onMovieDelete}
        requestStatus={requestStatus}
      />
      <Footer />
    </>
  );
}

export default Movies;
