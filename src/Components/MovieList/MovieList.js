import React from "react";
import Movies from "../Movies/Movies";
import "./MovieList.css";

// MovieList: - main component which renders all movies using map function
// and the data we have in json file along with Header title.

const MovieList = () => (
  <div className="background">
    <hr className="line" />
    <h1 className="header">Avengers Movies</h1>
    <Movies />
  </div>
);

export default MovieList;
