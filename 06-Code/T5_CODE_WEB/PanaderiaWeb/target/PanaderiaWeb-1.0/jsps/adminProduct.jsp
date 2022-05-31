<%-- 
    Document   : adminProduct
    Created on : 31/05/2022, 0:14:30
    Author     : santi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
        <title>JSP Page</title>
    </head>
    <body>
        <div class="container mt-4">
            <h1 class="text-center">Agregar Producto</h1>
            <form action="Controlador">
                <div class="row mt-4">
                    <div class="col">
                        <label>Nombre: </label>
                        <input type="text" name="name" class="form-control"/>
                    </div>
                    <div class="col">
                        <label>Precio: </label>
                        <input type="text" name="price" class="form-control"/>
                    </div>
                    <div class="col">
                        <label>Cantidad: </label>
                        <input type="number" name="quantity" class="form-control"/>
                    </div>
                    <div class="col">
                        <label>Categoria: </label>
                        <input type="text" name="category" class="form-control"/>
                    </div>
                    <div class="col">
                        <label>Descripcion: </label>
                        <input type="text" name="description" class="form-control"/>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <p class="text-center">
                            <button
                                type="submit"
                                value="Agregar"
                                name="accion"
                                class="btn btn-success">
                                AGREGAR
                            </button>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </body>
</html>
