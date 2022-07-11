import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth, signIn} from "../../services/authServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { RouteKey } from "../../navigation/router";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  const submitHandler:React.FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();
      signIn(email, password);
  }
  
  useEffect(()=> {
      if(loading) return
      if(user) navigate(RouteKey.Movies)
  }, [user, loading])

  return (
    <>
      <Form className="mt-5" onSubmit={submitHandler}>
        <h3 className="mb-3 text-center">Login to your account</h3>
        <Form.Group className="mb-2">
          <Form.Control type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </Form.Group>
        <Button  className="mb-3" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div>
        <ul>
          <li>
            Don't have account? <Link to={RouteKey.Register}> Sign Up</Link>
          </li>
          <li>
            Forgot password? <Link to={RouteKey.Reset}> Reset</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Login;