import { Switch, Route } from 'react-router-dom';

import { React, lazy, Suspense } from 'react';

import './App.scss';

import Header from './components/Header';
import Container from './components/Container';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MoviesView = lazy(() =>
  import('./views/MoviesView.js' /* webpackChunkName: "movies-view" */),
);
const MovieDatailsView = lazy(() =>
  import(
    './views/MovieDatailsView.js' /* webpackChunkName: "movie-detail-view" */
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "not-found-view" */),
);

export default function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDatailsView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
