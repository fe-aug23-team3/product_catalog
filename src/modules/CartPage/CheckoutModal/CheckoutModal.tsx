import React from 'react';
import styles from './CheckoutModal.module.scss';

export const CheckoutModal: React.FC = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.loader}>
          <div className={styles.loader__image}>
            <div className={styles.loader__coin}>
              <img
                className={styles.coin}
                // eslint-disable-next-line max-len
                src="https://www.dropbox.com/s/fzc3fidyxqbqhnj/loader-coin.png?raw=1"
                alt=""
              />
            </div>
            <div className={styles.loader__hand}>
              <img
                className={styles.hand}
                // eslint-disable-next-line max-len
                src="https://www.dropbox.com/s/y8uqvjn811z6npu/loader-hand.png?raw=1"
                alt=""
              />
            </div>
          </div>
        </div>
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
