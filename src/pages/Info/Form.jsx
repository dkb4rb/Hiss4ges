import React from "react";
import "./styles/Form.css"

function Form() {
	return (
		<form className="FormSquare">
			<input className='inp inpusr' placeholder='USERNAME' />
			<input className='inp inppsw' type="password" placeholder='PASSWORD' />
			<button className="JoinButton" type="button">Let's Go!</button>
			<p className="Forgotpsw">Forgot Your Password?</p>
		</form>
	)
}

export { Form }