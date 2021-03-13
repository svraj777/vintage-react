import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Error from "./Pages/Error";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";

import Header from "./Components/Header";
import Alert from "./Components/Alert";
import PrivateRoute from "./Components/PrivateRoute";
import ScrollToBack from "./Components/ScrollToBack";
export default function App() {
  return (
    <>
      <Header />
      <ScrollToBack />
      <Alert />
      <Switch>
        <Route path='/about' component={About} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/cart' component={Cart} exact />
        <PrivateRoute path='/checkout' exact>
          <Checkout />
        </PrivateRoute>
        <Route path='/products' component={Products} exact />
        <Route path='/products/:id' component={ProductDetails} exact />
        <Route path='/' exact component={Home} />
        <Route path='*' exact component={Error} />
      </Switch>
    </>
  );
}
