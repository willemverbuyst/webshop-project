import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../store/cart/actions';

import styled from 'styled-components';

export default function MinPlusOnly({ id }) {
  const dispatch = useDispatch();

  return (
    <MinPlusWrapper>
      <div onClick={() => dispatch(removeFromCart(id))}>
        <i className="fas fa-minus-circle"></i>
      </div>
      <div onClick={() => dispatch(addToCart(id))}>
        <i className="fas fa-plus-circle"></i>
      </div>
    </MinPlusWrapper>
  );
}

const MinPlusWrapper = styled.div`
  width: 3rem;
  display: flex;
  justify-content: space-around;
  align-self: center;
`;
