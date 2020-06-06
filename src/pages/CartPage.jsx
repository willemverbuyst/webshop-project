import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import { emptyCart } from '../store/cart/actions';

export default function CartPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your shopping cart</h2>
      <Button onClick={() => dispatch(emptyCart())}>Empt Cart</Button>
    </div>
  );
}
