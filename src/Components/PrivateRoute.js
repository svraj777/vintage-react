import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./../context/user";
import Checkout from "./../Pages/Checkout";
import Login from "./../Pages/Login";

export default function PrivateRoute({ children, ...rest }) {
  const { user } = React.useContext(UserContext);

  return (
    <Route
      {...rest}
      render={() => {
        return user.token ? children : <Redirect to='/login'></Redirect>;
      }}></Route>
  );
}
