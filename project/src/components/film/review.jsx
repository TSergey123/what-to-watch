import React from 'react';
import PropTypes from 'prop-types';

function Review(props) {
  const {comment, date, user, rating} = props;
  const reviewDate = `${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{reviewDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

Review.propTypes = {
  comment: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date),
};

export default Review;
