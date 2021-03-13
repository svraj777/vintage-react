import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./../context/user";
import { CartContext } from "./../context/cart";
import Login from "./../Pages/Login";

export default function LoginLink() {
  const { user, userLogOut } = useContext(UserContext);
  const { clearCart } = useContext(CartContext);
  if (user.token) {
    return (
      <button
        className='login-btn'
        onClick={() => {
          userLogOut();
          clearCart();
        }}>
        Logout
      </button>
    );
  }
  return <Link to='/login'>Login</Link>;
}
