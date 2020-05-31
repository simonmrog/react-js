import React, { useState, useEffect } from "react";

import "./SearchMovies.css";
import { API_KEY } from "../config";

import MovieList from "./MovieList";

const SearchMovies = () => {

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query !== "") searchMovies();
    else setMovies([]);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    if (query !== "") searchMovies();
    else setMovies([]);
  };

  const handleOnChange = e => {
    setQuery(e.target.value);
  };

  const searchMovies = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const { results } = await res.json();
      setMovies(results || []);
    } catch(err) {
      console.log(err);
      setMovies([]);
    }
  }

  return (
    <>
      <form className="form" onSubmit={ handleSubmit }>
        <label className="label" htmlFor="query">Movie Name</label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search a movie..."
          value={query}
          onChange={ handleOnChange }
        />
        <input className="button" type="submit" />
      </form>
      <MovieList movies={ movies } />
    </>
  );
};

export default SearchMovies;
