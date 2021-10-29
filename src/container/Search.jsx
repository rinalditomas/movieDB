import React, { useEffect, useState, useRef } from "react";
import Grid from "../components/grid/Grid";
import PopUp from "../components/popUp/PopUp";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies, selectMovie } from "../state/movieSlice";

const Search = ({ match }) => {
  const popUpRef = useRef();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.search);
  const currentMovie = useSelector((state) => state.movies.selectedMovie);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    dispatch(searchMovies(match.movie));
  }, [dispatch,match.movie]);

  const handleClick = (movie) => {
    dispatch(selectMovie(movie));
    setShowPopUp((prev) => !prev);
  };

  const closePopUp = (e) => {
    if (popUpRef.current === e.target) {
      setShowPopUp(false);
      dispatch(selectMovie());
    }
  };

  return (
    <div className="search_movies">
      <div className="row">
        <Grid movies={movies} handleClick={handleClick} />
      </div>
      {showPopUp ? (
        <PopUp
          currentMovie={currentMovie}
          closePopUp={closePopUp}
          popUpRef={popUpRef}
          handleClick={handleClick}
        />
      ) : null}
    </div>
  );
};

export default Search;
