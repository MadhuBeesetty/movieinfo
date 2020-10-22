import React from "react";
import MovieSources from "../MovieSources/MovieSources";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <hr className="line" />
      <h1 className="moveiSourceHeader">Movie Sources</h1>
      <MovieSources />
    </div>
  );
};

export default Footer;
