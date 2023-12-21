import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EmptyFav.module.scss';
// eslint-disable-next-line max-len
import { ReactComponent as Heart } from '../../shared/icons/plus-favorites-icon.svg';

export const EmptyFavourites: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Heart className={styles.heartPlus} />
      <h2 className={styles.container__text}>
        Your wishlist is currently empty. Explore our catalog and add your
        favorite items
      </h2>
      <button
        type="button"
        onClick={() => navigate('/phones')}
        className={styles.container__button}
      >
        Explore Catalog
      </button>
    </div>
  );
};
