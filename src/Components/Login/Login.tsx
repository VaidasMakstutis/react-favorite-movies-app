import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth, signIn} from "../../services/authServices";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  const submitHandler = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      signIn(email, password);
  }
  
  useEffect(()=> {
      if(loading) return
      if(user) navigate("/movies")
  }, [user, loading, navigate])

  return (
    <>
      <Form className="mt-5" onSubmit={submitHandler}>
        <h3 className="mb-3 text-center">Login to your account</h3>
        <Form.Group className="mb-2">
          <Form.Control type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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