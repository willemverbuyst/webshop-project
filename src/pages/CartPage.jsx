import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import { emptyCart } from '../store/cart/actions';
import { cartDetails, totalCost } from '../store/selectors';

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(cartDetails);
  const total = useSelector(totalCost);

  const renderProductsInCart = () => {
    return cart === 'nothing' ? (
      <p>You have added nothing to your cart yet.</p>
    ) : (
      cart.map(({ name, amount, price, total }, i) => (
        <p key={i}>
          {name} {amount}x €{price},- €{total},-
        </p>
      ))
    );
  };

  return (
    <div>
      <h2>Your shopping cart</h2>
      {renderProductsInCart()}
      <Button variant="light" onClick={() => dispatch(emptyCart())}>
        Empt Cart
      </Button>
      <Button variant="info">Buy</Button>
      {total ? <div>€{total},-</div> : ''}
    </div>
  );
}
