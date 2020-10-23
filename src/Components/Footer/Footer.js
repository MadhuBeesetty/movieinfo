import React from "react";
import MovieSources from "../MovieSources/MovieSources";
import "./Footer.css";
const movie_sources = require("../../json/movie_sources.json");

// Footer - component which renderes movie sources at the bottom of the page, uses map
// function to render multiple movie source data we get from our json object.
const Footer = () => {
  return (
    <div className="footerLayout ">
      <hr className="line" />
      <h1 className="moveiSourceHeader">Movie Sources</h1>
      <div className="movieSourceAllign">
        {movie_sources.map((eachMovie, i) => (
          <MovieSources {...eachMovie} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
