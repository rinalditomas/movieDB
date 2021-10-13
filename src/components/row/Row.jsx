
import React, { useEffect, useState } from "react";
import { getMovies } from "../../state/apiCalls";
import "./Row.css";
import Information from "../information/Information";

const Row = ({ title, fetchUrl, isLarge }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState("");

  useEffect(() => {
    getMovies(fetchUrl).then((allMovies) => setMovies(allMovies.data.results));
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (currentMovie) setCurrentMovie("");
    else setCurrentMovie(movie);
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="movies_posters">
        {movies &&
          movies.map((movie) => (
            <img
              key={movie.id}
              className={`movie_poster ${isLarge && "movie_posterLarge"}`}
              src={`${imgUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
      </div>
      <div style={{display:currentMovie? 'block':'none'}}>
        <Information currentMovie={currentMovie} />
      </div>
    </div>
  );
};

export default Row;
