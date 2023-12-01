//Get a list of movies that are currently in theatres.

export default function getPopular(setFilmes) {
  fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=2645fd9cc965b4ea9af84dfaaa13e80b&language=pt-BR&page=1"
  )
    .then((response) => response.json())
    .then((data) => {
      setFilmes(data.results);
    });
}
