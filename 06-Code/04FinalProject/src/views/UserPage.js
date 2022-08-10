import "../styles/User.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ComponenInput from "../components/ComponentAddProduct/componentInput";
import Typography from "@mui/material/Typography";

const User = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    console.log(name, surname, address, city, phone, email, username, password);

    let token = await fetch("http://localhost:3017/auth/signUp", {
      method: "post",
      body: JSON.stringify({
        name,
        surname,
        address,
        city,
        phone,
        email,
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    token = await token.json();
    console.log(token);

    if (token.message) {
      alert(token.message);
    } else {
      localStorage.setItem("token", token.token);
      navigate("/home");
    }
  };

  return (
    <div className="bg">
      <h2>ADMINISTRAR USUARIOS</h2>
      <div className="container" style={{ marginTop: "50px" }}>
        <form onSubmit={handleSave}>
          <ComponenInput text="Nombre" setValue={setName} />
          <ComponenInput text="Apellido" setValue={setSurname} />
          <ComponenInput text="Dirección" setValue={setAddress} />
          <ComponenInput text="Ciudad" setValue={setCity} />
          <ComponenInput text="Telefono" setValue={setPhone} />
          <ComponenInput text="Usuario" setValue={setUsername} />
          <ComponenInput text="Email" setValue={setEmail} />
          <ComponenInput text="Contraseña" setValue={setPassword} />
          <button id="save" type="submit" name="save" className="btn btn-save">
            Registrarme
          </button>
        </form>
        <Typography variant="h7">
          ¿Ya una tienes cuenta? <Link to="/login">Ingresa aquí</Link>
        </Typography>
        <div style={{ width: "30px" }}>""</div>
      </div>
    </div>
  );
};

export default User;
