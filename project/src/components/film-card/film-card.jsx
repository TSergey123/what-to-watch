import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function FilmCard(props) {
  const {name, poster, setFilm, id} = props;
  const history = useHistory();

  return (
    // <article className="small-film-card catalog__films-card">
    <article onClick={() => history.push(AppRoute.FILM)} onMouseEnter={() => setFilm(id)} id={id} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="film-page.html">{name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  id: PropTypes.string.isRequired,
  setFilm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default FilmCard;
