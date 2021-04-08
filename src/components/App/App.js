import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import { getMovies } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
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
import InfoToolTip from '../InfoToolTip/infoToolTip';

const ListTypes = {
  Filtered: 'Filtered',
  Saved: 'Saved',
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [requestStatus, setRequestStatus] = useState({
    error: false,
    message: '',
  });

  const tokenJwt = localStorage.getItem('jwt');
  const [token, setToken] = useState(tokenJwt) || '';
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  const [moviesList, setMoviesList] = useState([]);
  const [moviesSavedList, setMoviesSavedList] = useState([]);
  const [filteredMoviesList, setFilteredMoviesList] = useState({
    movieCards: [],
    showItems: 12,
    addItems: 3,
  });
  const [savedList, setSavedList] = useState({ movieCards: [], showItems: 0 });
  const [newMovie, setNewMovie] = useState([]);
  const [contentLoading, setContentLoading] = useState(false);
  const [badMovieRequest, setBadMovieRequest] = useState(false);
  const [emptyMoviesList, setEmptyMoviesList] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .checkToken(token)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token, loggedIn]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push(path);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      localStorage.removeItem('token');
    }
  }, [history]);

  const handleRegister = ({ name, email, password }) => {
    mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        if (err.message === 'Ошибка: 409') {
          setRequestStatus({
            ...requestStatus,
            error: true,
            message: 'Что-то пошло не так! Попробуйте еще раз.',
          });
        } else {
          setRequestStatus({
            ...requestStatus,
            error: true,
            message: 'Некорректно заполнено одно из полей.',
          });
        }
      });
  };

  const handleLogin = ({ email, password }) => {
    mainApi
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setToken(res.token);
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        if (err.message === 'Ошибка: 401') {
          setRequestStatus({
            ...requestStatus,
            error: true,
            message: 'Ошибка авторизации. Проверьте введенные данные!',
          });
        } else {
          setRequestStatus({
            ...requestStatus,
            error: true,
            message: 'Что-то пошло не так! Попробуйте еще раз.',
          });
        }
      });
  };

  const handleUpdateUser = ({ name, email }) => {
    mainApi
      .changeUserInfo({ name, email })
      .then((data) => {
        if (data) {
          setCurrentUser(data);
          setIsInfoTooltipOpen(true);
          setRequestStatus({
            ...requestStatus,
            message: 'Данные успешно обновлены!',
          });
        }
      })
      .catch(() => {
        setIsInfoTooltipOpen(true);
        setRequestStatus({
          ...requestStatus,
          error: true,
          message: 'Что-то пошло не так! Попробуйте еще раз.',
        });
      });
  };

  function onSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('current-user');
    localStorage.removeItem('saved-movies');
    setLoggedIn(false);
    setCurrentUser({});
    setMoviesSavedList([]);
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

  const searchResults = (a, b) =>
    typeof a === 'string' && typeof b === 'string'
      ? a.toLowerCase().includes(b.toLowerCase())
      : [];

  const SHORT_MOVIE = 40;
  const handleContinue = (
    movies,
    listType,
    arr,
    searchString,
    isShort = false
  ) => {
    setBadMovieRequest(false);
    setEmptyMoviesList(false);

    setContentLoading(true);

    setTimeout(() => {
      const newList = arr.filter(({ nameRU, duration }) =>
        isShort
          ? duration <= SHORT_MOVIE && searchResults(nameRU, searchString)
          : searchResults(nameRU, searchString)
      );

      if (newList.length === 0) {
        setEmptyMoviesList(true);
      } else {
        const setFunc =
          listType === ListTypes.Filtered
            ? setFilteredMoviesList
            : setSavedList;
        setFunc({ ...movies, movieCards: newList });
      }

      setContentLoading(false);
    }, 1000);
  };

  const handleSeachMovie = (searchString, isShort) => {
    setFilteredMoviesList({ ...filteredMoviesList, movieCards: [] });
    handleContinue(
      filteredMoviesList,
      ListTypes.Filtered,
      moviesList,
      searchString,
      isShort
    );
  };

  const handleSeachSavedMovie = (searchString, isShort) => {
    setSavedList({ ...savedList, movieCards: [] });
    handleContinue(
      savedList,
      ListTypes.Saved,
      moviesSavedList,
      searchString,
      isShort
    );
  };

  const showMore = (itemsList) => {
    setFilteredMoviesList({ ...filteredMoviesList, showItems: itemsList });
  };

  useEffect(() => {
    mainApi
      .getSavedMovies(token)
      .then((movies) => {
        setMoviesSavedList(movies);
        setSavedList({
          ...savedList,
          movieCards: movies,
          showItems: movies.length,
        });
      })
      .catch(() => {
        setSavedList({ ...savedList, movieCards: [] });
      });
  }, [newMovie, token]);

  const handleMovieStatus = (movie) => {
    mainApi
      .addNewCard(movie, token)
      .then((newMovie) => {
        setNewMovie(newMovie);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setRequestStatus({
          ...requestStatus,
          error: true,
          message: 'Что-то пошло не так! Попробуйте еще раз.',
        });
      });
  };

  function handleMovieDelete(movie) {
    mainApi
      .deleteMovie(movie._id, token)
      .then((newMovie) => {
        setNewMovie(newMovie);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setRequestStatus({
          ...requestStatus,
          error: true,
          message: 'Что-то пошло не так! Попробуйте еще раз.',
        });
      });
  }

  function closeAllModals(evt) {
    setIsInfoTooltipOpen(false);
  }

  function handlerEscClose(evt) {
    if (evt.key === 'Escape') {
      closeAllModals();
    }
  }

  function closeByOverlay(evt) {
    if (evt.target.classList.contains('modal-tooltip')) {
      closeAllModals();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handlerEscClose);
    document.addEventListener('click', closeByOverlay);
    return () => {
      document.removeEventListener('keydown', handlerEscClose);
      document.removeEventListener('click', closeByOverlay);
    };
  });

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route path='/' exact>
            <Header background='color' />
            <Main loggedIn={loggedIn} />
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
            onMovieLike={handleMovieStatus}
            onMovieDelete={handleMovieDelete}
            savedList={savedList.movieCards}
            token={token}
            requestStatus={requestStatus}
          />
          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
            onMovieDelete={handleMovieDelete}
            savedList={savedList}
            token={token}
            handleSeachMovie={handleSeachSavedMovie}
            contentLoading={contentLoading}
            badMovieRequest={badMovieRequest}
            emptyMoviesList={emptyMoviesList}
            requestStatus={requestStatus}
          />
          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
            onSignOut={onSignOut}
            requestStatus={requestStatus}
            component={Profile}
            token={token}
          />
          <Route path='/signup'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/signin'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='*'>
            <PageNotFound handleGoBack={handleGoBack} />
          </Route>
        </Switch>
        <InfoToolTip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllModals}
          requestStatus={requestStatus}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
