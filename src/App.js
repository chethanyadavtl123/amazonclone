import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          {/* <Route path="/orders">
            <Orders />
          </Route> */}
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
