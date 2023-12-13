import React, { useEffect, useState } from 'react';
import { getPhones } from '../../utils/fetchClient';
import { BrandNewModels } from './BrandNewModels';
import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getPhones().then((res) => setData(res.data));
  }, []);

  return (
    <div className={styles.home__page}>
      <h1>hi there</h1>
      <BrandNewModels />
      {/* {data.length > 0 && <img src={`${data[0].image}`} alt="" />} */}
    </div>
  );
};
