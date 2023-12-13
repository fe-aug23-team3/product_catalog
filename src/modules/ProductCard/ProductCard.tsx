import React from 'react';

// import phoneImg from '../../img/category-phones.png';
import style from './ProductCard.module.scss';

import { ProductCardProps } from './ProductCardProps';
import { Button } from '../Button/Button';

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
  } = product;

  return (
    <article className={style.card}>
      <img className={style.card__preview} src={image} alt={name} />

      <p className={style.card__title}>{name}</p>

      <h2 className={style.card__price}>
        {price < fullPrice ? (
          <>
            <h2>{price}</h2>

            <h2 className={style.card__oldPrice}>{fullPrice}</h2>
          </>
        ) : (
          <h2>{fullPrice}</h2>
        )}
      </h2>

      <div className={style.card__separator} />

      <div className={style.card__description}>
        <div className={style.card__characteristic}>
          <h5>Screen</h5>

          <h5>{screen}</h5>
        </div>

        <div className={style.card__characteristic}>
          <h5>Capacity</h5>

          <h5>{capacity}</h5>
        </div>

        <div className={style.card__characteristic}>
          <h5>RAM</h5>

          <h5>{ram}</h5>
        </div>
      </div>

      <div className="card__buttons">
        <Button text="Add to cart" callback={() => {}} />

        <button
          type="button"
          className="button__addToFavorites"
          onClick={() => {}}
        >
          <img
            className="button__icon-heart"
            src="../shared/icons/Favorites (Heart Like).svg"
            alt="Heart icon"
          />
        </button>
      </div>
    </article>
  );
};
