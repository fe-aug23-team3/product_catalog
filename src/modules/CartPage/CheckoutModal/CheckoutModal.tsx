import React from 'react';
import styles from './CheckoutModal.module.scss';

export const CheckoutModal: React.FC = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <span className={styles.loader}> </span>
        <section className={styles.text}>
          <h2
            // eslint-disable-next-line max-len
            className={styles.thanksText}
          >
            THANK YOU FOR SPENDING SOME SHEKELS!
          </h2>
          <p className={styles.order}>Your order id: 0000</p>
          <button className={styles.home} type="button">
            <a href="/" className={styles.link}>
              go back home
            </a>
          </button>
        </section>
      </div>
    </div>
  );
};
