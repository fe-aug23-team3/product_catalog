/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { SliderComponent } from '../../shared/components/SliderComponent';
import { getTheNewestPhones } from '../../../utils/fetchClient';
import { Phone } from '../../../types/Phone';
import { Loader } from '../../shared/components/loader';
import styles from './BrandNewModels.module.scss';

export const BrandNewModels: React.FC = () => {
  const [newModels, setNewModels] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTheNewestPhones()
      .then((res) => {
        setNewModels(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    isLoading ? (
      <Loader />
    ) : (
      <div className={styles.first}>
        <SliderComponent data={newModels} header="Brand new models" />
      </div>
    )
  );
};
