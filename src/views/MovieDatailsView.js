import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import { fetchMovieById, fetchMovieGenres } from '../services/api-service';

import styles from './views.module.scss';

export default function MovieDetailsView() {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchMovieById(params.movieId).then(setMovie);
    fetchMovieGenres()
      .then(resp => localStorage.setItem('genres', JSON.stringify(resp)))
      .catch(console.log);
  }, []);

  let genres = movie ? movie.genres.map(curr => curr.name).join(', ') : '';
  let companies = movie
    ? movie.production_companies.map(curr => curr.name).join(', ')
    : '';

  console.log(movie);
  return movie ? (
    <>
      <Link to="/" className={styles.goBack}>
        &larr; go back
      </Link>
      <div className={styles.movieInfo}>
        <img
          className={styles.moviePoster}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          min-width={'300px'}
          height={'400px'}
        ></img>
        <div className={styles.movieData}>
          <h1 className={styles.title}>{movie.original_title}</h1>
          <h2>Overview</h2>
          <p className={styles.movieText}>{movie.overview}</p>
          <h2>Genres</h2>
          <p className={styles.movieText}>{genres}</p>
          <h2>Popularity</h2>
          <p className={styles.movieText}>{movie.popularity}</p>
          <h2>Release date</h2>
          <p className={styles.movieText}>{movie.release_date}</p>
          <h2>Vote (average / count)</h2>
          <p className={styles.movieText}>
            {movie.vote_average} / {movie.vote_count}
          </p>
          <h2>Production companies</h2>
          <p className={styles.movieText}>{companies}</p>
        </div>
      </div>
      <div className={styles.addInfo}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="/">Cast</NavLink>
          </li>
          <li>
            <NavLink to="/">Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  ) : (
    <p>No films found on id {params.movieId}</p>
  );
}

// genre_ids: Array(3) [ 28, 12, 878 ]
// id: 634649
// ​​
// original_language: "en"
// ​​
// original_title: "Spider-Man: No Way Home"
// ​​
// overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
// ​​
// popularity: 11147.352
// ​​
// poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
// ​​
// release_date: "2021-12-15"
// ​​
// title: "Spider-Man: No Way Home"
// ​​
// video: false
// ​​
// vote_average: 8.8
// ​​
// vote_count: 836
