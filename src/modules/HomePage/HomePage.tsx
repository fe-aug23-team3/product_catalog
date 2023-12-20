import React from 'react';
import { CategorySection } from './CategorySection';
import { BrandNewModels } from './BrandNewModels';
import { MainSlider } from './MainSlider';
import { HotPrices } from './HotPrices';
import style from './HomePage.module.scss';
import { Contacts } from '../shared/components/Contacts/Contacts';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* <MainSlider />
      <div className={style.home__page}>
        <BrandNewModels />
        <CategorySection />
        <HotPrices />
      </div> */}
      <Contacts />
    </>
  );
};
