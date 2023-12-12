import React, { useEffect, useState } from 'react';
import { getPhones } from '../../utils/fetchClient';

export const HomePage: React.FC = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getPhones().then((res) => setData(res.data));
  }, []);

  return (
    <>
      <h1>hi there</h1>
      {/* {data.length > 0 && <img src={`${data[0].image}`} alt="" />} */}
    </>
  );
};
