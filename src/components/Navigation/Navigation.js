import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" className={styles.link} ativeClassName={styles.active}>
        Home
      </NavLink>
      <NavLink to="/movies" className={styles.link} ativeClassName={styles.active}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
