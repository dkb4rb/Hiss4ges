import React from "react";

const Imgg = ({ imagen }) => {
  return (
    <>
      <div className="Img_container">
        <div className={imagen}></div>
      </div>
    </>
  );
};

export default Imgg;
