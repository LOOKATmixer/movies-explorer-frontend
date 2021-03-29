  export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

  const handleOriginalResponse = (res) => {
    if (!res.ok) {
      return Promise.reject(`Err: ${res.status}`);
    }
    return res.json();
  };

export const getMovies = () => {
  return fetch(BASE_URL, {
    method: "GET",
  }).then(handleOriginalResponse);
};
