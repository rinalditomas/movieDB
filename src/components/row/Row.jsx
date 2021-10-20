
import React, { useEffect, useRef, useState } from "react";
import { getMovies, searchMovies} from "../../state/apiCalls";
import "./Row.css";
import Information from "../information/Information";

const Row = ({ title, fetchUrl, isLarge, toSearch }) => {
  const infRef = useRef(null)
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState("");

  
    useEffect(() => {
      if(toSearch){
        searchMovies(toSearch).then((allMovies) => setMovies(allMovies.data.results));
      }
      if(fetchUrl){
        getMovies(fetchUrl).then((allMovies) => setMovies(allMovies.data.results));
      }
    
    }, [toSearch,fetchUrl]);
  
 
  const handleClick = (movie) => {
    if (currentMovie) setCurrentMovie("");
    else {
      setCurrentMovie(movie)
      currentMovie && infRef.current.scrollIntoView({ behavior: 'smooth' })
      }
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
        <Information ref={infRef}  currentMovie={currentMovie} />
      </div>
    </div>
  );
};

export default Row;
