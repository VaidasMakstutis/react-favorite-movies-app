import React from "react";
import { Form, Button } from "react-bootstrap";

const ResetPassword = () => {
  return (
      <Form className="mt-5">
        <h3 className="mb-3 text-center">Reset your password</h3>
        <Form.Group className="mb-2">
          <Form.Control type="email" name="email" placeholder="E-mail" />
        </Form.Group>
        <Button type="submit">Reset</Button>
      </Form>
  );
};

export default ResetPassword;