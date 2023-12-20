/* eslint-disable max-len */
import React from 'react';
import { Header } from '../shared/components/HeaderComponent/Header';
import { Footer } from '../shared/components/FooterConponent';
import { ItemPageSlider } from './PhoneDetailsPageSlider/PhoneDetailsPageSlider';
import Breadcrumps from '../shared/components/breadcrumbs/Breadcrumps';
import { PhoneDetails } from './PhoneDetails/PhoneDetails';
import { Specs } from './Specs';
import styles from './PhoneDetailsPage.module.scss';
import { SliderComponent } from '../shared/components/SliderComponent';

export const PhoneDetailsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.phoneDetails}>
        <Breadcrumps />
        <div className={styles.detailsContainer}>
          <div className={styles.sliderWrapper}>
            <ItemPageSlider />
          </div>
          <div className={styles.phoneDetailsWrapper}>
            <PhoneDetails />
          </div>
        </div>
        <Specs />
        <div className={styles.sliderHeader}>
          <SliderComponent data={[]} header="You may also like" />
        </div>
      </div>
      <Footer />
    </>
  );
};
