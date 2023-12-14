import React, { useEffect, useState } from 'react';
import { getPhones } from '../../utils/fetchClient';
import { Header } from '../shared/components/HeaderComponent';
import { CategorySection } from './CategorySection';

export const HomePage: React.FC = () => {
  return <CategorySection />;
};
