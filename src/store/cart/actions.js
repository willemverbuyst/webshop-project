export function addToCart(id) {
  return {
    type: 'ADD_TO_CART',
    payload: id,
  };
}

export function removeFromCart(id) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id,
  };
}

export function emptyCart() {
  return {
    type: 'EMPTY_CART',
  };
}
