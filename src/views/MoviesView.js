import { useState, useEffect } from 'react';
import { NavLink, Link, useRouteMatch, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import { fetchMoviesByKeyword } from '../services/api-service';

import styles from './views.module.scss';

export default function MoviesView() {
  const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   fetchMoviesByKeyword(params.movieId).then(setMovie);
  // }, []);
  return (
    <>
      <label>
        Find movie
        <input
          className=""
          type="text"
          name="query"
          placeholder="Search movies"
        />
      </label>
    </>
  );
}
