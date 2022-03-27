import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import "./Register.css";

function FormReg({ handleChange, form, setform }) {
  return (
    <form className="NewRegister">
      <div className="icon_Register">
        <FaUserSecret />
        <div className="Icon_Add">
          <IoIosAddCircle />
        </div>
      </div>

      <input
        autoComplete="off"
        onChange={handleChange}
        name="username"
        className="inputReg inpname"
        placeholder="Name"
      />
      <input
        autoComplete="off"
        onChange={handleChange}
        name="lastname"
        className="inputReg inpLastName"
        placeholder="Last Name"
      />
      <input
        autoComplete="off"
        onChange={handleChange}
        name="nickname"
        className="inputReg inpNickName"
        placeholder="Nick Name"
      />
      <input
        autoComplete="off"
        onChange={handleChange}
        name="user_mail"
        className="inputReg inputinpEmail"
        placeholder="E-Mail"
      />
      <input
        autoComplete="off"
        onChange={handleChange}
        name="user_pass"
        className="inputReg inpPassword"
        type="password"
        placeholder="Password"
      />
      <input
        autoComplete="off"
        onChange={handleChange}
        name="date_birth"
        className="inputReg inpDate"
        type="date"
        placeholder="Date Of Birth"
      />
      <button className="btnn_register" type="button" placeholder="button">
        Register!
      </button>
      {console.log(form)}
    </form>
  );
}

export { FormReg };
