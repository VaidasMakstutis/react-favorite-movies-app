import { Navbar, NavDropdown } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../services/authServices";
import * as userServices from "../../services/userServices";
import { IUserData } from "../Register/Register";

const User = () => {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate("/");
      return;
    }
    userServices.getUserData(user, setUserData);
  }, [user, loading, userData, navigate]);

  return (
    <Navbar.Collapse>
      {user && (
        <NavDropdown title={userData?.name}>
          <NavDropdown.Item>{userData?.email}</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      )}
    </Navbar.Collapse>
  );
};

export default User;
