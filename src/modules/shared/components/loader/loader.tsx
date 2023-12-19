import React from 'react';
import styles from './loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>

      <span className={styles.loader_element}> </span>

    </div>
  );
};
