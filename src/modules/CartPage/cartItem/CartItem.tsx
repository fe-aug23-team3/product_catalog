/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react'; //
import { useNavigate } from 'react-router-dom'; //
import { PhonesContext } from '../../../store/GlobalProvider'; //
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

  const { setPhoneItemId } = useContext(PhonesContext);

  const navigate = useNavigate();

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
          onClick={() => {
            setPhoneItemId(dataItem.phoneId);
            navigate(`/phones/:${dataItem.phoneId}`);
          }}
        />
        <p
          className={styles.cartItem__title}
          onClick={() => {
            setPhoneItemId(dataItem.phoneId);
            navigate(`/phones/:${dataItem.phoneId}`);
          }}
        >
          {dataItem.name}
        </p>
      </div>

      <div className={styles.cartItem__quantity}>
        <div className={styles.cartItem__counter}>
          <button
            type="button"
            aria-label="decrease"
            className={styles.cartItem__quantityBtn}
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
