import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumps.module.scss';
import HomeIcon from '../../icons/Home.svg';

export default function Breadcrumps() {
  const location = useLocation();
  let currentLink = '';
  const pathArray = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '');

  const crumbs = pathArray.map((crumb, index) => {
    currentLink += `/${crumb}`;

    return (
      <React.Fragment key={crumb}>
        {index > 0 && <div className={styles.arrow}>{' > '}</div>}
        {index === pathArray.length - 1 ? (
          <div className={`${styles.crumb} ${styles.active}`}>
            <span>{crumb}</span>
          </div>
        ) : (
          <div className={styles.crumb}>
            <Link to={currentLink}>{crumb}</Link>
          </div>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className={styles.breadcrumps}>
      <Link to="/home">
        <img src={HomeIcon} alt="Home" className={styles.homeIcon} />
      </Link>
      <div className={styles.arrow}>{' > '}</div>
      {crumbs}
    </div>
  );
}
