import React from "react";
import { Header } from "../Header/Header";
import { LogButton } from "../login/LogButton";
import { RegButton } from "../login/RegButton";
import { Lorem } from "../login/Lorem";
import Routes from "../../Routes/Routes";
import "../styles/bodyHome.css";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="Container_Layouut">
        <div> Header</div>
        <Routes />

        <div className="Section">
         
        </div>

        <footer className="Foot">Este es el foot</footer>
      </div>
    </>
  );
};

export default Layout;
