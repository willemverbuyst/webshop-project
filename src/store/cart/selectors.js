export const selectAmountProductsInCart = (state) => {
  return state.cart.products.length;
};

export const selectedProducts = (state) => {
  return state.cart.products;
};
