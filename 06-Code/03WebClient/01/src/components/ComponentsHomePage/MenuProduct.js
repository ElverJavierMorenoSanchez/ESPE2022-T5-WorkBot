import React from "react";

function MenuProduct(props) {
  return (
    <div className="content">
      <div className="box">
        <div className="imgBx">
          <img src={props.src} alt="" />
        </div>
        <div className="text">
          <h3>{props.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default MenuProduct;
