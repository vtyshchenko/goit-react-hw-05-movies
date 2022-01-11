import { Link } from 'react-router-dom';

import styles from './MovieInfo.module.scss';
import NoPoster from '../../../images/no-poster.png';

export default function MovieInfo({ item, locate, url }) {
  const imageSrc =
    item && item.poster_path
      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
      : NoPoster;
  return (
    <li className={styles.movieItem} key={item.id}>
      <Link
        to={{
          pathname: `${url}/${item.id}`,
          state: { from: locate },
        }}
      >
        <img src={imageSrc} alt={item.title}></img>
        <div className={styles.info}>
          {item.title}
          <p>
            {item.vote_average} / {item.vote_count}
          </p>
        </div>
      </Link>
    </li>
  );
}
