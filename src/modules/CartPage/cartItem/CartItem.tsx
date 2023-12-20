import React from 'react';
import styles from './CartItem.module.scss';
import { ReactComponent as Close } from '../../shared/icons/close-img.svg';
import { ReactComponent as Minus } from '../../shared/icons/Minus.svg';
import { ReactComponent as Plus } from '../../shared/icons/Plus.svg';
import { CartItemType } from '../CartTypes/cartItemType';

interface CartItemProps {
  dataItem: CartItemType;
  deleteItem: (id: number) => void;
  changeQuantity: (id: number, newQuantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  dataItem,
  deleteItem,
  changeQuantity,
}) => {
  const isDisabled = dataItem.quantity === 1;

  const handleDecrease = () => {
    if (!isDisabled) {
      changeQuantity(+dataItem.id, dataItem.quantity - 1);
    }
  };

  const handleIncrease = () => {
    changeQuantity(+dataItem.id, dataItem.quantity + 1);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__info}>
        <button
          type="button"
          aria-label="delete product"
          className={styles.cartItem__delete}
          onClick={() => deleteItem(+dataItem.id)}
        >
          <Close className={styles.cartItem__closeIcon} />
        </button>
        <img
          className={styles.cartItem__image}
          src={dataItem.image}
          alt={dataItem.name}
        />
        <p className={styles.cartItem__title}>{dataItem.name}</p>
      </div>

      <div className={styles.cartItem__quantity}>
        <div className={styles.cartItem__counter}>
          <button
            type="button"
            aria-label="decrease"
            className={`${styles.cartItem__quantityBtn} ${
              isDisabled ? styles.disabled : ''
            }`}
            onClick={handleDecrease}
            disabled={isDisabled}
          >
            <Minus
              className={`${styles.cartItem__minusIcon} ${
                isDisabled ? styles.disabledIcon : ''
              }`}
            />
          </button>

          <span className={styles.cartItem__quantityValue}>
            {dataItem.quantity}
          </span>

          <button
            type="button"
            aria-label="decrease"
            className={styles.cartItem__quantityBtn}
            onClick={handleIncrease}
          >
            <Plus className={styles.cartItem__plusIcon} />
          </button>
        </div>
        <p className={styles.cartItem__price}>{`$${dataItem.price}`}</p>
      </div>
    </div>
  );
};
