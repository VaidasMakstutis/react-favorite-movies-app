import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/authServices";

const Reset = () => {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  const submitHandler = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      if(!email) alert('Please enter your e-mail')
      resetPassword(email);
      navigate("/");
  }

  return (
    <>
      <Form className="mt-5" onSubmit={submitHandler}>
        <h3 className="mb-3 text-center">Reset your password</h3>
        <Form.Group className="mb-2">
          <Form.Control type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
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

export default Reset;