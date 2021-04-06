class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  register(name, email, password) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then(handleOriginalResponse);
  }

  authorize(email, password) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(handleOriginalResponse);
  }

  checkToken(token) {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(handleOriginalResponse);
  }

  getUserInfo() {
    const token = localStorage.getItem('token');
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(handleOriginalResponse);
  }

  changeUserInfo({ name, email }) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(handleOriginalResponse);
  }

  addNewCard(movie, token) {
    const {
      country,
      director,
      duration,
      year,
      description,
      nameRU,
      nameEN,
      id,
    } = movie;
    const image = `https://api.nomoreparties.co${movie.image.url}`;
    const thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
    const trailer = movie.trailerLink;
    const movieId = id;
    return fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }),
    }).then(handleOriginalResponse);
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this.url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(handleOriginalResponse);
  }

  getSavedMovies(token) {
    return fetch(`${this.url}/movies`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(handleOriginalResponse);
  }
}

const handleOriginalResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Err: ${res.status}`);
  }
  return res.json();
};

export const mainApi = new Api({
  url: 'https://api.mixer-movies.students.nomoredomains.monster',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});
