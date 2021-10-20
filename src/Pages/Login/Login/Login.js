import React from "react";
import { Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container d-lg-flex align-items-center justify-content-center mb-3">
      <div className="col-lg-6">
        <Image
          src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
          fluid
        />
      </div>
      <div className="text-start col-lg-6">
        <h1>Sign in</h1>
        <p>
          New user?{" "}
          <Link className="text-decoration-none" to="/register">
            Create an account
          </Link>
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="dark" type="submit" className="fw-bold">
            Sign In
          </Button>
        </Form>
        <p className="fw-bold pt-2">OR</p>
        <Button variant="dark" className="py-2 px-5 shadow rounded fw-bold">
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
