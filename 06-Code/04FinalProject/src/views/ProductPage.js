import React, { useState, useEffect } from "react";
import Product from "../components/ComponentsProductPage/Product";
import { GetProducts } from "../util/axios";
import "../styles/ProductPage.css";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const product = await GetProducts();
      setProducts(product);
    }

    getProducts();
  }, []);

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
        <div className="content">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductPage;
