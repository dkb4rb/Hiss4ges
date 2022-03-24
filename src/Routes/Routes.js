import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Menu from "../components/Menu/Menu";
import Home from "../components/Home/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
