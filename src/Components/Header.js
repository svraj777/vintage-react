import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { UserContext } from "./../context/user";
import LoginLink from "./LoginLink";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
      <header className='header'>
        <img src={logo} alt='' className='logo' />
        <nav>
          <ul>
            <div>
              <li>
                <Link to=''>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/products'>Products</Link>
              </li>
            </div>
            <div>
              <li>
                <Link to='/Cart'>Cart</Link>
              </li>

              {user.token && (
                <li>
                  <Link to='/checkout'>checkout</Link>
                </li>
              )}
              <LoginLink />
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
