class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: this.headers,
    }).then(handleOriginalResponse);
  }

  changeUserInfo({ name, email }) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(handleOriginalResponse);
  }

  addNewCard({
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
  }) {
    return fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: this.headers,
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
    return fetch(`${this.url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(handleOriginalResponse);
  }

  getSavedMovies() {
    return fetch(`${this.url}/movies`, {
      method: 'GET',
      headers: this.headers,
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
