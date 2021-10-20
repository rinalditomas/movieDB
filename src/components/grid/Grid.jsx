import React from "react";
import "./Grid.css";

const Grid = ({ movies, handleClick }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="grid">
      <div className="movie_grid">
        {movies &&
          movies.map((movie) => (
            <img
              key={movie.id}
              className="movie_poster_grid"
              src={
                movie.poster_path
                  ? `${imgUrl}${movie.poster_path}`
                  : "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
              }
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
      </div>
    </div>
  );
};

export default Grid;
