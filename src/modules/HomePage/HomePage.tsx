import React from 'react';
import './HomePage.module.scss';
import { CategorySection } from './CategorySection/CategorySection';

export const HomePage: React.FC = () => {
  return (
    <>
      <h1>Hello it is a HomePage!</h1>
      <CategorySection />
    </>
  );
};
