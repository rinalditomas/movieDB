import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../constants/request";
import { API_KEY } from "../constants/request";

export const fetchMovies = createAsyncThunk("GET_MOVIES", async (fetchURL) => {
  let allMovies = {
    popularTv: [],
    romance: [],
    trending: [],
    upcoming: [],
    popularMovie: [],
    netflix: [],
    action: [],
  };

  for (let [key, value] of Object.entries(request)) {
    const movies = await axios.get(`https://api.themoviedb.org/3${value}`);
    allMovies[key] = movies.data.results;
  }

  return allMovies;
});
export const searchMovies = createAsyncThunk("SEARCH_MOVIES", async (movie) => {
  const movies = await axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`
  );
  return movies.data.results;
});

const initialState = {
  allMovies: [],
  search: [],
  selectedMovie: {},
  error: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    selectMovie: (state, { payload }) => {
      return { ...state, selectedMovie: payload };
    },
  },
  extraReducers: {
    [fetchMovies.fulfilled]: (state, { payload }) => {
      return { ...state, allMovies: payload };
    },
    [fetchMovies.rejected]: (state, action) => {
      return { ...state, error: true };
    },
    [searchMovies.fulfilled]: (state, { payload }) => {
      return { ...state, search: payload };
    },
    [searchMovies.rejected]: (state, action) => {
      return { ...state, error: true };
    },
  },
});
export const { selectMovie } = movieSlice.actions;

export default movieSlice.reducer;
