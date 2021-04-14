import React, { useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory(); // programmitaclly changes url

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login__main">
      <div className="login__left">
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
        <img
          src="http://www.optovisuals.com/public/front/images/login.png"
          alt=""
        />
      </div>
      <div className="login__right">
        <form>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            By continuing, you agree to Flipkart's Terms of Use and Privacy
            Policy.
          </p>
          <button onClick={signIn} type="submit">
            Login
          </button>
        </form>
        <label>OR</label>
        <h4 onClick={register}>New to Flipkart? Create an account</h4>
      </div>
    </div>
  );
}

export default Login;
