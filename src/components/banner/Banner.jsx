import React, { useEffect, useState } from "react";
import { truncate } from "../../constants/functions";
import "./Banner.css";

const Banner = ({ movies }) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    if (movies) {
      setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
    }
  }, [movies]);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(rgba(0,0,31,0.75), rgba(11,11,11,.5)), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        {/* <div className="banner_btns">
          <button className="btn_banner" onClick={()=>addMovieToFavorites(movie)}>Add to Favorite</button>
        </div> */}
        <h2 className="banner_description">{truncate(movie?.overview, 150)}</h2>
      </div>
      <div className="fade_bottom"></div>
    </header>
  );
};

export default Banner;
