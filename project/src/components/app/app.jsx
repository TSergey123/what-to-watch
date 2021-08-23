import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in/sign-in';
import AddReviewScreen from '../add-review/add-review';
import FilmScreen from '../film/film';
import PlayerScreen from '../player/player';
import MyList from '../my-list/my-list';
import NotFoundScreen from '../my-list/my-list';
import { AppRoute, CARDS_COUNT, MY_FILMS_COUNT } from '../../const/const';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { reviews } from '../../mocks/film';

const CardData = {
  GENRE: 'Genre',
  DATE: '2000',
  NAME: 'Name',
  POSTER: 'img/the-grand-budapest-hotel-poster.jpg',
  BACKPOSTER: 'img/bg-the-grand-budapest-hotel.jpg',
};


function App(props) {
  const {films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainScreen
            films={films}
            cardsCount={CARDS_COUNT}
            genre={CardData.GENRE}
            date={CardData.DATE}
            name={CardData.NAME}
            poster={CardData.POSTER}
            backPoster={CardData.BACKPOSTER}
          />
        </Route>

        <Route exact path={AppRoute.SIGN_IN}>
          <SignInScreen />
        </Route>

        <Route exact path={AppRoute.MY_LIST}>
          <MyList
            filmsCount={MY_FILMS_COUNT}
            films={films}
          />
        </Route>

        <Route exact path={AppRoute.FILM}>
          <FilmScreen
            filmDetails
            filmReviews={false}
            date={CardData.DATE}
            name={CardData.NAME}
            films={films}
            reviews={reviews}
          />
        </Route>

        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReviewScreen
            film={films[0]}
          />
        </Route>

        <Route exact path={AppRoute.PlAYER}>
          <PlayerScreen
            film={films[0]}
          />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
