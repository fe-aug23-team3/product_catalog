import React from 'react';
import style from './OfStock.module.scss';
import { Desert } from './Desert/Desert';

export const OfStock: React.FC = () => {
  return (
    <main>
      <div className={style.OfStock}>
        <div className={style.OfStock__text}>
          <h2>We are sorry</h2>

          <p>
            {
              // eslint-disable-next-line max-len
              'but tablets is temporarily out of stock. Please check back soon for availability. Thank you for your understanding.'
            }
          </p>
        </div>

        <div className={style.OfStock__desert}>
          <Desert />
        </div>
      </div>
    </main>
  );
};
