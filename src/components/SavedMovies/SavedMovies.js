import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  savedList,
  handleSeachMovie,
  contentLoading,
  badMovieRequest,
  emptyMoviesList,
  onMovieDelete,
  requestStatus,
}) {
  return (
    <>
      <Header background='dark' />
      <section className='saved-movies'>
        <SearchForm handleSeachMovie={handleSeachMovie} />
        {contentLoading && <Preloader />}
        <MoviesCardList
          movies={savedList}
          savedList={savedList.movieCards}
          isSaved={true}
          badMovieRequest={badMovieRequest}
          emptyMoviesList={emptyMoviesList}
          onMovieDelete={onMovieDelete}
          requestStatus={requestStatus}
        />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
