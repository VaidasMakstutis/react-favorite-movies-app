import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouteKey } from "./router";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Reset from "../Components/Reset";
import Movies from "../Components/Movies";

const MainRouter = () => {
  return (
      <Routes>
        <Route path={RouteKey.Index} element={<Login />} />
        <Route path={RouteKey.Register} element={<Register />} />
        <Route path={RouteKey.Reset} element={<Reset />} />
        <Route path={RouteKey.Movies} element={<Movies />} />
      </Routes>
  );
};

export default MainRouter;