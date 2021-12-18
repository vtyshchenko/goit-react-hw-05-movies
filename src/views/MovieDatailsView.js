import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import { fetchMovieById, fetchMovieGenres } from '../services/api-service';

import styles from './views.module.scss';

export default function MovieDetailsView() {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchMovieById(params.movieId).then(setMovie);
    fetchMovieGenres().catch(console.log);
  }, []);

  return movie ? (
    <>
      <p>GO BACK</p>
      <h1 className={styles.title}>MovieDetailsView</h1>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        ></img>
        <div>
          <h2>Title</h2>
          <p>{movie.original_title}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p></p>
        </div>
      </div>
      <h4>Additional information</h4>
      <ul>
        <li>
          <NavLink to="/">Cast</NavLink>
        </li>
        <li>
          <NavLink to="/">Reviews</NavLink>
        </li>
      </ul>
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
