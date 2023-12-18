import React from 'react';
import { Header } from '../shared/components/HeaderComponent/Header';
import { Footer } from '../shared/components/FooterConponent';
import { ItemPageSlider }
  from './PhoneDetailsPageSlider/PhoneDetailsPageSlider';
import Breadcrumps from '../shared/components/breadcrumbs/Breadcrumps';
import { PhoneDetails } from './PhoneDetails/PhoneDetails';

export const PhoneDetailsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Breadcrumps />
      <ItemPageSlider />
      <PhoneDetails />
      <Footer />
    </div>
  );
};
