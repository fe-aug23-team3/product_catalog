import React, { useEffect, useState } from 'react';
import { getPhones } from '../../utils/fetchClient';
import { Header } from '../shared/components/header';
import { CategorySection } from './CategorySection';

export const HomePage: React.FC = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getPhones().then((res) => setData(res.data));
  }, []);

  return <CategorySection />;
};
