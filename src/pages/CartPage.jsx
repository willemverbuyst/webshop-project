import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MinPlusOnly from '../components/MinPlusOnly';
import { emptyCart } from '../store/cart/actions';
import { cartDetails, totalCost } from '../store/selectors';

import Button from 'react-bootstrap/Button';

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(cartDetails);
  const total = useSelector(totalCost);

  const renderProductsInCart = () => {
    return cart === 'nothing' ? (
      <p>You have added nothing to your cart yet.</p>
    ) : (
      cart.map(({ name, amount, price, total, id }, i) => (
        <p key={i}>
          {name} <MinPlusOnly id={id} /> {amount}x €{price},- €{total},-
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
