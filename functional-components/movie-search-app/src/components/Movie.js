import React from "react";

import "./Movie.css";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="movie-content">
        <h3 className="movie-title">{ movie.title }</h3>
        <p><small>RELEASE DATE: {movie.release_date}</small></p>
        <p><small>RATING: {movie.vote_average}</small></p>
        <p className="movie-description">{ movie.overview }</p>
      </div>
    </div>
  );
};

export default Movie;
