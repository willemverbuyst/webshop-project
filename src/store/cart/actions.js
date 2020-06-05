export function addToCart(id) {
  return {
    type: 'ADD_TO_CART',
    payload: id,
  };
}

export function removeFromCart(id) {
  console.log(id, '- 1');
  return {
    type: 'REMOVE_FROM_CART',
    payload: id,
  };
}
