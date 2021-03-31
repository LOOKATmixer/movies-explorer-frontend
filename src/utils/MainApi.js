class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  register(password, email, name) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, email, name }),
    }).then(handleOriginalResponse);
  };

  authorize(email, password) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(handleOriginalResponse);
  };

  checkToken(token) {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(handleOriginalResponse);
  };

  getUserInfo(token) {
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
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(handleOriginalResponse);
  }

  addNewCard(movie) {
    return fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
        trailer: movie.trailerLink,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(handleOriginalResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this.url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this.headers,
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

export const getErrors = (err) => {
  if (err === "Ошибка: 400" || err.message === "Ошибка: 400")
    return "Неверно заполнено одно из полей";
  if (err === "Ошибка: 401" || err.message === "Ошибка: 401")
    return "Неправильные почта или пароль";
  if (err === "Ошибка: 403" || err.message === "Ошибка: 403")
    return "Вы не можете удалить фильм";
  if (err === "Ошибка: 404" || err.message === "Ошибка: 404")
    return "Данные не найдены";
  if (err === "Ошибка: 409" || err.message === "Ошибка: 409")
    return "Пользователь с таким email уже существует";
  if (err === "Ошибка: 429" || err.message === "Ошибка: 429")
    return "Слишком много запросов. Попробуйте позже";
  return "Ошибка сервера";
};

export const mainApi = new Api({
  url: 'https://api.mixer-movies.students.nomoredomains.monster',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});
