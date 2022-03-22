import React from "react";
import "./Menu.css";
import Imgg from "../Image_Background/imgg";
import { Lorem } from "../login/Lorem";

const Menu = () => {
  return (
    <div className="container_menu">
      <div className="Menu">
        <div className="Menu_buttons">
          <button type="button"> Log In</button>
          <h2 className="middle">Or</h2>
          <button type="button"> Register</button>
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
