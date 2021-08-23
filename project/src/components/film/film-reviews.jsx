import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';

function FilmReviews(props) {
  const {reviews} = props;
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <Review user={review.user} date={review.date} rating={review.rating} comment={review.comment} key={review.id}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.map((review) => <Review user={review.user} date={review.date} rating={review.rating} comment={review.comment} key={review.id}/>)}
      </div>
    </div>
  );
}

FilmReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default FilmReviews;
