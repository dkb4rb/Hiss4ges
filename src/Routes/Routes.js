import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Menu from "../components/Menu/Menu";

function Routes() {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={Menu} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
            </Switch>
        </BrowserRouter>
    )

}

export default Routes;