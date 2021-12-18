// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { fetchMoviePopular } from '../../services/api-service';

import Button from '../Button';
import styles from './MoviesTranding.module.scss';

function MoviesTranding(params) {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchMoviePopular(page).then(response => {
      setPage(response.page);
      setTotalPages(response.total_pages);
      setTotalResults(response.total_results);
      setMovies(response.results);
    });
  }, []);

  useEffect(() => {
    fetchMoviePopular(page).then(response => {
      let movieList = [];
      if (movies && movies.length > 0) {
        movieList = [...movies, ...response.results];
      } else {
        movieList = [...response.results];
      }
      setMovies(movieList);
      window.scrollBy({
        top: document.documentElement.clientHeight,
        behavior: 'smooth',
      });
    });
  }, [page]);

  return movies ? (
    <>
      <ul className={styles.moviesList}>
        {movies.map(item => (
          <li key={item.id} className={styles.movieItem}>
            <Link to={`${url}/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              ></img>
              <div className={styles.info}>
                {item.title}
                <p>
                  {item.vote_average} / {item.vote_count}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Button
        onClick={() => {
          setPage(status => status + 1);
        }}
      />
    </>
  ) : (
    <p>No films</p>
  );
}

export default MoviesTranding;
