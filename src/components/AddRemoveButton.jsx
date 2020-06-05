import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../store/cart/actions';

import styled from 'styled-components';

export default function AddRemoveButton({ id }) {
  const dispatch = useDispatch();
  const innerTextButton = 'add to cart';

  // const addToCart = (id) => {
  //   console.log(id, 'plus 1');
  // };
  // const removeFromCart = (id) => {
  //   console.log(id, 'minus 1');
  // };

  return (
    <AddRemoveLine>
      <Span onClick={() => dispatch(removeFromCart(id))}>-</Span>
      {innerTextButton}
      <Span onClick={() => dispatch(addToCart(id))}>+</Span>
    </AddRemoveLine>
  );
}

/* STYLING */
const AddRemoveLine = styled.div`
  margin-top: 2rem;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
