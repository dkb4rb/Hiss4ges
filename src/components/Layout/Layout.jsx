import React from "react";
import Routes from "../../Routes/Routes";
import logo_hiss4g3s from "../../assets/img/Hiss4g3s_log.png";

import "../styles/bodyHome.css";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="Container_Layouut">
        <div>
          <img className="logohi" src={logo_hiss4g3s} alt="Logo" />
        </div>
        <Routes />

        <div className="Section"></div>
        <div className="Foot">
          <footer>HiSsageS Footer</footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
