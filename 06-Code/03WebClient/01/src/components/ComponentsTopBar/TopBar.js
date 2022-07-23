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
        <ButtonOptionMenu name="Inicio" href="/" toggleMenu={toggleMenu()} />
        <ButtonOptionMenu
          name="Productos"
          href="/products"
          toggleMenu={toggleMenu()}
        />
        <ButtonOptionMenu name="Carta Menú" href="" toggleMenu={toggleMenu()} />
        <ButtonOptionMenu
          name="Sobre Nosotros"
          href=""
          toggleMenu={toggleMenu()}
        />
        <ButtonOptionMenu
          name="Contactanos"
          href=""
          toggleMenu={toggleMenu()}
        />
      </ul>

      <ButtonOption href="" className="singIn" text="INICIAR SESIÓN" />
    </header>
  );
}

export default TopBar;

/*
function uploadContent(url, elemento) {
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    elemento.innerHTML = request.responseText;
}

uploadContent("jsps/header.jsp", document.querySelector('#header'));
uploadContent("jsps/footer.jsp", document.querySelector('#footer'));



function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}


let menuToggle = document.querySelector('.menuToggle');
let navigationUser = document.querySelector('.navigationUser');

menuToggle.click(function () {
    navigationUser.toggleClass('active');
});*/
