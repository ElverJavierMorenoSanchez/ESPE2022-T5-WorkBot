import "../styles/Produc.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ComponenInput from "../components/ComponentAddProduct/componentInput";
import { postProducts } from "../util/axios";

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

    const product = await postProducts({
      id,
      name,
      price,
      quantity,
      description,
      imgUrl,
    });
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
