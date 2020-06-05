export const selectAmountProductsInCart = (state) => {
  return state.cart.products.length;
};

export const selectProducts = (state) => {
  return state.cart.products;
};
