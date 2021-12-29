import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { fetchMoviesByKeyword } from '../services/api-service';

import Button from '../components/Button';
import styles from '../components/HomePage/HomePage.module.scss';
import stylesFind from './views.module.scss';

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const { url } = useRouteMatch();
  const history = useHistory();
  const locate = useLocation();

  const handleChange = event => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const text = new URLSearchParams(locate.search).get('query');
    text && setSearchText(text);
  }, []);

  useEffect(() => {
    searchText &&
      fetchMoviesByKeyword(searchText, 1).then(response => {
        setMovies(response.results);
        setTotal(response.total_pages);
        history.push({ ...locate, search: `query=${searchText}` });
      });
  }, [searchText]);

  useEffect(() => {
    searchText &&
      fetchMoviesByKeyword(searchText, page).then(response => {
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

  return (
    <>
      <label>
        Find movies
        <input
          className={stylesFind.find}
          type="text"
          name="query"
          value={searchText}
          placeholder="Search movies"
          onChange={handleChange}
        />
      </label>
      {movies && (
        <>
          <ul className={styles.moviesList}>
            {movies.map(item => {
              return (
                <li key={item.id} className={styles.movieItem}>
                  <Link
                    to={{
                      pathname: `${url}/${item.id}`,
                      state: { from: locate },
                    }}
                  >
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
              );
            })}
          </ul>
          {page < total && (
            <Button
              onClick={() => {
                setPage(status => status + 1);
              }}
            />
          )}
        </>
      )}
    </>
  );
}
