import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";
// import { UserContext } from "../context/user";
import { UserContext } from "./../context/user";

export default function Login() {
  const history = useHistory();
  const { userLogIn, alert, showAlert } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("default");
  const [member, setMember] = useState(true);
  let isEmpty = !email || !password || !username || alert.show;
  const toggleMember = () => {
    setMember((prevMember) => {
      let member = !prevMember;
      member ? setUsername("default") : setUsername("");
      return member;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    showAlert({ msg: `please wait data is loading` });
    let response;
    if (member) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }
    if (response) {
      const {
        jwt: token,
        user: { username },
      } = response.data;

      const newUSer = { token, username };
      console.log(newUSer);
      userLogIn(newUSer);
      showAlert({ msg: `you are logged in ${username}` });
      history.push("/products");
    } else {
      showAlert({ msg: `error with log-in`, type: "danger" });
    }
  };
  return (
    <section className='form section'>
      <h2 className='section-title'>{member ? "sign in" : "register"}</h2>
      <form action='' className='login-form'>
        <div className='form-control'>
          <label htmlFor='email'>email</label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>password</label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {!member && (
          <div className='form-control'>
            <label htmlFor='username'>username</label>
            <input type='username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
        )}
        {isEmpty && <p className='form-empty'>please fill out all form fields</p>}
        {!isEmpty && (
          <button type='submit' className='btn btn-block btn-primary' onClick={handleSubmit}>
            submit
          </button>
        )}
        <p className='register-link'>
          {member ? "need to register" : "already a member"}
          <button type='button' onClick={toggleMember}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
}
