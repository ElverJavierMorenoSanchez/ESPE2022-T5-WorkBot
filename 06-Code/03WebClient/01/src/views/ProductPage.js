import React from "react";
import Product from "../components/ComponentsProductPage/Product";
import product from "../img/products/Donas.jpg";
import "../styles/ProductPage.css";

function ProductPage() {
  return (
    <>
      <div id="header"></div>
      <div className="products">
        <h2 className="titleText">
          NUESTROS <span>P</span>RODUCTOS
        </h2>
      </div>
      <section className="productsList" id="productsList">
        <div className="title">
          <h2 className="titleText">
            <span></span>
          </h2>
        </div>
        <div class="content">
          <Product
            src={product}
            name="Donas"
            price="0.35"
            description="Ricas Donas Redondas"
          />
          <Product
            src={product}
            name="Donas"
            price="0.35"
            description="Ricas Donas Redondas"
          />
          <Product
            src={product}
            name="Donas"
            price="0.35"
            description="Ricas Donas Redondas"
          />
          <Product
            src={product}
            name="Donas"
            price="0.35"
            description="Ricas Donas Redondas"
          />
          <Product
            src={product}
            name="Donas"
            price="0.35"
            description="Ricas Donas Redondas"
          />
          <Product
            src={product}
            name="Donas"
            price="0.35"
            description="Ricas Donas Redondas"
          />
          <Product
            src={product}
            name="Donas"
            price="0.35"
            description="Ricas Donas Redondas"
          />
          <Product
            src={product}
            name="Donas"
            price="0.35"
            description="Ricas Donas Redondas"
          />
          <Product
            src={product}
            name="Donas"
            price="0.35"
            description="Ricas Donas Redondas"
          />
        </div>
      </section>
    </>
  );
}

export default ProductPage;
