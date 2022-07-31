import React, { useState } from "react";
import cogoToast from "cogo-toast";
import useAuth from "../../hooks/useAuth.jsx";
import { LoginMethod } from "../../API/login.api";
import { getDataFromResult } from "../../utils";

let user = process.env.REACT_APP_USERNAME;
let pass = process.env.REACT_APP_PASSWORD;
const Login = ({ login: _login }) => {
  const [auth, setAuth] = useState(false);
  const { login, authlogin } = useAuth();

  async function authenticate(e) {
    e.preventDefault();
    // let username = e.target.username.value; //awesome strategy
    // let password = e.target.password.value;

    const { username, password } = e.target;

    const payLoad = {
      email: username.value,
      password: password.value,
    };

    const data = await LoginMethod(payLoad);

    if (data.ok) {
      localStorage.setItem("bearer", getDataFromResult(data).access_token);
      cogoToast.success("Successfully Logged in");
      login();
    } else {
      cogoToast.error("Something unexpected occured");
    }

    // if (username.value === user && password.value === pass) {
    //   //   setAuth(true);
    //   login();
    //   cogoToast.success("Successfully Logged in");
    // } else {
    //   console.log("wrong pass");
    //   cogoToast.error("Login failed");
    // }
    e.target.username.value = "";
    e.target.password.value = "";
  }
  return (
    <form onSubmit={authenticate}>
      {auth && <p>your are logged In</p>}
      <h1>Login Form</h1>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
      <br />
      <label htmlFor="username">Password</label>
      <input type="password" name="password" id="password" />
      <br />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
