import React from "react";
import Routes from "../../Routes/Routes";
import Typical from "react-typical";
import logo_hiss4g3s from "../../assets/img/Hiss4g3s_log.png";

import "./Home.css";

const Layoutt = () => {
  return (
    <>
      <div className="Container_Layouut">
        <div className="Typical">
          <Typical
            steps={[
              "Hello ",
              1000,
              "Hello world!",
              800,
              "Welcome to Hissage ",
              800,
            ]}
            loop={Infinity}
            wrapper="p"
          />
          <h3>Nuestro team</h3>
          <Typical
            steps={[
              "Estefania Ruiz :smile ",
              1000,
              "Es nuesta Mejor",
              800,
              "Front-end Dev",
              800,
            ]}
            loop={Infinity}
            wrapper="p"
          />
          <Typical
            steps={[
              "Kevin Garcia",
              1000,
              "Que seria sin el como ",
              800,
              "Back-end Dev",
              800,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
        <div className="Section"></div>
        <div className="Foot">
          <footer>HiSsageS Footer</footer>
        </div>
      </div>
    </>
  );
};

export default Layoutt;
