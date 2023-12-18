import React, { useEffect, useState } from 'react';
import styles from './HotPrices.module.scss';
import { SliderComponent } from '../../shared/components/SliderComponent';
import { getPhonesWithMaxDiscount } from '../../../utils/fetchClient';
import { Phone } from '../../../types/Phone';

export const HotPrices: React.FC = () => {
  const [hotModels, setHotModels] = useState<Phone[]>([]);

  useEffect(() => {
    getPhonesWithMaxDiscount().then((res) => setHotModels(res.data));
  }, []);

  return <SliderComponent data={hotModels} header="Hot prices" />;
};
