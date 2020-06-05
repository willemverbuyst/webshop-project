import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

import { selectAmountProductsInCart } from '../store/cart/selectors';

export default function Header() {
  const amountInCart = useSelector(selectAmountProductsInCart);

  return (
    <Navbar className="bg-info justify-content-between">
      <Navbar.Brand href="/" className="text-white">
        Italian trips
      </Navbar.Brand>
      <div className="text-white">{amountInCart} products in cart</div>
    </Navbar>
  );
}
