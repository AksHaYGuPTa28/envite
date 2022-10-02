/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/home";
import Create from "../pages/create/create";

export const renderRoutes = () => (
  <>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/create">
      <Create />
    </Route>
  </>
);
export default renderRoutes;
