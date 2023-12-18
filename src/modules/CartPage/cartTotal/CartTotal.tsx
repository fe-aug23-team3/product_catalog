import React, { useState } from 'react';
import styles from './CartITotal.module.scss';
import { CartSummaryType } from '../CartTypes/cartSummaryType';
// import { CheckoutModal } from '../CheckoutModal/CheckoutModal';
// import { CartItemType } from '../CartTypes/cartItemType';

interface CartTotalProps {
  cartSummary: CartSummaryType;
  handleCheckout: () => void;
}

export const CartTotal: React.FC<CartTotalProps> = (
  {
    cartSummary,
    handleCheckout,
  },
) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleCheckout = () => {
  //   setIsModalOpen(true);
  //   setCartData([]);

  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   //  тут будет закрытие модального окна
  //   setIsModalOpen(false);
  // };

  return (
    <div className={styles.totalCard}>
      <h2 className={styles.totalCard__sum}>{`$${cartSummary.totalPrice}`}</h2>
      <p className={styles.totalCard__discribe}>
        {`Total for ${cartSummary.quantity} items`}
      </p>
      <hr className={styles.totalCard__lane} />
      <button
        className={styles.totalCard__checkoutBtn}
        type="button"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};
