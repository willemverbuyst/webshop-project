export const cartDetails = (state) => {
  const productsInCart = state.cart.products;
  const allProducts = state.products.all;

  if (productsInCart.length === 0) {
    return 'nothing';
  } else {
    return productsInCart.map((product) => {
      return {
        id: product.id,
        title: allProducts.find((prod) => prod.id === product.id).title,
        amount: product.amount,
        price: allProducts.find((prod) => prod.id === product.id).price,
        total:
          product.amount *
          allProducts.find((prod) => prod.id === product.id).price,
      };
    });
  }
};

export const totalCost = (state) => {
  const productsInCart = state.cart.products;
  const allProducts = state.products.all;

  return productsInCart
    .map(
      (product) =>
        allProducts.find((prod) => prod.id === product.id).price *
        product.amount
    )
    .reduce((a, b) => a + b, 0);
};
