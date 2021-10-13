import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  pending: false,
  error: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    pendingStatus: (state) => {
      state.pending = true;
    },
    errorStatus: (state) => {
      state.pending = false;
      state.error = true;
    },
    getTrendingMovies: (state, action) => {
      console.log(action.payload);
      state.pending = false;
      state.allTodos.push(action.payload);
    },
    getPopularMovies: (state, action) => {
      console.log(action.payload);
      state.pending = false;
      state.allTodos.push(action.payload);
    },
  },
});

export const {
  getTrendingMovies,
  errorStatus,
  pendingStatus,
  getPopularMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
