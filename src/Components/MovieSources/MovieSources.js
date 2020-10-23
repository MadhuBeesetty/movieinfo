import React from "react";
import "./MovieSources.css";

// movieSources -- component : individual movie source box which has source description
// and buttons to redirect to source website and source wikipedia page.

const MovieSources = (source) => {
  // A redirect fucntion to redirect user to third party pages
  const redirect = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <div className="movieSourceLayout">
        <div className="movieSourceMovieList">
          <p className="reviewName">{source.name}</p>
          <p className="description">{source.summary}</p>
          <button
            className="websitebutton"
            onClick={() => redirect(source.websiteUrl)}
          >
            WEBSITE
          </button>
          <button
            className="wikibutton"
            onClick={() => redirect(source.wikiUrl)}
          >
            WIKI
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieSources;
