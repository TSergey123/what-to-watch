import React from 'react';
import PropTypes from 'prop-types';


function FilmDetails(props) {
  const { starring, director, score, level, count, text } = props;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{score}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{level}</span>
          <span className="film-rating__count">{count} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{text}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
}

FilmDetails.propTypes = {
  score: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired,
};


export default FilmDetails;
