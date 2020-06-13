import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { selectAmountProductsInCart } from '../store/cart/selectors';
import { selectAuth } from '../store/auth/selectors';
import { logout } from '../store/auth/actions';

export default function Header() {
  const amountInCart = useSelector(selectAmountProductsInCart);
  const user = useSelector(selectAuth).me;
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = (goto) => {
    history.push(goto);
  };

  const renderNameOrButton = () => {
    return !user ? (
      <Button
        onClick={() => onClick('/login')}
        variant="light"
        className="ml-3"
      >
        Login
      </Button>
    ) : (
      <>
        <h2 className="text-white">Hello {user}</h2>
        <Button
          onClick={() => dispatch(logout())}
          variant="light"
          className="ml-3"
        >
          Logout
        </Button>
      </>
    );
  };

  return (
    <Navbar className="bg-info justify-content-between">
      <Link to="/" className="text-white">
        Italian trips
      </Link>
      {renderNameOrButton()}
      <div className="text-white">
        {amountInCart} products in{' '}
        <Link to="/cart" className="text-white">
          cart
        </Link>
      </div>
    </Navbar>
  );
}
