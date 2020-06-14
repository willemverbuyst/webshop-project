import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Btn from './Btn';
import DarkModeToggle from './DarkModeToggle';

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
      <DisplayName>
        <Btn
          onClick={() => onClick('/login')}
          variant="light"
          className="ml-3"
          text="Login"
        />
        <Btn
          onClick={() => onClick('/signup')}
          variant="light"
          className="ml-3"
          text="Sign Up"
        />
      </DisplayName>
    ) : (
      <DisplayName>
        <div>
          <h4 className="text-white">Hello {user}</h4>
        </div>
        <Btn
          onClick={() => dispatch(logout())}
          variant="light"
          className="ml-3"
          text="Logout"
        />
      </DisplayName>
    );
  };

  return (
    <Navbar
      className="bg-info justify-content-between"
      style={{ height: '4rem' }}
    >
      <Link to="/" className="text-white">
        Italian trips
      </Link>

      <div className="text-white">
        {amountInCart} products in{' '}
        <Link to="/cart" className="text-white">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
      <div>{renderNameOrButton()}</div>
      <DarkModeToggle />
    </Navbar>
  );
}

const DisplayName = styled.div`
  display: flex;
`;
