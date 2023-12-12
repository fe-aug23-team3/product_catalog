/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styles from './BrandNewModels.module.scss';
import { BrandNewModelsSlider } from '../BrandNewModelsSlider';

export const BrandNewModels: React.FC = () => {
  return (
    <div className={styles.models__wrapper}>
      <BrandNewModelsSlider />
    </div>
  );
};
