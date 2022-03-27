import React, { Component } from "react";
import "./Login.css";
import Imgg from "../../components/Image_Background/imgg";
import { FormLogin } from "./FormLogin";
import logo_hiss4g3s from "../../assets/img/Hiss4g3s_log.png";

class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <img className="logohi" src={logo_hiss4g3s} alt="Logo" />
        </div>
        <div className="container_Login">
          <div className="Login">
            <div className="Container_Buttoms"></div>
            <Imgg imagen={"Img_Background_Login"} />
            <FormLogin />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
