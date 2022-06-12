import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Form className="mt-5">
        <h3 className="mb-3 text-center">Login to your account</h3>
        <Form.Group className="mb-2">
          <Form.Control type="email" name="email" placeholder="E-mail" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button  className="mb-3" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div>
        <ul>
          <li>
            Don't have account? <Link to="/register"> Sign In</Link>
          </li>
          <li>
            Forgot password? <Link to="/reset"> Reset</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Login;