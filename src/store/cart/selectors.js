export const selectAmountProductsInCart = (state) => {
  return state.cart.products.length;
};
