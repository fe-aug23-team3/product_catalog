import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EmptyCart.module.scss';
import CartImage from '../../shared/icons/pngwing1.png';

export const EmptyCart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.emptyCart}>
      <img src={CartImage} alt="img" className={styles.icon} />
      <h2 className={styles.emptyCart__title}> Oops! Your Cart is Empty </h2>
      <p className={styles.emptyCart__describe}>
        But you can change that! Explore our product catalog now.
      </p>
      <button
        className={styles.emptyCart__button}
        type="button"
        onClick={() => navigate('/')}
      >
        Explore Catalog
      </button>
    </div>
  );
};
