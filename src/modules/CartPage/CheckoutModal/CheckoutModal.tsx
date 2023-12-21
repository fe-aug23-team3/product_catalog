import React from 'react';
import styles from './CheckoutModal.module.scss';
import { ReactComponent as Close } from '../../shared/icons/close-img.svg';

interface CartItemProps {
  handleCloseModal: () => void;
}

export const CheckoutModal: React.FC<CartItemProps> = ({
  handleCloseModal,
}) => {
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
            <a href="/product_catalog" className={styles.link}>
              Continue shopping
            </a>
          </button>

          <button
            type="button"
            aria-label="close"
            className={styles.close}
            onClick={handleCloseModal}
          >
            <Close className={styles.closeIcon} />
          </button>
        </section>
      </div>
    </div>
  );
};
