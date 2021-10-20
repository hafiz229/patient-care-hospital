import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize firebase config
initializeAuthentication();
const auth = getAuth();

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  // state change for name
  const [name, setName] = useState("");
  // state change for email
  const [email, setEmail] = useState("");
  // state change for password
  const [password, setPassword] = useState("");
  // state change for erros
  const [error, setError] = useState("");
  // state change for is login
  const [isLogin, setIsLogin] = useState(false);

  // click handler for toggle login
  const toggleLogin = (e) => {
    setError(" ");
    setIsLogin(e.target.checked);
  };

  // click handler for name change
  const handleNameChange = (e) => {
    setError(" ");
    setName(e.target.value);
  };

  // click handler for email change
  const handleEmailChange = (e) => {
    setError(" ");
    setEmail(e.target.value);
  };

  // click handler for password change
  const handlePasswordChange = (e) => {
    setError(" ");
    setPassword(e.target.value);
  };

  // click handler for registration
  const handleRegistration = (e) => {
    setError(" ");
    e.preventDefault();

    if (email.length < 1) {
      setError("Empty email field");
      return;
    }

    if (password.length < 6) {
      setError("Password Must be at least 6 characters long");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain at least 2 upper cases");
      return;
    }
    isLogin ? processLogin(email, password) : registerNewUser(email, password);
  };

  // login existing user
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError(" ");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // register new user
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError(" ");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // set new user name
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // email verification on successful registration
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // email password reset
  const handleResetPassword = () => {
    if (email.length < 1) {
      setError("Empty email field");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container d-lg-flex align-items-center justify-content-center mb-3">
      <div className="col-lg-6">
        {/* toggle image base logged in or not */}
        <Image
          src={
            isLogin
              ? "https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
              : "https://image.freepik.com/free-vector/secure-login-concept-illustration_114360-4582.jpg"
          }
          fluid
        />
      </div>
      <div className="text-start col-lg-6">
        {/* heading for login & registration */}
        <h1>{isLogin ? "Sign in" : "Create an account"}</h1>
        <Form onSubmit={handleRegistration}>
          {/* full name for registration only */}
          {!isLogin && (
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                onBlur={handleNameChange}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>
          )}

          {/* // email address for both login & registration */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          {/* password for both login & registration */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          {/* error message for wrong input */}
          <div className="row mb-3 text-danger">{error}</div>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={toggleLogin}
              type="checkbox"
              label={
                isLogin
                  ? "New User? Create an Account (Uncheck here)"
                  : "Already have an account? (Check here)"
              }
            />
          </Form.Group>

          {/* toggle button name for login & registration */}
          <Button variant="dark" type="submit" className="fw-bold me-2">
            {isLogin ? "Sign in" : "Create account"}
          </Button>

          {/* reset password */}
          {isLogin && (
            <Button
              onClick={handleResetPassword}
              variant="dark"
              type="button"
              className="fw-bold"
            >
              Reset Password
            </Button>
          )}
        </Form>
        <p className="fw-bold pt-2">OR</p>
        <Button
          onClick={signInUsingGoogle}
          variant="dark"
          className="py-2 px-5 shadow rounded fw-bold"
        >
          {" "}
          <span className="me-1">
            <img
              style={{ height: "20px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
          </span>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
