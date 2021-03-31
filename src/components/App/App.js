import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import { getMovies } from '../../utils/MoviesApi';
import { mainApi, getErrors } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

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
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState('');
  const [badRequest, setBadRequest] = useState(false);

  const [moviesList, setMoviesList] = useState([]);
  const [filteredMoviesList, setFilteredMoviesList] = useState({
    movieCards: [],
    showItems: 12,
    addItems: 3,
  });
  const [contentLoading, setContentLoading] = useState(false);
  const [badMovieRequest, setBadMovieRequest] = useState(false);
  const [emptyMoviesList, setEmptyMoviesList] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push('/movies');
          }
        })
        .catch((err) => {
          console.log(getErrors(err));
        });
    } else {
      localStorage.removeItem('token');
    }
  }, [history]);

  const handleRegister = ({ name, email, password }) => {
    mainApi
      .register(name, email, password)
      .then((res) => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        setBadRequest(true);
      });
  };

  const handleLogin = ({ email, password }) => {
    mainApi
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateUser = ({ name, email }) => {
    mainApi
      .changeUserInfo({ name, email })
      .then((result) => {
        setCurrentUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function onSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/');
  }

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
          setBadMovieRequest(true);
        });
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
    setFilteredMoviesList({ ...filteredMoviesList, movieCards: [] });
    setBadMovieRequest(false);
    setEmptyMoviesList(false);

    setContentLoading(true);
    const newList = moviesList.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchString.toLowerCase())
    );

    if (newList.length === 0) {
      setEmptyMoviesList(true);
    } else {
      setFilteredMoviesList({ ...filteredMoviesList, movieCards: newList });
    }

    setContentLoading(false);
  };

  const showMore = (itemsList) => {
    setFilteredMoviesList({ ...filteredMoviesList, showItems: itemsList });
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
          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            component={Movies}
            handleSeachMovie={handleSeachMovie}
            movies={filteredMoviesList}
            contentLoading={contentLoading}
            showMore={showMore}
            badMovieRequest={badMovieRequest}
            emptyMoviesList={emptyMoviesList}
          />
          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
          />
          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
            onSignOut={onSignOut}
            component={Profile}
          />
          <Route path='/signup'>
            <Register handleRegister={handleRegister} badRequest={badRequest} />
          </Route>
          <Route path='/signin'>
            <Login handleLogin={handleLogin} />
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
