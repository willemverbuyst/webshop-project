import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

import { selectAmountProductsInCart } from '../store/cart/selectors';

export default function Header() {
  const amountInCart = useSelector(selectAmountProductsInCart);

  return (
    <Navbar className="bg-info justify-content-between">
      <Link to="/" className="text-white">
        Italian trips
      </Link>
      <div className="text-white">
        {amountInCart} products in{' '}
        <Link to="/cart" className="text-white">
          cart
        </Link>
      </div>
    </Navbar>
  );
}
