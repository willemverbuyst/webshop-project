import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products/:id" component={ProductDetailsPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
