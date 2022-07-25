import "../styles/Produc.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ComponenInput from "../components/ComponentAddProduct/componentInput";

const Product = () => {
  const navigate = useNavigate();

  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    console.log(id, name, price, quantity, description, imgUrl);

    let product = await fetch("http://3.86.165.121:3017/products", {
      method: "post",
      body: JSON.stringify({
        id,
        name,
        category,
        price,
        quantity,
        description,
        imgUrl,
      }),
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("token"),
      },
    });
    product = await product.json();
    console.log(product);

    if (product.message) {
      alert(product.message);
    } else {
      alert("Producto Guardado Correctamente");
    }
  };

  return (
    <div className="bg">
      <h2>ADMINISTRAR PRODUCTOS</h2>
      <div className="container">
        <form onSubmit={handleSave}>
          <ComponenInput text="ID Producto" setValue={setId} />
          <ComponenInput text="Nombre" setValue={setName} />
          <ComponenInput text="Categoria" setValue={setCategory} />
          <ComponenInput text="Precio" setValue={setPrice} />
          <ComponenInput text="Cantidad" setValue={setQuantity} />
          <ComponenInput text="Desripción" setValue={setDescription} />
          <ComponenInput text="Imagen" setValue={setImgUrl} />
          <button id="save" type="submit" name="save" className="btn btn-save">
            GUARDAR
          </button>
        </form>
        <button
          id="exit"
          name="exit"
          className="btn btn-exit"
          onClick={() => {
            navigate("/home");
          }}
        >
          SALIR
        </button>
      </div>
    </div>
  );
};

export default Product;
