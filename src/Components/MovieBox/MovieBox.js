import React, { useState } from "react";
import "./MovieBox.css";
import image from "../../Assets/video.svg";
import downArrow from "../../Assets/downArrow.png";
import upArrow from "../../Assets/upArrow.jpg";

// Movie-box: component -- main component which renders image on the left
// and movie name with description and cast.

const MovieBox = (movie) => {
  //using useState hook to toggle the button state for showing movie cast.
  const [arrow, setArrow] = useState(false);
  const arrowSrc = arrow ? upArrow : downArrow;

  // function to redirect user to IMDb page when clicked on button.
  const IMDBbutton = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <div className="MovieList">
        <img className="imageDimentions" src={image} alt="movies logo" />
        <p className="movieTitle">{movie.movie.title}</p>
        <div className="allignMovie">
          <p className="movieDescription">{movie.movie.summary}</p>
          <button
            className="button"
            onClick={() => IMDBbutton(movie.movie.imdbUrl)}
          >
            IMDB
          </button>
          <img
            onClick={() => {
              arrow === true ? setArrow(false) : setArrow(true);
            }}
            className="buttonImage"
            src={arrowSrc}
            alt="arrow"
          />
        </div>
        {arrow && (
          <div>
            <hr className="divideLine" />
            {movie.movie.casts.map((cast, i) => (
              <div className="allignCast">
                <p className="cast" key={i}>
                  {cast}
                </p>
              </div>
            ))}
            <a className="seeFullCast" href={movie.movie.fullCastUrl}>
              See Full Cast...
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieBox;
