import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { register, auth } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { RouteKey } from "../../navigation/router";

export interface IUserData {
  name: string;
  email: string;
  password: string;
  prevState: null;
}

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(loading) return
    if(user) navigate(RouteKey.Movies)
  }, [user, loading])
  
  const submitHandler:React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if(!name) alert("Please enter your name")
    register(name, email, password)
  }

  return (
    <Form className="mt-5" onSubmit={submitHandler}>
      <h3 className="mb-3 text-center">Create your account</h3>
      <Form.Group className="mb-2">
        <Form.Control type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </Form.Group>
      <Button className="me-2" variant="primary" type="submit">
        Sign Up
      </Button>
      <Link to={RouteKey.Index}> 
          <Button>
            Home
          </Button> 
      </Link>
    </Form>
  );
};

export default Register;