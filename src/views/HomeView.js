import TrandingMoviesList from '../components/TrandingMoviesList';

import styles from './views.module.scss';

export default function HomeView() {
  return (
    <>
      <h1 className={styles.title}>Tranding today</h1>
      <TrandingMoviesList />
    </>
  );
}
