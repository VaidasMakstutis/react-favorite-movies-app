import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Reset from "./Components/Reset";
import Movies from "./Components/Movies";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/reset" element={<Reset />} />
           <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;