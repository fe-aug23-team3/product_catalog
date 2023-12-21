import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from './CategorySection.module.scss';
import accessoriesImage from './CategoryPhotos/accessories_photo.png';
import phoneImage from './CategoryPhotos/phone_photo.png';
import tabletImage from './CategoryPhotos/tablet_photo.png';
import { getLength } from '../../../utils/fetchClient';

export const CategorySection: React.FC = () => {
  const [phonesLength, setPhonesLength] = useState(0);

  useEffect(() => {
    getLength().then(res => setPhonesLength(res.data));
  }, []);

  return (
    <>
      <section className={styles.category} id="category">
        <div className={styles.category__container}>
          <h2 className={styles.category__title}>Shop by category</h2>
          <div className={styles.category__products}>
            <article
              className={`${styles.product} ${styles.category__product}`}
            >
              <NavLink to="/phones">
                <img
                  src={phoneImage}
                  alt="Mobile phones"
                  className={`${styles.product__photo} ${styles.product__phonePhoto}`}
                />
                <h3 className={styles.product__title}>Mobile phones</h3>
                <p className={styles.product__category}>
                  {`${phonesLength} models`}
                </p>
              </NavLink>
            </article>

            <article
              className={`${styles.product} ${styles.category__product}`}
            >
              <NavLink to="/tablets">
                <img
                  src={tabletImage}
                  alt="Tablets"
                  className={`${styles.product__photo} ${styles.product__tabletPhoto}`}
                />
                <h3 className={styles.product__title}>Tablets</h3>
                <p className={styles.product__category}>0 models</p>
              </NavLink>
            </article>

            <article
              className={`${styles.product} ${styles.category__product}`}
            >
              <NavLink to="/accessories">
                <img
                  src={accessoriesImage}
                  alt="Accessories"
                  className={`${styles.product__photo} ${styles.product__accessoriesPhoto}`}
                />
                <h3 className={styles.product__title}>Accessories</h3>
                <p className={styles.product__category}>0 models</p>
              </NavLink>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
