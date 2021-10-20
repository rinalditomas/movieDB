
import React, { useEffect, useState,useRef } from "react";
import {searchMovies} from "../../state/apiCalls";
import Grid from "../grid/Grid";
import "./Search.css";
import PopUp from "../popUp/PopUp";

const Search = ({ match }) => {
  const popUpRef = useRef()
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentMovie, setCurrentMovie] = useState("");
  const [movies, setMovies] = useState([]);

   
  
    
  useEffect(() => {
      searchMovies(match.movie).then((allMovies) => setMovies(allMovies.data.results));
  }, [match.movie]);

     
  const handleClick = (movie) => {
    if (currentMovie){
      setCurrentMovie("");
      setShowPopUp(prev=>!prev)
    } 
    else {
      setCurrentMovie(movie)
      setShowPopUp(prev=>!prev)
    }
  };
  const closePopUp =(e)=>{
    if(popUpRef.current === e.target){
      setShowPopUp(false)
      setCurrentMovie("");
    }
  }
  
  return (
    <div className="search_movies">
      <div className="row">
        <Grid
          movies={movies}
          handleClick={handleClick}
        />
      </div>
      {showPopUp ? <PopUp currentMovie={currentMovie} closePopUp={closePopUp} popUpRef={popUpRef}  handleClick={handleClick}/> : null}
    </div>
  );
};

export default Search;
