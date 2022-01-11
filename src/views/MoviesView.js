import { useState, useEffect, lazy, Suspense } from 'react';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { fetchMoviesByKeyword } from '../services/api-service';
import useDebounce from '../helpers/myDebounce';

import FilmPagination from '../components/FilmPagination';
import stylesFind from './views.module.scss';

const MoviesList = lazy(() =>
  import(
    '../components/MovieList/MoviesList.js' /* webpackChunkName: "movie-list" */
  ),
);

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const { url } = useRouteMatch();
  const history = useHistory();
  const locate = useLocation();
  const [isFetchDone, setIsFetchDone] = useState(false);

  const debouncedSearch = useDebounce(searchText, 500);
  const handleChange = event => {
    setSearchText(event.target.value);
    !event.target.value && setMovies(null);
    setPage(1);
    setIsFetchDone(false);
  };

  useEffect(() => {
    const text = new URLSearchParams(locate.search).get('query');
    const pageNumber = new URLSearchParams(locate.search).get('page');
    text && setSearchText(text);
    pageNumber && setPage(pageNumber);
  }, []);

  const getMovies = pageNumber => {
    setPage(Number(pageNumber));
    return fetchMoviesByKeyword(searchText, pageNumber).then(response => {
      setMovies(response.results);
      setTotal(response.total_pages);
      setIsFetchDone(true);
      let searchQuery = searchText ? `query=${searchText}` : '';
      const searchPage = pageNumber ? `page=${pageNumber}` : '';
      searchQuery = searchQuery
        ? searchPage && `${searchQuery}&${searchPage}`
        : searchQuery;

      history.push({ ...locate, search: `${searchQuery}` });
    });
  };

  useEffect(() => {
    searchText && debouncedSearch && getMovies(page);
  }, [debouncedSearch]);

  useEffect(() => {
    searchText && getMovies(page);
  }, [page]);

  return (
    <>
      <label>
        Find movies
        <input
          className={isFetchDone ? stylesFind.findDone : stylesFind.find}
          type="text"
          name="query"
          value={searchText}
          placeholder="Search movies"
          onChange={handleChange}
        />
      </label>
      {movies && movies.length > 0 ? (
        <>
          <Suspense fallback={<h1>LOADING...</h1>}>
            <MoviesList movies={movies} locate={locate} url={url} />

            <FilmPagination pageTotal={total} page={page} setPage={setPage} />
          </Suspense>
        </>
      ) : (
        searchText && <h2>Nothing found on query "{searchText}"</h2>
      )}
    </>
  );
}
