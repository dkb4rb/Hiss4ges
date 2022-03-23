import React from "react";
import { BrowserRouter, Switch,  Route } from 'react-router-dom';
import Login from "../components/login/Login";
import Menu from "../components/Menu/Menu";

function Routes(){

    return(

        
        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={Menu}/>
                <Route exact path="/Login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
 
}

export default Routes;