import React from "react";
import "./Information.css";

const Information = (currentMovie) => {
  const {
    name,
    title,
    original_name,
    overview,
    poster_path,
    vote_average,
    release_date,
    backdrop_path,
    first_air_date,
  } = currentMovie.currentMovie;
  return (
    <div
      className="background_container"
      style={{
        backgroundSize: "cover",
        backgroundRepeat:'no-repeat',
        backgroundPosition: "center center",
        backgroundImage: `linear-gradient(rgba(0,0,31,0.95), rgba(11,11,11,.5)), url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}
    >
        <div className="information">
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      <div className="info-container">
        <h1>{name || title || original_name}</h1>
        <div className="secondary">
          <p
            className="vote"
            style={{ borderColor: vote_average > 6 ? "green" : "red" }}
          >
            {vote_average}
          </p>
          <p className="release">{release_date || first_air_date}</p>
        </div>
        <div className="overview_container">
          <h2>Overview</h2>
          <p className="overview">{overview}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Information;
