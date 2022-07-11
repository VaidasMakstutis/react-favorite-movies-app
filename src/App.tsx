import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import MainRouter from "./navigation/MainRouter";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <MainRouter />
      </Router>
    </div>
  );
};

export default App;