/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styles from './PhoneDetails.module.scss';
import { PhoneColors } from './PhoneColors';
import { Button } from '../../Button';

export enum PhoneCapacities {
  SixtyFour = '64',
  TwoHundredFiftySix = '256',
  FiveHundredTwelve = '512',
}

const specifications = [
  { name: 'Screen', value: '6.5" OLED' },
  { name: 'Resolution', value: '2688x1242' },
  { name: 'Processor', value: 'Apple A12 Bionic' },
  { name: 'RAM', value: '3 GB' },
];

export const PhoneDetails = () => {
  const [capacity, setCapacity] = useState<PhoneCapacities>(
    PhoneCapacities.SixtyFour,
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const capacities: PhoneCapacities[] = Object.values(
    PhoneCapacities,
  ) as PhoneCapacities[];

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className={styles.productDetails}>
      <h3 className={styles.headColors}>Available colors</h3>
      <section className={styles.colors}>
        <div className={styles.colorOptions}>
          {Object.values(PhoneColors).map((color) => (
            <button
              key={color}
              className={`${styles.button} ${styles[color]} ${
                selectedColor === color ? styles.selected : ''
              }`}
              aria-label={`${
                color.charAt(0).toUpperCase() + color.slice(1)
              } color`}
              onClick={() => handleColorClick(color)}
            >
              <span className={styles.visuallyHidden}>
                {`${color.charAt(0).toUpperCase() + color.slice(1)} color`}
              </span>
            </button>
          ))}
        </div>
      </section>
      <section className={styles.capacity}>
        <h3 className={styles.headCapacity}>Select capacity</h3>
        {capacities.map((cap) => (
          <button
            className={`${styles.capacityButton} ${
              capacity === cap ? styles.selectedCapacity : ''
            }`}
            key={cap}
            onClick={() => setCapacity(cap)}
          >
            {cap}
            GB
          </button>
        ))}
      </section>

      <div className={styles.price}>
        <span className={styles.salePrice}>$799</span>
        <span className={styles.originalPrice} data-text="$1199">
          $1199
        </span>
      </div>

      <div className={styles.addToCard}>
        <Button text="Add to cart" callback={() => {}} />
      </div>

      <button type="button" className={styles.favorite} onClick={() => {}}>
        <img
          className={styles.iconHeart}
          src="../shared/icons/Favorites (Heart Like).svg"
          alt="Heart icon"
        />
      </button>
      <section className={styles.specs}>
        {specifications.map((spec) => (
          <div key={spec.name} className={styles.spec}>
            <span className={styles.specName}>{spec.name}</span>
            <span className={styles.specValue}>{spec.value}</span>
          </div>
        ))}
      </section>
    </div>
  );
};
