import React from "react";
import "./Row.css";
import Information from "../information/Information";
import { imgUrl } from "../../constants/request";

const Row = ({ title, movies, isLarge, handleClick, currentMovie }) => {
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
                isLarge ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie?.name}
              onClick={() => handleClick(movie)}
            />
          ))}
      </div>
      <div style={{ display: currentMovie ? "block" : "none" }}>
        <Information currentMovie={currentMovie} />
      </div>
    </div>
  );
};

export default Row;
