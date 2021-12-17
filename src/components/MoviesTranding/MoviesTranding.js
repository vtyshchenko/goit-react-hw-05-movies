// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { fetchMoviePopular } from '../../services/api-service';

import styles from './MoviesTranding.scss';

function MoviesTranding(params) {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchMoviePopular(page).then(response => {
      setPage(response.page);
      setTotalPages(response.total_pages);
      setTotalResults(response.total_results);
      setMovies(response.results);
    });
  }, []);

  return movies ? (
    <ul className={styles.ImageGallery}>
      {movies.map(item => (
        <li key={item.id}>
          <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title}></img>
          <a href="/">{item.title}</a>
          <p>
            {item.vote_average} / {item.vote_count}
          </p>
        </li>
      ))}
    </ul>
  ) : (
    <p>No films</p>
  );
}

export default MoviesTranding;

// adult: false
// backdrop_path: "/VlHt27nCqOuTnuX6bku8QZapzO.jpg"
// genre_ids: Array(4) [ 28, 12, 878, … ]
// id: 634649
// media_type: "movie"
// original_language: "en"
// original_title: "Spider-Man: No Way Home"
// overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
// popularity: 7962.394
// poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
// release_date: "2021-12-15"
// title: "Spider-Man: No Way Home"
// video: false​​​
// vote_average: 8.8
// vote_count: 573
