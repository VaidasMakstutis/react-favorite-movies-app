import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ResetPassword from "./Components/ResetPassword/ResetPassword";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/reset" element={<ResetPassword/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;