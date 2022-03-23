import React from "react";
import { redirect } from "../../helpers/helpredirect";
import "./Menu.css";

function LogButton() {
  return (
    <button onClick={() => redirect("./Login")} type="button" class="butt log">
      Login
    </button>
  );
}

export { LogButton };
