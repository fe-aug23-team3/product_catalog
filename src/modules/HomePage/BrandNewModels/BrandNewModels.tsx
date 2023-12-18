/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import styles from './BrandNewModels.module.scss';
import { SliderComponent } from '../../shared/components/SliderComponent';
import { getTheNewestPhones } from '../../../utils/fetchClient';
import { Phone } from '../../../types/Phone';

export const BrandNewModels: React.FC = () => {
  const [newModels, setNewModels] = useState<Phone[]>([]);

  useEffect(() => {
    getTheNewestPhones().then((res) => setNewModels(res.data));
  }, []);

  return <SliderComponent data={newModels} header="Brand new models" />;
};
