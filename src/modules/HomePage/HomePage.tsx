import React, { useEffect, useState } from 'react';
import { getPhones } from '../../utils/fetchClient';
import { CategorySection } from './CategorySection';
import { BrandNewModelsSlider } from './BrandNewModelsSlider';
import style from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  const [data, setData] = useState<any>([]);

  return (
    <div className={style.home__page}>
      <BrandNewModelsSlider />
    </div>
  );
};
