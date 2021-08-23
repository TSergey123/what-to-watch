import React, { useState } from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';

function FilmList(props) {
  const [, setFilmId] = useState();
  const { films } = props;
  return (
    <div className="catalog__films-list">
      {films.map((item) => <FilmCard setFilm={setFilmId} previewImage={item.previewImage} id={item.id} name={item.name} key={item.id} />)}
    </div>
  );
}

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmList;
