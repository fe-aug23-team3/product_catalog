import React from 'react';
import { CategorySection } from './CategorySection';
import { BrandNewModels } from './BrandNewModels';
import { HeaderComponent } from './HeaderComponent';
import { MainSlider } from './MainSlider';
import { HotPrices } from './HotPrices';
import style from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <MainSlider />
      <div className={style.home__page}>
        <BrandNewModels />
        <CategorySection />
        <HotPrices />
      </div>
    </>
  );
};
