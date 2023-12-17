import React from 'react';
import styles from './EmptyCart.module.scss';
import { ReactComponent as CartIcon } from '../../shared/icons/empty_cart.svg';

export const EmptyCart: React.FC = () => {
  return (
    <div className={styles.emptyCart}>
      <CartIcon className={styles.icon} />
      <h2 className={styles.emptyCart__title}> Oops! Your Cart is Empty </h2>
      <p className={styles.emptyCart__describe}>
        But you can change that! Explore our product catalog now.
      </p>
      {/* <button className={styles.emptyCart__button} type="button">
        <a href="/" className={styles.linkInsideButton}>
          Explore Catalog
        </a>
      </button> */}
      <a className={styles.emptyCart__button} href="/">
        Explore Catalog
      </a>
    </div>
  );
};
