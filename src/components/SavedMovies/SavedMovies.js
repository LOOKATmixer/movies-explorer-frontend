import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SavedMovies = () => {
  return (
    <>
      <Header loggedIn={true} background='dark' />
      <section className='saved-movies'>
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
