import React, { Component, ComponentDidMount, useState } from "react";
import axios from "axios";

import "./Register.css";

import Imgg from "../Image_Background/imgg";
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
  );
};

export default Register;
