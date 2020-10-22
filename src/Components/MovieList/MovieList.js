import React from "react";
import Movies from "../Movies/Movies";
import "./MovieList.css";

const MovieList = () => {
  return (
    <div className="background">
      <hr className="line" />
      <h1 className="header">Avengers Movies</h1>
      <Movies />
    </div>
  );
};

export default MovieList;
