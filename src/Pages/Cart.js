import React, { useContext } from "react";
import { CartContext } from "./../context/cart";
import EmptyCart from "./../Components/Cart/EmptyCart";
import CartItem from "./../Components/Cart/CartItem";

export default function Cart() {
  const context = useContext(CartContext);

  if (context.cart.length == 0) {
    return <EmptyCart />;
  }
  return <CartItem CartData={context} />;
}
