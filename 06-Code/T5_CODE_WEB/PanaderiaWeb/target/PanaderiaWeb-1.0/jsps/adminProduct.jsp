<%-- 
    Document   : adminProduct
    Created on : 31/05/2022, 0:14:30
    Author     : santi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Administracion</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<section>
		<div class="imgBx">
			<img src="img/panaderia.jpg">
		</div>
		<div class="contentBx">
			<div class="formBx">
				<h2>Administrar Productos</h2>
				<form>
					<div class="inputBx">
						<span>Nombre</span>
						<input type="text" name="name" class="form-control">
					</div>
					<div class="inputBx">
						<span>Precio</span>
						<input type="text" name="price" class="form-control">
					</div>
					<div class="inputBx">
						<span>Cantidad</span>
						<input type="text" name="quantity" class="form-control">
					</div>
					<div class="inputBx">
						<span>Categoria</span>
						<input type="text" name="category" class="form-control">
					</div>
					<div class="inputBx">
						<span>Descripcion</span>
						<input type="text" name="description" class="form-control">
					</div>
					<div class="inputBx">
						<span>Imagen</span>
						<input type="text" name="imgUrl" class="form-control">
					</div>
					<div class="inputBx">
						<input type="submit" value="Agregar" name="Agergar">
					</div>
				</form>
			</div>
		</div>
	</section>
</body>
</html>
