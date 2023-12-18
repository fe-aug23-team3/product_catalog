import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CartPage.module.scss';
import { CartItem } from './cartItem';
import { CartTotal } from './cartTotal';
import { ReactComponent as ChevronLeft } from '../shared/icons/ChevronLeft.svg';
import { CartItemType } from './CartTypes/cartItemType';
import { calculateCartSummary } from './cartUtils';
import { EmptyCart } from './emptyCart/EmptyCart';
import { CheckoutModal } from './CheckoutModal/CheckoutModal';
import { PhonesContext } from '../../store/GlobalProvider';

export const CartPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const phonesContext = useContext(PhonesContext);
  const [cartData, setCartData] = useState<CartItemType[]>(phonesContext.cart);

  useEffect(() => {
    setCartData(phonesContext.cart);
  }, [phonesContext.cart]);

  const deleteItem = (id: number) => {
    const newCartData = cartData.filter((item) => +item.id !== id);

    setCartData(newCartData);
    phonesContext.setCart(newCartData);
  };

  const changeQuantity = (id: number, newQuantity: number) => {
    const newCartData = cartData
      .map((item) => (+item.id === id
        ? { ...item, quantity: newQuantity }
        : item));

    setCartData(newCartData);
    phonesContext.setCart(newCartData);
  };

  const cartSummary = calculateCartSummary(cartData);

  const handleCheckout = () => {
    setIsModalOpen(true);
    phonesContext.setCart([]);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.Cart}>
      <button type="button" className={styles.Cart__linkBack} onClick={goBack}>
        <ChevronLeft className={styles.ChevronLeft} />
        <span className={styles.Cart__backBtn}> Back</span>
      </button>
      <h1 className={styles.Cart__title}>Cart</h1>

      {cartSummary.quantity ? (
        <div className={styles.Cart__container}>
          <div className={styles.Cart__items}>
            {cartData.map((item) => (
              <CartItem
                key={item.id}
                dataItem={item}
                deleteItem={deleteItem}
                changeQuantity={changeQuantity}
              />
            ))}
          </div>
          <div className={styles.Cart__total}>
            <CartTotal
              cartSummary={cartSummary}
              handleCheckout={handleCheckout}
            />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
      {isModalOpen && <CheckoutModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};
