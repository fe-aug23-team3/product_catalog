import React from 'react';
import styles from './CategorySection.module.scss';
import accessoriesImage from './CategoryPhotos/accessories_photo.png';
import phoneImage from './CategoryPhotos/phone_photo.png';
import tabletImage from './CategoryPhotos/tablet_photo.png';

export const CategorySection: React.FC = () => {
  return (
    <>
      <section className={styles.category} id="category">
        <div className={styles.category__container}>
          <h2 className={styles.category__title}>Shop by category</h2>
          <div className={styles.category__products}>
            <article
              className={`${styles.product} ${styles.category__product}`}
            >
              <a href="/mobile-phones">
                <img
                  src={phoneImage}
                  alt="Mobile phones"
                  className={`${styles.product__photo} ${styles.product__phonePhoto}`}
                />
                <h3 className={styles.product__title}>Mobile phones</h3>
                <p className={styles.product__category}>95 models</p>
              </a>
            </article>

            <article
              className={`${styles.product} ${styles.category__product}`}
            >
              <a href="/tablets">
                <img
                  src={tabletImage}
                  alt="Tablets"
                  className={`${styles.product__photo} ${styles.product__tabletPhoto}`}
                />
                <h3 className={styles.product__title}>Tablets</h3>
                <p className={styles.product__category}>24 models</p>
              </a>
            </article>

            <article
              className={`${styles.product} ${styles.category__product}`}
            >
              <a href="/accessories">
                <img
                  src={accessoriesImage}
                  alt="Accessories"
                  className={`${styles.product__photo} ${styles.product__accessoriesPhoto}`}
                />
                <h3 className={styles.product__title}>Accessories</h3>
                <p className={styles.product__category}>100 models</p>
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
