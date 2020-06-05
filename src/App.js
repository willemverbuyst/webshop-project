import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details" component={ProductDetailsPage} />
        <Route path="/cart" exact component={CartPage} />
      </Switch>
    </div>
  );
}

export default App;
