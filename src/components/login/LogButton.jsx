import React from "react"
import ReactDOM from 'react-dom';
import "../styles/Buttons.css"
import Info from "../Info/Info"
import "../Info/styles/bodyLogin.css"
function LogButton() {
	function DataForm () {
		ReactDOM.render(
		<Info />,
		document.getElementById('root')
		);
	}
	return (
		<button type="button" class="Login hoverLogin" onClick={DataForm}>Login</button>
	)
}

export { LogButton }
