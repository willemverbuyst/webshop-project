import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../store/cart/actions';

import styled from 'styled-components';

export default function MinPlusOnly({ id }) {
  const dispatch = useDispatch();

  return (
    <>
      <Span onClick={() => dispatch(removeFromCart(id))}>-</Span>
      <Span onClick={() => dispatch(addToCart(id))}>+</Span>
    </>
  );
}

const Span = styled.button`
  background-color: #333;
  color: #fff;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
