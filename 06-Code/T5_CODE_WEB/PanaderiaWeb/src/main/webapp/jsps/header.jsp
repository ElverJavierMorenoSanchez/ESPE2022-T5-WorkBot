<%-- 
    Document   : header
    Created on : 28-may-2022, 23:53:53
    Author     : Javier Snz
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<header>
    <a href="#" class="logo">Dulcemente Pasteles<span>.</span></a>
    <ul class="navigation">
        <li><a href="Controlador?accion=home" onclick="toggleMenu()">Inicio</a></li>
        <li><a href="Controlador?accion=products" onclick="toggleMenu()">Productos</a></li>
        <li><a href="#" onclick="toggleMenu()">Carta Menú</a></li>
        <li><a href="#" onclick="toggleMenu()">Sobre Nosotros</a></li>
        <li><a href="#" onclick="toggleMenu()">Contactanos</a></li>

    </ul>
    <div class="shoppingCart">
        <a href="#">
            <span class="icon">
                <ion-icon name="cart-outline"></ion-icon>
            </span>
        </a>
        <div class="cont"><h3>0</h3></div>

    </div>
    <a href="#" class="btn singIn">INICAR SESIÓN</a>
</header>