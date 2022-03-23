import React, { Component } from "react";
import './Register.css'
import Imgg from "../Image_Background/imgg";
import { FormReg } from "./FormRegister"


class Register extends Component {

    render() {
        return (
            <div className="container_Register">
                <div className="Register">
                    <div className="Container_Buttoms"></div>
                    <Imgg imagen={"Img_Background_Register"} />
                    <FormReg />
                </div>

            </div>

        )
    }
}

export default Register;