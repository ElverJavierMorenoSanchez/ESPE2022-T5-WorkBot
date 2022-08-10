import React from "react";
import ButtonOptionMenu from "../ComponentButton/ButtonOptionMenu";

function LoginOptions() {
  return (
    <>
      <div className="buttonLogin"></div>
      <div className="navigationUser">
        <div className="userBx">
          <div className="imgBx"></div>
          <p className="username"> </p>
        </div>
        <div className="menuToggle"></div>

        <ul className="menu">
          <ButtonOptionMenu
            href=""
            icon={<ion-icon name="person-outline"></ion-icon>}
            name="Mi perfil"
          />
          <ButtonOptionMenu
            href=""
            icon={<ion-icon name="notifications-outline"></ion-icon>}
            name="Notificaciones"
          />
          <ButtonOptionMenu
            href=""
            icon={<ion-icon name="notifications-outline"></ion-icon>}
            name="Ayuda"
          />
          <ButtonOptionMenu
            href=""
            icon={<ion-icon name="settings-outline"></ion-icon>}
            name="Configuraciones"
          />
          <ButtonOptionMenu
            href=""
            icon={<ion-icon name="log-out-outline"></ion-icon>}
            name="Cerrar Sesión"
          />
        </ul>
      </div>
    </>
  );
}

export default LoginOptions;
