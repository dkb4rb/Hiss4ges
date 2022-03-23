import React from "react";
import { redirect } from "../../helpers/helpredirect";
import "./Menu.css";
function RegButton() {
  return (
    <button
      onClick={() => redirect("./Register")}
      type="button"
      class="butt reg"
    >
      Register
    </button>
  );
}

export { RegButton };
