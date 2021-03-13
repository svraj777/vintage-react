import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ProductProvider from "./context/products";
import CartProvider from "./context/cart";
import UserProvider from "./context/user";

ReactDOM.render(
  <Router>
    <CartProvider>
      <ProductProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ProductProvider>
    </CartProvider>
  </Router>,
  document.getElementById("root")
);
