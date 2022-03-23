import React from "react";
import Routes from "../../Routes/Routes";
import "../styles/bodyHome.css";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="Container_Layouut">
        <div> <img className="logohi" src="https://i.ibb.co/VvL5WGC/Logo-Hi-Ssage-S.png" alt="Logo"/> </div>
        <Routes />

        <div className="Section">

        </div>
        <div className="Foot">
          <footer>Este es el foot</footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
