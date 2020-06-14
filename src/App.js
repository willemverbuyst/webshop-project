import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { selectDarkMode } from './store/darkMode/selectors';

function App() {
  const darkMode = useSelector(selectDarkMode).darkMode;

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products/:id" component={ProductDetailsPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
