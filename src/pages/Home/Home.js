import React from "react";
import "./Home.css";
import Imgg from "../../components/Image_Background/imgg";
import { Lorem } from "./Lorem";
import { LogButton } from "./LogButton";
import { RegButton } from "./RegButton";
import logo_hiss4g3s from "../../assets/img/Hiss4g3s_log.png";

const Home = () => {
  return (
    <div>
      <div>
        <img className="logohi" src={logo_hiss4g3s} alt="Logo" />
      </div>
      <div className="Container_Home">
        <div className="Home">
          <div className="Home_buttons">
            <LogButton />
            <h2 className="middle">Or</h2>
            <RegButton />
          </div>
          <div className="Home_Message">
            <Lorem />
          </div>

          <Imgg imagen={"Img_Background_Menu"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
