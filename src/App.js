import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import Container from './components/Container';

import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDatailsView from './views/MovieDatailsView';
import NotFoundView from './views/NotFoundView';

import React from 'react';

export default function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies" exact>
          <MoviesView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDatailsView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
