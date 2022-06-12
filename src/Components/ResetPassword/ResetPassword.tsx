import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <Form className="mt-5">
        <h3 className="mb-3 text-center">Reset your password</h3>
        <Form.Group className="mb-2">
          <Form.Control type="email" name="email" placeholder="E-mail" />
        </Form.Group>
        <Button className="mb-3 me-2" type="submit">
          Reset
        </Button>
        <Link to="/"> 
          <Button className="mb-3">
            Home
          </Button> 
        </Link>
      </Form>
      <div>
        Don't have account? <Link to="/register">Register</Link>
      </div>
    </>
  );
};

export default ResetPassword;