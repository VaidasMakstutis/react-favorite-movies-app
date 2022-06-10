import React from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Form className="mt-5">
      <h3 className="mb-3 text-center">Login to your account</h3>
      <Form.Group className="mb-2">
        <Form.Control type="email" name="email" placeholder="E-mail" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;