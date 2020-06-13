import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../store/cart/actions';

import styled from 'styled-components';

export default function MinPlusOnly({ id }) {
  const dispatch = useDispatch();

  return (
    <MinPlusWrapper>
      <Span onClick={() => dispatch(removeFromCart(id))}>-</Span>
      <Span onClick={() => dispatch(addToCart(id))}>+</Span>
    </MinPlusWrapper>
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

const MinPlusWrapper = styled.div`
  width: 3rem;
  display: flex;
  justify-content: space-around;
  align-self: center;
`;
