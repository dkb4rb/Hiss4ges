import React from "react";
import "./Register.css"

function FormReg() {
  return (
    <form className="NewRegister">
      <input className='inputReg inpname' placeholder='NAME' />
      <input className='inputReg inpLastName' placeholder="LAST NAME" />
      <input className='inputReg inpNickName' placeholder="NICK NAME" />
      <input className='inputReg inputinpEmail' placeholder="E-MAIL" />
      <input className='inputReg inpPassword' type="password" placeholder="PASSWORD" />
      <input className='inputReg inpDate' type="date" placeholder="DATE OF BIRTH" />
      <button className="RegButt" type="button" placeholder="button">Register!</button>
      <button className="conectGoogle" type="button" placeholder="button">Conect With Google!</button>
      <button className="conectFace" type="button" placeholder="button">Conect With Facebook!</button>
    </form>
  )
}

export { FormReg }
