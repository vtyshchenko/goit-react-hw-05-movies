import styles from './views.module.scss';

export default function CastView({ casts }) {
  return (
    <ul className={styles.castList}>
      {casts.map(item => {
        return (
          <li key={item.name} className={styles.castInfo}>
            <img
              className={styles.itemPoster}
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
              width={'100px'}
            ></img>
            <div className={styles.castsData}>
              <p className={styles.castsText}>
                <span className={styles.isBold}>name: </span>
                {item.name}
              </p>
              <p className={styles.castsText}>
                <span className={styles.isBold}>gender: </span>
                {item.gender === 2 ? 'man' : 'wooman'}
              </p>
              <p className={styles.castsText}>
                <span className={styles.isBold}>popularity: </span>
                {item.popularity}
              </p>
              <p className={styles.castsText}>
                <span className={styles.isBold}>character: </span>
                {item.character}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// cast_id: 9
// character: "Thomas A. Anderson / Neo"​​​
// gender: 2​​​
// name: "Keanu Reeves"​​​
// popularity: 92.175​​​
// profile_path: "/rRdru6REr9i3WIHv2mntpcgxnoY.jpg"

// known_for_department: "Acting"​​​
// original_name: "Keanu Reeves"​​​
// id: 6384​​​
// credit_id: "5d5c58dbc4904800167c7da0"​​​
