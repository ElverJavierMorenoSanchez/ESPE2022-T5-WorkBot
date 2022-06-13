<%-- 
    Document   : login
    Created on : 31 may. 2022, 19:55:27
    Author     : valerynaranjo
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Login Form</title>
        <link rel="stylesheet" type="text/css" href="css/loginStyle.css">
    </head>
    <body>
        <div class="login-box">
            <div class="formBx">
                <form>
                    <h2>Inicar Sesión</h2>
                    <input type="text" name="username" placeholder="Correo Electronico o Nombre de Usuario">
                    <input type="password" name="password" placeholder="Contraseña">
                    <button class="btn" type="submit" value="validationUser" name="accion">
                        Inicar Sesión
                    </button>

                    <p class="login">¿No tienes una Cuenta?<a href="Controlador?accion=newUser"> Ingresa aqui.</a></p>
                </form>
            </div>
        </div>
    </body>
</html>