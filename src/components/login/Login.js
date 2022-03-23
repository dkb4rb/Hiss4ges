import React, { Component } from "react";
import './Login.css'
import Imgg from "../Image_Background/imgg";
import { FormLogin } from "./FormLogin"


class Login extends Component {

    render() {
        return (
            <div className="container_Login">
                <div className="Login">
                    <div className="Container_Buttoms"></div>
                    <Imgg imagen={"Img_Background_Login"} />
                    <FormLogin />
                </div>

            </div>

        )
    }

}

export default Login;