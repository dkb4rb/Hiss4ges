import React, { Component, ComponentDidMount, useState } from "react";

import axios from "axios";
import logo_hiss4g3s from "../../assets/img/Hiss4g3s_log.png";

import "./Register.css";
import RegistroLog from "../../assets/img/Registro-Log.gif";
import Imgg from "../../components/Image_Background/imgg";
import { FormReg } from "./FormRegister";

const DBurl = "http://localhost:3030/usuarios";

function test_db() {
  axios({
    method: "GET",
    url: DBurl,
  }).then((res) => console.log(res));
}

const Register = () => {
  const [form, setform] = useState([]);

  const handleChange = async (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div>
        <img className="logohi" src={logo_hiss4g3s} alt="Logo" />
      </div>
      <div className="container_Register">
        <div className="Register">
          <div className="Container_Buttoms"></div>
          <Imgg imagen={"Img_Background_Register"} />

          <FormReg handleChange={handleChange} form={form} setform={setform} />
          <button onClick={() => test_db()} type="button">
            test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
