import Row from "../components/row/Row";
import Banner from "../components/banner/Banner";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMovies } from "../state/movieSlice";

function Main() {
  const [currentMovie, setCurrentMovie] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.allMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleClick = (movie) => {
    if (currentMovie) setCurrentMovie("");
    else {
      setCurrentMovie(movie);
    }
  };

  return (
    <div>
      <Banner movies={movies.netflix} />
      <Row
        title="Trending"
        movies={movies.trending}
        handleClick={handleClick}
        currentMovie={currentMovie}
        isLarge
      />
      <Row
        title="Upcoming"
        movies={movies.upcoming}
        handleClick={handleClick}
        currentMovie={currentMovie}
        isLarge
      />
      <Row
        title="Popular Movie"
        movies={movies.popularMovie}
        handleClick={handleClick}
        currentMovie={currentMovie}
        isLarge
      />
      <Row
        title="Popular Tv Show"
        movies={movies.popularTv}
        handleClick={handleClick}
        currentMovie={currentMovie}
        isLarge
      />
      <Row
        title="Romance"
        movies={movies.romance}
        handleClick={handleClick}
        currentMovie={currentMovie}
        isLarge
      />
      <Row
        title="Action"
        movies={movies.action}
        handleClick={handleClick}
        currentMovie={currentMovie}
        isLarge
      />
    </div>
  );
}

export default Main;
