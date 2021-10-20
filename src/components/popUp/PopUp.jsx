import React from "react";
import "./PopUp.css";

const PopUp = ({ currentMovie, closePopUp, popUpRef, handleClick }) => {
  const {
    name,
    title,
    original_name,
    overview,
    poster_path,
    vote_average,
    release_date,
    first_air_date,
    original_language,
  } = currentMovie;
  function truncate(str, max) {
    return str?.length > max ? str.substr(0, max - 1) + "…" : str;
  }

  return (
    <div className="backgroud" ref={popUpRef} onClick={closePopUp}>
      <div className="container">
        <img
          className="popup_image"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
          }
          alt=""
        />
        <div className="popup_content">
          <ion-icon
            id="close_btn"
            size="medium"
            name="close-outline"
            onClick={() => handleClick()}
          ></ion-icon>
          <h1 className="title">{name || title || original_name}</h1>
          <div className="extra_info">
            <div className="popup_vote">
              <p
                className="calification"
                style={{ borderColor: vote_average > 6 ? "green" : "red" }}
              >
                {vote_average}
              </p>
              <ion-icon className="star" name="star"></ion-icon>
            </div>
            <p className="date">{release_date || first_air_date}</p>
            <p className="language">{original_language?.toUpperCase()}</p>
          </div>
          <div className="overview">
            <h3>Overview</h3>
            <p className="text_overview">{truncate(overview, 550)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
