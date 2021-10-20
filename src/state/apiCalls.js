import axios from "axios";
// import {
//   getTrendingMovies,
//   errorStatus,
//   pendingStatus,
//   getPopularMovies,
// } from "./movieSlice";
import { API_KEY } from "../constants/request";

export const getMovies = async (fetchURL) => {
  const movies = await axios.get(`https://api.themoviedb.org/3${fetchURL}`);
  return movies;
};

export const searchMovies = async (movie) => {
  const movies = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`);
  return movies;
};
