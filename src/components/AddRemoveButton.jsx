import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart } from '../store/cart/actions';
import { selectedProducts } from '../store/cart/selectors';

import styled from 'styled-components';

export default function AddRemoveButton({ id }) {
  const dispatch = useDispatch();
  const productData = useSelector(selectedProducts);

  const renderMinPlus = () => {
    return (
      <>
        <div onClick={() => dispatch(removeFromCart(id))}>
          <i class="fas fa-minus-circle"></i>
        </div>
        {`${productData
          .filter((product) => product.id === id)
          .map((product) => product.amount)}
        in cart`}
        <div onClick={() => dispatch(addToCart(id))}>
          <i class="fas fa-plus-circle"></i>
        </div>
      </>
    );
  };

  const renderPlus = () => {
    return (
      <>
        add to cart
        <div onClick={() => dispatch(addToCart(id))}>
          <i class="fas fa-plus-circle"></i>
        </div>
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
