import React from "react";
import "./MovieSources.css";
const movies = require("../../json/movie_sources.json");

const redirect = (url) => {
  window.location.href = url;
};

const MovieSources = () => {
  return (
    <div className="movieSourceAllign">
      {movies.map((eachMovie, i) => (
        <div className="movieSourceMovieList" key={i}>
          <p className="reviewName">{eachMovie.name}</p>
          <p className="description">{eachMovie.summary}</p>
          <button
            className="websitebutton"
            onClick={() => redirect(eachMovie.websiteUrl)}
          >
            WEBSITE
          </button>
          <button
            className="wikibutton"
            onClick={() => redirect(eachMovie.wikiUrl)}
          >
            WIKI
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieSources;
