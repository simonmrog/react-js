import React from "react";

import "./MovieList.css";

import Movie from "./Movie";

const MovieList = ({ movies }) => {

  const showMovieList = () => {
    if (movies.length > 0) return (
      movies.filter(movie => movie.poster_path)
        .map(movie => <Movie key={movie.id} movie={movie} />)
    );
    else return "No movies to show";
  }

  return (
    <div className="movie-list">
      { showMovieList() }
    </div>
  );
};

export default MovieList;
