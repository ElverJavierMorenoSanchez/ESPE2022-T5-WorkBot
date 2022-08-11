import React from "react";
import "../../styles/TopBar.css";
import ButtonOption from "../ComponentButton/ButtonOption";
import ButtonOptionMenu from "../ComponentButton/ButtonOptionMenu";
import { Link } from "react-router-dom";

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function TopBar() {
  const toggleMenu = () => {};

  return (
    <header>
      <Link to="/" className="logo">
        Dulcemente Pasteles<span>.</span>
      </Link>

      <ul className="navigation">
        <ButtonOptionMenu
          name="Productos"
          href="/admin/products"
          toggleMenu={toggleMenu()}
        />
        <ButtonOptionMenu
          name="Usuarios"
          href="/admin/users"
          toggleMenu={toggleMenu()}
        />
        <ButtonOptionMenu
          name="Recibos"
          href="/admin/invoices"
          toggleMenu={toggleMenu()}
        />
        <ButtonOptionMenu
          name="Tarjetas De Crédito"
          href="/admin/creditCards"
          toggleMenu={toggleMenu()}
        />
      </ul>

      <ButtonOption href="/login" className="singIn" text="CERRAR SESIÓN" />
    </header>
  );
}

export default TopBar;
