/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Header } from '../shared/components/HeaderComponent/Header';
import { ItemPageSlider } from './PhoneDetailsPageSlider/PhoneDetailsPageSlider';
import Breadcrumps from '../shared/components/breadcrumbs/Breadcrumps';
import { PhoneDetails } from './PhoneDetails/PhoneDetails';
import { Specs } from './Specs';
import styles from './PhoneDetailsPage.module.scss';
import { Phone } from '../../types/Phone';
import { getTheNewestPhones } from '../../utils/fetchClient';
import { SliderComponent } from '../shared/components/SliderComponent';

export const PhoneDetailsPage: React.FC = () => {
  const [recomendedPhones, setRecomendedPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getTheNewestPhones().then((res) => setRecomendedPhones(res.data));
  }, []);

  return (
    <>
      <Header />
      <div className={styles.phoneDetails}>
        <div className={styles.breadcrumps}>
          <Breadcrumps />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.sliderWrapper}>
            <ItemPageSlider />
          </div>
          <div className={styles.phoneDetailsWrapper}>
            <PhoneDetails />
          </div>
        </div>
        <Specs />
        <div className={styles.sliderContainer}>
          <SliderComponent data={recomendedPhones} header="You may also like" />
        </div>
      </div>
    </>
  );
};
