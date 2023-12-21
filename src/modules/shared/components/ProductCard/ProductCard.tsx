/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './ProductCard.module.scss';

import { PhonesContext } from '../../../../store/GlobalProvider';

import { Phone } from '../../../../types/Phone';

import { Button } from '../../../Button/Button';
import { ButtonHeartLike } from '../../../ButtonHeartLike';

type Props = {
  model: Phone;
};

export const ProductCard: React.FC<Props> = ({ model }) => {
  // eslint-disable-next-line
  const {
    id,
    phoneId,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
    color,
  } = model;
  // eslint-disable-next-line
  const { setPhoneItemId, favorites, setFavorites, cart, setCart } =
    useContext(PhonesContext);

  const navigate = useNavigate();

  // #region Favorites
  const isInFavorites = favorites.includes(id);
  const addToFavorites = () => {
    if (isInFavorites) {
      setFavorites(favorites.filter((el: string) => el !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  // #endregion

  // #region Cart
  const isInCart = cart.some((el: Phone) => el.id === id);

  const addToCart = () => {
    if (!isInCart) {
      const newGood = { ...model, quantity: 1 };

      setCart([...cart, newGood]);
    }
  };
  // #endregion

  return (
    <article className={style.card}>
      <img
        className={style.card__preview}
        src={image}
        alt={name}
        onClick={() => {
          setPhoneItemId(phoneId);
          navigate(`/phones:${phoneId}`);
        }}
      />

      <p
        onClick={() => {
          setPhoneItemId(phoneId);
          navigate(`/phones:${phoneId}`);
        }}
        className={style.card__title}
      >
        {name}
      </p>

      <h2 className={style.card__price}>
        {price < fullPrice ? (
          <>
            <h2>{`${price}$`}</h2>

            <h2 className={style.card__oldPrice}>{`${fullPrice}$`}</h2>
          </>
        ) : (
          <h2>{`${fullPrice}$`}</h2>
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

      <div className={style.card__buttons}>
        <Button
          text={isInCart ? 'Added' : 'Add to cart'}
          callback={addToCart}
          isActive={isInCart}
        />

        <ButtonHeartLike isActive={isInFavorites} callback={addToFavorites} />
      </div>
    </article>
  );
};
