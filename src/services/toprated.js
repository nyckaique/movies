//Get a list of movies ordered by rating.

export default function getPopular(setFilmes) {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=2645fd9cc965b4ea9af84dfaaa13e80b&language=pt-BR&page=1"
  )
    .then((response) => response.json())
    .then((data) => {
      setFilmes(data.results);
    });
}
