<%-- 
    Document   : newUser
    Created on : 30-may-2022, 22:25:45
    Author     : RobertoCarlos
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, inicial-scale=1.0">
        <title>Formulario de Registro</title>
        <link rel="stylesheet" type="text/css" href="css/allPageStyle.css">
        <link rel="stylesheet" type="text/css" href="css/newUserStyle.css">
    </head>
    <body>
        <section>
            <div class="container">
                <div class="user signupBx">
                    <div class="imgBx"><img src="img/perfil/expert1.jpg"> </div>
                    <div class="formBx">
                        <form>
                            <h2>Crear una Cuenta</h2>
                            <input type="text" name="name" placeholder="Nombre">
                            <input type="text" name="surname" placeholder="Apellido">
                            <input type="text" name="address" placeholder="Direccion">
                            <input type="text" name="city" placeholder="Ciudad">
                            <input type="text" name="phone" placeholder="Telefono">
                            <input type="text" name="email" placeholder="Correo Electronico">
                            <input type="text" name="username" placeholder="Usuario">
                            <input type="password" name="password" placeholder="Contraseña">

                            <button type="submit" value="addUser" name="accion">
                                Crear Cuenta
                            </button>
                            
                            <p class="login">¿Ya tienes una Cuenta?<a href="Controlador?accion=loginPage"> Ingresa aqui.</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>
