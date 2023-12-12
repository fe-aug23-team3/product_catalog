import React from 'react';
import { Dropdown } from './Dropdown';

export const PhonePage: React.FC = () => {
  return (
    <section>
      <h1>Mobile phones</h1>
      <p>71 models</p>
      <Dropdown title="Sort by" />
    </section>
  );
};
