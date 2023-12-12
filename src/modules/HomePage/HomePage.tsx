import React from 'react';
import styles from './HomePage.module.scss';
import { BrandNewModels } from './BrandNewModels';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.home__page}>
      <BrandNewModels />
    </div>
  );
};
