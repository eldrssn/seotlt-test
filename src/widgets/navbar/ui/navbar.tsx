import { Link } from 'react-router-dom';

import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          Все новости
        </Link>
        <div className={styles.controls}>
          <Link to="/add" className={`${styles.button} ${styles.primary}`}>
            Добавить новость
          </Link>
        </div>
      </nav>
    </header>
  );
};
