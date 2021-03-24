import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
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
  return (
    <div className='page'>
      <Switch>
        <Route path='/' exact>
          <Header background='color' loggedIn={false} />
          <Main />
          <Footer />
        </Route>
        <Route path='/movies' exact>
          <Header background='dark' loggedIn={true} />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies' exact>
          <Header background='dark' loggedIn={true} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header background='dark' loggedIn={true} />
          <Profile />
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
  );
}

export default App;
