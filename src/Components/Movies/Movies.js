import React from "react";
import MovieBox from "../MovieBox/MovieBox";
const movies = require("../../json/movies.json");

const Movies = () => {
  return (
    <div>
      {movies.map((eachMovie, i) => (
        <MovieBox movie={eachMovie} key={i} />
      ))}
    </div>
  );
};

export default Movies;
