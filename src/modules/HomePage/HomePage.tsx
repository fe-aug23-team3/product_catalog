import React from 'react';
import { CategorySection } from './CategorySection';
import { BrandNewModels } from './BrandNewModels';
import { MainSlider } from './MainSlider';
import { HotPrices } from './HotPrices';
import style from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  return (
    <div className={style.home__page}>
      <MainSlider />
      <BrandNewModels />
      <CategorySection />
      <HotPrices />
    </div>
  );
};
