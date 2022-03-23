import React from "react";
import "./styles/FormReg.css"

function FormReg() {
	return (
		<form className="NewRegister">
			<input className='input inpname' placeholder='NAME' />
			<input className='input inpLastName' type="LAST NAME"/>
			<input className='inputinpEmail' type="E-MAIL"/>
			<input className='input inpNickName' type="NICK NAME"/>
			<input className='input inpDate' type="DATE OF BIRTH"/>
			<button className="conectGoogle" type="button">Conect With Google!</button>
			<button className="conectFace" type="button">Conect With Facebook!</button>
			{/* <p className="Forgotpsw">Forgot Your Password?</p> */}
		</form>
	)
}

export { FormReg }