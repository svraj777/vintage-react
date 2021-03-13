// user context
import React, { useState } from "react";
export const UserContext = React.createContext();
function getDataFromStorage() {
  return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
}
export default function UserProvider({ children }) {
  const [user, setUser] = useState(getDataFromStorage);
  const userLogIn = (user) => {
    setUser(user);
    // setUser(newUSer);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const userLogOut = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem("user");
  };
  const [alert, setAlert] = useState({ show: false, msg: "", type: "success" });
  const showAlert = ({ msg, type = "success" }) => {
    setAlert({ show: true, msg, type });
  };
  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };
  return (
    <div>
      <UserContext.Provider value={{ userLogOut, userLogIn, user, showAlert, hideAlert, alert }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}
