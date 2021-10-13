import axios from "axios";
// import {
//   getTrendingMovies,
//   errorStatus,
//   pendingStatus,
//   getPopularMovies,
// } from "./movieSlice";

export const getMovies = async (fetchURL) => {
  const movies = await axios.get(`https://api.themoviedb.org/3${fetchURL}`);
  return movies;
};
