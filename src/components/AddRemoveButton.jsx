import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart } from '../store/cart/actions';
import { selectProducts } from '../store/cart/selectors';

import styled from 'styled-components';

export default function AddRemoveButton({ id }) {
  const dispatch = useDispatch();
  const productData = useSelector(selectProducts);

  const renderMinPlus = () => {
    return (
      <>
        <Span onClick={() => dispatch(removeFromCart(id))}>-</Span>
        {`${productData
          .filter((product) => product.id === id)
          .map((product) => product.amount)}
        in cart`}
        <Span onClick={() => dispatch(addToCart(id))}>+</Span>
      </>
    );
  };

  const renderPlus = () => {
    return (
      <>
        add to cart
        <Span onClick={() => dispatch(addToCart(id))}>+</Span>
      </>
    );
  };

  return (
    <AddOrRemove>
      {productData.find((product) => product.id === id)
        ? renderMinPlus()
        : renderPlus()}
    </AddOrRemove>
  );
}

/* STYLING */
const AddOrRemove = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 120px;
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
