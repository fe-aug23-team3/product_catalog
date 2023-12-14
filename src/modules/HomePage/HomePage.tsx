import React, { useEffect, useState } from 'react';
import { getPhones } from '../../utils/fetchClient';
import { BrandNewModelsSlider } from './BrandNewModelsSlider';
import style from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getPhones().then((res) => setData(res.data));
  }, []);

  return (
    <div className={style.home__page}>
      <BrandNewModelsSlider />
    </div>
  );
};
