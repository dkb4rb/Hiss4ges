import React from "react";
import { redirect } from "../../helpers/helpredirect";
import "./Home.css";
function RegButton() {
  return (
    <button
      onClick={() => redirect("./Register")}
      type="button"
      class="btnn tras"
    >
      Register
    </button>
  );
}

export { RegButton };
