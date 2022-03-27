import React from "react";
import { redirect } from "../../helpers/helpredirect";
import "./Home.css";

function LogButton() {
  return (
    <button onClick={() => redirect("./Login")} type="button" class="btnn tras">
      Login
    </button>
  );
}

export { LogButton };
