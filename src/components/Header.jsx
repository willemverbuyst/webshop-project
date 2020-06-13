import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';

import Btn from './Btn';

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
      <Btn
        onClick={() => onClick('/login')}
        variant="light"
        className="ml-3"
        text="Login"
      />
    ) : (
      <>
        <h4 className="text-white">Hello {user}</h4>
        <Btn
          onClick={() => dispatch(logout())}
          variant="light"
          className="ml-3"
          text="Logout"
        />
      </>
    );
  };

  return (
    <Navbar fixed="top" className="bg-info justify-content-between">
      <Link to="/" className="text-white">
        Italian trips
      </Link>
      {renderNameOrButton()}
      <div className="text-white">
        {amountInCart} products in{' '}
        <Link to="/cart" className="text-white">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </Navbar>
  );
}
