import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MinPlusOnly from '../components/MinPlusOnly';
import { emptyCart } from '../store/cart/actions';
import { selectAuth } from '../store/auth/selectors';
import { cartDetails, totalCost } from '../store/selectors';

import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(cartDetails);
  const total = useSelector(totalCost);
  const loggedInStatus = useSelector(selectAuth).me;

  const checkStatus = () => {
    if (cart === 'nothing') {
      console.log('Your cart is empty');
    } else if (!loggedInStatus) {
      alert('Please log in');
    } else {
      alert('Time to pay');
    }
  };

  const renderProductsInCart = () => {
    return (
      <div style={{ marginTop: '4rem' }}>
        {cart === 'nothing' ? (
          <p>You have added nothing to your cart yet.</p>
        ) : (
          cart.map(({ title, amount, price, total, id }, i) => (
            <Line key={i}>
              <div>{title}</div>
              <MinPlusOnly id={id} />
              <div>{amount}x</div>
              <div>€{price},-</div>
              <div>€{total},-</div>
            </Line>
          ))
        )}
      </div>
    );
  };

  return (
    <div>
      <h2>Your shopping cart</h2>
      {renderProductsInCart()}
      {total ? <div>Total: €{total},-</div> : ''}
      <Button variant="light" onClick={() => dispatch(emptyCart())}>
        Empt Cart
      </Button>
      <Button variant="info" onClick={checkStatus}>
        Buy
      </Button>
    </div>
  );
}

const Line = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 350px 50px 100px 100px 100px;
`;
