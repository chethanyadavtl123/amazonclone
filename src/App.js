import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* <Route path="/orders">
            <Header />
            <Orders />
          </Route> */}
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/checkout">
            <Header />
            {/* <Checkout /> */}
            <h1>Checkout Page</h1>
          </Route>
          {/* <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
