/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { getLength } from '../../utils/fetchClient';
import { Dropdown } from './Dropdown';

export const PhonePage: React.FC = () => {
  const [phonesLength, setPhonesLength] = useState(0);
  const sortByDropdown = ['Newest', 'Oldest', 'Cheapest'];
  const amountPerPage = [4, 8, 16, 'All'];

  useEffect(() => {
    getLength().then((res) => setPhonesLength(res.data));
  }, []);

  return (
    <section>
      <h1>Mobile phones</h1>
      <p>{phonesLength} models</p>
      <Dropdown title="Sort by" list={sortByDropdown} />
    </section>
  );
};
