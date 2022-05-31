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
	<link rel="stylesheet" type="text/css" href="newUserStyle.css">
    </head>
    <body>
        <section>
		<div class="container">
		<div class="user signupBx">
			<div class="imgBx"><img src="expert1.jpg"> </div>
			<div class="formBx">
				<form>
					<h2>Crear una Cuenta</h2>
					<input type="text" placeholder="Nombre">
					<input type="text" placeholder="Apellido">
					<input type="text" placeholder="Direccion">
					<input type="text" placeholder="Ciudad">
					<input type="text" placeholder="Telefono">
					<input type="text" placeholder="Correo Electronico">
					<input type="text" placeholder="Usuario">
					<input type="password" placeholder="Contraseña">
					<input type="submit" value="login">
					<p class="signup">¿Ya tienes una Cuenta?<a href="#">Ingresa aqui.</a></p>
				</form>
			</div>
			</div>
		</div>
		</section>
    </body>
</html>
