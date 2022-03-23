import React from "react";
import "./Menu.css";
import Imgg from "../Image_Background/imgg";
import { Lorem } from "../login/Lorem";
import { LogButton } from "./LogButton";
import { RegButton } from "./RegButton"

const Menu = () => {
  return (
    <div className="container_menu">
      <div className="Menu">
        <div className="Menu_buttons">
          <LogButton />
          <h2 className="middle">Or</h2>
          <RegButton />
        </div>
        <div className="Menu_Message">
          <Lorem />
        </div>

        <Imgg imagen={"Img_Background_Menu"} />
      </div>
    </div>
  );
};

export default Menu;
