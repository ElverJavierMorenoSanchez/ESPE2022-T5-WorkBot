import React, { useState, useEffect } from "react";
import Product from "../components/ComponentsProductPage/Product";
import { GetProducts } from "../util/productAxios";
import "../styles/ProductPage.css";
import Cart from "../components/ComponentsCart/Cart";

function ProductPage() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const handleAddItem = (product) => {
    setCart([...cart, product]);
  };

  const emptyCart = () => {
    setCart([]);
  };

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
      <Cart cart={cart} emptyCart={emptyCart} />
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
            <Product
              key={index}
              product={product}
              handleAddItem={handleAddItem}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductPage;
