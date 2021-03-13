import React, { Fragment, useContext } from "react";
import CartLink from "./CartLink";
import { Link } from "react-router-dom";
import { UserContext } from "./../../context/user";

export default function CartItem({ CartData }) {
  const { cart, total } = CartData;
  const { user } = useContext(UserContext);
  return (
    <section className='cart-items section'>
      <h2>your cart</h2>
      {cart.map((item) => {
        return <CartLink key={item.key} CartData={item} />;
      })}
      <h2>total : $ {total}</h2>
      {!user.token ? (
        <Link className='btn btn-primary btn-block' to='/login'>
          login
        </Link>
      ) : (
        <Link className='btn btn-primary btn-block' to='/checkout'>
          checkout
        </Link>
      )}
    </section>
  );
}
