import React from "react";
import "./Register.css";

function FormReg({ handleChange, form, setform }) {
  return (
    <form className="NewRegister">
      <input
        autoComplete="off"
        onChange={handleChange}
        name="username"
        className="inputReg inpname"
        placeholder="NAME"
      />
      <input
        autoComplete="off"
        onChange={handleChange}
        name="lastname"
        className="inputReg inpLastName"
        placeholder="LAST NAME"
      />
      <input
        autoComplete="off"
        onChange={handleChange}
        name="nickname"
        className="inputReg inpNickName"
        placeholder="NICK NAME"
      />
      <input
        autoComplete="off"
        onChange={handleChange}
        name="user_mail"
        className="inputReg inputinpEmail"
        placeholder="E-MAIL"
      />
      <input
        autoComplete="off"
        onChange={handleChange}
        name="user_pass"
        className="inputReg inpPassword"
        type="password"
        placeholder="PASSWORD"
      />
      <input
        autoComplete="off"
        onChange={handleChange}
        name="date_birth"
        className="inputReg inpDate"
        type="date"
        placeholder="DATE OF BIRTH"
      />
      <button className="RegButt" type="button" placeholder="button">
        Register!
      </button>
      <button className="conectGoogle" type="button" placeholder="button">
        Conect With Google!
      </button>
      <button className="conectFace" type="button" placeholder="button">
        Conect With Facebook!
      </button>
      {console.log(form)}
    </form>
  );
}

export { FormReg };
