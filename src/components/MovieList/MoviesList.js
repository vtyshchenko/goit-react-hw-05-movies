import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import styles from './MoviesList.module.scss';

const MovieInfo = lazy(() =>
  import('./MovieInfo/MovieInfo.js' /* webpackChunkName: "movie-info" */),
);

export default function MoviesList({ movies, locate, url }) {
  return (
    <>
      <ul className={styles.moviesList}>
        {movies.map(item => (
          <Suspense fallback={<h1>LOADING...</h1>}>
            <MovieInfo
              key={item.id.toString()}
              item={item}
              locate={locate}
              url={url}
            />
          </Suspense>
        ))}
      </ul>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  locate: PropTypes.object,
  url: PropTypes.string,
};
