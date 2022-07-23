import React, { useState, useEffect } from "react";
import ButtonOption from "../ComponentButton/ButtonOption";
import MenuProduct from "./MenuProduct";
import product from "../../img/products/Donas.jpg";
import { GetProducts } from "../../util/axios";

function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const product = await GetProducts();
      setProducts(product.data);

      console.log(products);
    }

    getProducts();
  }, []);

  return (
    <section className="menuIndex" id="menuIndex">
      <div className="title">
        <h2 className="titleText">
          NUESTROS <span>P</span>RODUCTOS
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <MenuProduct src={product} title="Donas" />
      <div className="title">
        <ButtonOption href="/products" className="btn" text="VER MÁS" />
      </div>
    </section>
  );
}

export default Menu;
