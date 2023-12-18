/* eslint-disable max-len */
import React from 'react';
import { Header } from '../shared/components/HeaderComponent/Header';
import { Footer } from '../shared/components/FooterConponent';
import { ItemPageSlider } from './PhoneDetailsPageSlider/PhoneDetailsPageSlider';
import Breadcrumps from '../shared/components/breadcrumbs/Breadcrumps';
import { PhoneDetails } from './PhoneDetails/PhoneDetails';
import { Specs } from './Specs';
import styles from './PhoneDetailsPage.module.scss';

export const PhoneDetailsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.phoneDetails}>
        <Breadcrumps />
        <h2 className={styles.head}>
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </h2>
        <div className={styles.detailsContainer}>
          <div className={styles.sliderWrapper}>
            <ItemPageSlider />
          </div>
          <div className={styles.phoneDetailsWrapper}>
            <PhoneDetails />
          </div>
        </div>
        <Specs />
      </div>
      <Footer />
    </>
  );
};
