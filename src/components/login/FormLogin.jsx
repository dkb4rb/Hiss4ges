import React from "react";
import "./Login.css"


function FormLogin() {
	return (
		<form className="FormSquare">
			<input className='inp inpusr' placeholder='USERNAME' />
			<input className='inp inppsw' type="password" placeholder='PASSWORD' />
			<button type="button" className="JoinButton">Let's Go!</button>
			<p className="Forgotpsw">Forgot Your Password?</p>
		</form>
	)
}

export { FormLogin }