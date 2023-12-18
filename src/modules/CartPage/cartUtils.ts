import { CartItemType } from './CartTypes/cartItemType';

export const calculateCartSummary = (cartData: CartItemType[]) => {
  return cartData.reduce(
    (summary, item) => {
      const updatedQuantity = summary.quantity + item.quantity;
      const updatedTotalPrice = summary.totalPrice + item.price * item.quantity;

      return {
        quantity: updatedQuantity,
        totalPrice: updatedTotalPrice,
      };
    },
    { quantity: 0, totalPrice: 0 },
  );
};
