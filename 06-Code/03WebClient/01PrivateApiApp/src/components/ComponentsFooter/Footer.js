import React from "react";
import ButtonOptionMenu from "../ComponentButton/ButtonOptionMenu";
import "../../styles/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="sec aboutUs">
            <h2>ACERCA DE NOSOTROS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nihil inventore fuga eum sequi quo quos reprehenderit,
              dicta incidunt nulla laborum amet cupiditate debitis doloremque.
              Nostrum ut enim maxime voluptates?
            </p>
            <ul className="sci">
              <ButtonOptionMenu
                href=""
                icon={
                  <span className="icon">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </span>
                }
              />
              <ButtonOptionMenu
                href=""
                icon={
                  <span className="icon">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </span>
                }
              />
              <ButtonOptionMenu
                href=""
                icon={
                  <span className="icon">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </span>
                }
              />
              <ButtonOptionMenu
                href=""
                icon={
                  <span className="icon">
                    <ion-icon name="logo-tiktok"></ion-icon>
                  </span>
                }
              />
            </ul>
          </div>

          <div className="sec quickLinks">
            <h2>ENLACES ÚTILES</h2>
            <ul>
              <ButtonOptionMenu name="Acerca" href="" />
              <ButtonOptionMenu name="FAQ" href="" />
              <ButtonOptionMenu name="Privacidad" href="" />
              <ButtonOptionMenu name="Ayuda" href="" />
              <ButtonOptionMenu name="Términos y Condiciones" href="" />
            </ul>
          </div>

          <div className="sec contactFooter">
            <h2>INFORMACIÓN DE CONTACTO</h2>
            <ul className="info">
              <ButtonOptionMenu
                href=""
                icon={
                  <span className="icon">
                    <ion-icon name="navigate-circle-sharp"></ion-icon>
                  </span>
                }
                name="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
              />
              <li>
                <span>
                  <ion-icon name="call-sharp"></ion-icon>
                </span>
                <p>
                  <a href="tel:09814523678">098 145 23678</a>
                  <br />
                  <a href="tel:09814523678">098 145 23678</a>
                </p>
              </li>
              <li>
                <span>
                  <ion-icon name="mail-sharp"></ion-icon>
                </span>
                <p>
                  <a href="maito:dulcementepasteles@gmail.com">
                    dulcementepasteles@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrighText">
        <p>Copyright 2022 WorkBot. Todos los derechos reservados</p>
      </div>
    </>
  );
}

export default Footer;
