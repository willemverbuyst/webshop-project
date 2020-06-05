import React from 'react';
import styled from 'styled-components';

export default function AddRemoveButton() {
  const innerTextButton = 'add to cart';
  return (
    <AddRemoveLine>
      <Span>-</Span>
      {innerTextButton}
      <Span>+</Span>
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
