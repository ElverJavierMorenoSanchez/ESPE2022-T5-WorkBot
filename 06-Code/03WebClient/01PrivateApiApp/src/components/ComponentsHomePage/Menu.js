import React, { useState, useEffect } from "react";
import ButtonOption from "../ComponentButton/ButtonOption";
import MenuProduct from "./MenuProduct";
import { GetProducts } from "../../util/axios";

function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const product = await GetProducts();
      setProducts(product);
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
      <div className="content">
        {products.map((product, index) => {
          if (index < 7)
            return (
              <MenuProduct
                key={index}
                src={product.imgUrl}
                title={product.name}
              />
            );
        })}
      </div>

      <div className="title">
        <ButtonOption href="/products" className="btn" text="VER MÁS" />
      </div>
    </section>
  );
}

export default Menu;
