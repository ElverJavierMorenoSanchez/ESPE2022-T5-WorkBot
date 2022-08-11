import React from "react";

function Product(props) {
  const clic = () => {
    props.handleAddItem(props.product);
  };
  return (
    <div className="box">
      <div className="imgBx">
        <img src={props.product.imgUrl} alt="" />
        <div className="optionCart">
          <div className="button" onClick={clic}>
            <span className="icon">
              <ion-icon name="cart-outline"></ion-icon>
            </span>
            <h3>AÑADIR AL CARRITO</h3>
          </div>
        </div>
      </div>
      <div className="text">
        <h2 className="name">{props.product.name}</h2>
        <h3 className="price">$ {props.product.price}</h3>
        <h3 className="description">{props.product.description}</h3>
      </div>
    </div>
  );
}

export default Product;
