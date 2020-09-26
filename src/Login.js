import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { AnimationWrapper } from "react-hover-animation";

function Login() {
  //allows to programatically change the URL
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    //prevent from refreshing
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <AnimationWrapper
            style={{
              cursor: onmousemove,
            }}
          >
            <button
              onClick={signIn}
              type="submit"
              className="login__signInButton"
            >
              Sign In
            </button>
          </AnimationWrapper>
        </form>

        <p>
          By signing-in you agree to Amazon's FAKE CLONE Condistions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <AnimationWrapper
          style={{
            cursor: onmousemove,
          }}
        >
          <button onClick={register} className="login__registerButton">
            Create your Amazon Account
          </button>
        </AnimationWrapper>
      </div>
    </div>
  );
}

export default Login;
