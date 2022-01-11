import { useState, useEffect, lazy, Suspense } from 'react';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';

import FilmPagination from '../FilmPagination';
import { fetchMoviePopular } from '../../services/api-service';

const MoviesList = lazy(() =>
  import('../MovieList/MoviesList.js' /* webpackChunkName: "movie-list" */),
);

function TrandingMoviesList() {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const { url } = useRouteMatch();
  const locate = useLocation();
  const history = useHistory();

  useEffect(() => {
    const pageNumber = new URLSearchParams(locate.search).get('page') ?? 1;
    setPage(pageNumber ? pageNumber : 1);
    fetchMoviePopular(pageNumber).then(response => {
      setPage(response.page);
      setMovies(response.results);
      setTotal(response.total_pages);
      const searchPage = pageNumber ? `page=${pageNumber}` : '';

      history.push({ ...locate, search: `${searchPage}` });
    });
  }, []);

  useEffect(() => {
    fetchMoviePopular(page).then(response => setMovies(response.results));
  }, [page]);

  return movies ? (
    <>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <MoviesList movies={movies} locate={locate} url={`${url}movies`} />
        <FilmPagination pageTotal={total} page={page} setPage={setPage} />
      </Suspense>
    </>
  ) : (
    <p>No films</p>
  );
}

export default TrandingMoviesList;
