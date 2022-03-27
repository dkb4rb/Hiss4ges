import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Menu" component={Menu} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
