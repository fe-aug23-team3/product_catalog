import React, { useState } from 'react';
import styles from './CartPage.module.scss';
import { CartItem } from './cartItem';
import { CartTotal } from './cartTotal';
import { ReactComponent as ChevronLeft } from '../shared/icons/ChevronLeft.svg';
import { CartItemType } from './CartTypes/cartItemType';
import { calculateCartSummary } from './cartUtils';
import { EmptyCart } from './emptyCart/EmptyCart';
import { CheckoutModal } from './CheckoutModal/CheckoutModal';

// this is temporal fake data
const fakeCartData: CartItemType[] = [
  {
    id: '1',
    category: 'phones',
    phoneId: 'apple-iphone-7-32gb-black',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.jpg',
    quantity: 1,
  },
  {
    id: '2',
    category: 'phones',
    phoneId: 'apple-iphone-8-32gb-red',
    itemId: 'apple-iphone-8-32gb-red',
    name: 'Apple iPhone 8 32GB red',
    fullPrice: 420,
    price: 475,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'red',
    ram: '2GB',
    year: 2017,
    image: 'img/phones/apple-iphone-8/black/00.jpg',
    quantity: 2,
  },
  {
    id: '3',
    category: 'phones',
    phoneId: 'apple-iphone-10-64gb-blue',
    itemId: 'apple-iphone-10-64gb-blue',
    name: 'Apple iPhone 10 64GB Blue',
    fullPrice: 550,
    price: 500,
    screen: "5.1' IPS",
    capacity: '64GB',
    color: 'blue',
    ram: '4GB',
    year: 2018,
    image: 'img/phones/apple-iphone-10/black/00.jpg',
    quantity: 1,
  },
];
//

export const CartPage: React.FC = () => {
  const [cartData, setCartData] = useState<CartItemType[]>(fakeCartData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteItem = (id: number) => {
    setCartData(cartData.filter((item) => +item.id !== id));
  };

  const changeQuantity = (id: number, newQuantity: number) => {
    setCartData((prevCartData) => prevCartData
      .map((item) => (+item.id === id
        ? { ...item, quantity: newQuantity }
        : item)));
  };

  const cartSummary = calculateCartSummary(cartData);

  const handleCheckout = () => {
    setIsModalOpen(true);
    setCartData([]); // Удаление всех элементов из корзины
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.Cart}>
      <a className={styles.Cart__linkBack} href="/#">
        <ChevronLeft className={styles.ChevronLeft} />
        <span className={styles.Cart__backBtn}> Back</span>
      </a>
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
      {isModalOpen && <CheckoutModal />}
    </div>
  );
};
