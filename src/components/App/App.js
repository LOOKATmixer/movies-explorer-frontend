import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import { getMovies } from '../../utils/MoviesApi';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [moviesList, setMoviesList] = useState([]);
  const [filteredMoviesList, setFilteredMoviesList] = useState({
    movieCards:[],
    showItems: 12,
    addItems:3,
  });
  const [contentLoading, setContentLoading] = useState(false);
  const [badMovieRequest, setbadMovieRequest] = useState(false);
  const [emptyMoviesList, setEmptyMoviesList] = useState(false);

  useEffect(() => {
    const moviesData = JSON.parse(localStorage.getItem('moviesData'));
    if (moviesData) {
      setMoviesList(moviesData);
    } else {
      getMovies()
      .then((res) => {
        localStorage.setItem('moviesData', JSON.stringify(res));
        setMoviesList(res);
      })
      .catch((err) => {
        setbadMovieRequest(true);
      })
    }
  }, []);

  useEffect(() => {
    const updateWindowWidth = () => {
      setTimeout(() => {
        if (window.innerWidth < 1280 && window.innerWidth > 480) {
          setFilteredMoviesList({
            ...filteredMoviesList,
            showItems: 8,
            addItems: 2,
          });
        } else if (window.innerWidth <= 480) {
          setFilteredMoviesList({
            ...filteredMoviesList,
            showItems: 5,
            addItems: 1,
          });
        }
      }, 1000);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [filteredMoviesList]);

  const handleSeachMovie = (searchString) => {
    setFilteredMoviesList({...filteredMoviesList, movieCards:[]});
    setbadMovieRequest(false);
    setEmptyMoviesList(false);

    setContentLoading(true);
    const newList = moviesList
      .filter((movie) => movie.nameRU.toLowerCase().includes(searchString.toLowerCase()));

    if (newList.length === 0) {
      setEmptyMoviesList(true);
    } else {
      setFilteredMoviesList({...filteredMoviesList, movieCards:newList});
    }

    setContentLoading(false)
  }

  const showMore = (itemsList) => {
    setFilteredMoviesList({...filteredMoviesList, showItems:itemsList});
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route path='/' exact>
            <Header background='color' loggedIn={false} />
            <Main />
            <Footer />
          </Route>
          <Route path='/movies' exact>
            <Header background='dark' loggedIn={true} />
            <Movies
              handleSeachMovie={handleSeachMovie}
              movies={filteredMoviesList}
              contentLoading={contentLoading}
              showMore={showMore}
              badMovieRequest={badMovieRequest}
              emptyMoviesList={emptyMoviesList} 
            />
            <Footer />
            {/* ЗАЩИТА РОУТОВ НА ЛОГИН {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}*/}
          </Route>
          <Route path='/saved-movies' exact>
            <Header background='dark' loggedIn={true} />
            <SavedMovies />
            <Footer />
            {/* ЗАЩИТА РОУТОВ НА ЛОГИН {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}*/}
          </Route>
          <Route path='/profile'>
            <Header background='dark' loggedIn={true} />
            <Profile />
            {/* ЗАЩИТА РОУТОВ НА ЛОГИН {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}*/}
          </Route>
          <Route path='/signup'>
            <Register />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
