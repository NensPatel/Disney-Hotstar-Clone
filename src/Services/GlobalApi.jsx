import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "8cae06b137f700b3057f8ee76fb0d78e";

const getTrendingVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
);

const getMovieByGenreId = (id) => {
  return axios.get(
    `${movieBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${id}`
  );
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
