import React from "react";

function Product(props) {
  return (
    <div className="box">
      <div className="imgBx">
        <img src={props.src} alt="" />
        <div className="optionCart">
          <div className="button">
            <span className="icon">
              <ion-icon name="cart-outline"></ion-icon>
            </span>
            <h3>AÑADIR AL CARRITO</h3>
          </div>
        </div>
      </div>
      <div className="text">
        <h2 className="name">{props.name}</h2>
        <h3 className="price">$ {props.price}</h3>
        <h3 className="description">{props.description}</h3>
      </div>
    </div>
  );
}

export default Product;
