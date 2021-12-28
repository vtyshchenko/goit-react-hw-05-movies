import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { fetchMoviePopular } from '../../services/api-service';

import Button from '../Button';
import styles from './HomePage.module.scss';

function HomePage() {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const { url } = useRouteMatch();
  // console.log('movies', movies);

  useEffect(() => {
    fetchMoviePopular(page).then(response => {
      setPage(response.page);
      setMovies(response.results);
    });
  }, []);

  useEffect(() => {
    fetchMoviePopular(page).then(response => {
      let movieList = [];

      movieList =
        movies && movies.length > 0
          ? [...movies, ...response.results]
          : [...response.results];

      setMovies(movieList);

      page > 1 &&
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
            <Link to={`${url}movies/${item.id}`}>
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

export default HomePage;
