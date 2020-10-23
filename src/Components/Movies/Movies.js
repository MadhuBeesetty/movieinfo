import React from "react";
import MovieBox from "../MovieBox/MovieBox";
const movies = require("../../json/movies.json");

// Movies: component which takes the json data for all movies in render child component "MovieBox" with a map function.

const Movies = () => (
  <div>
    {movies.map((eachMovie, i) => (
      <MovieBox movie={eachMovie} key={i} />
    ))}
  </div>
);

export default Movies;
