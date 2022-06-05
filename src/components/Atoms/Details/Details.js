import React from "react";
import "./style.scss";
const Details = ({ details, show, trig }) => {
  return (
    <div className={`details`} key={`details${details.id}`}>
      <div className={`left-img`}>
        <img src={details.Poster} />
      </div>
      <div className="right-content">
        <h3 className={`right--title`}>{details.Title}</h3>
        <div className="rating-container">
          <span className="rating"></span>
          <span className="rating-value">{`${details.imdbRating}/10`}</span>
        </div>
        <ul className="details-list">
          <li>
            <span>Year:</span>
            <span>{details.Year}</span>
          </li>
          <li>
            <span>Running Time:</span>
            <span>{details.Runtime}</span>
          </li>
          <li>
            <span>Directed By:</span>
            <span>{details.Director}</span>
          </li>
          <li>
            <span>Language:</span>
            <span>{details.Language}</span>
          </li>
        </ul>

        <p className="details-text">{details.Plot}</p>
        <div className="button-container">
          <button key="play">Play Movie</button>
          <button key="watch">Watch Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
