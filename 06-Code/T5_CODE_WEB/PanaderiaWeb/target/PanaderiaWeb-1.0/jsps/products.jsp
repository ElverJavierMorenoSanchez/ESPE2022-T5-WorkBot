<%-- 
    Document   : products
    Created on : 29-may-2022, 0:33:17
    Author     : Javier Snz
--%>

<%@page import="Model.Product"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="ModelDAO.ProductDAO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/allPageStyle.css">
        <link rel="stylesheet" href="css/headerStyle.css">
        <link rel="stylesheet" href="css/productStyle.css">
        <link rel="stylesheet" href="css/footerStyle.css">
        <script src="js/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <div id="header"></div>

        <div class="products"><h2 class="titleText">NUESTROS <span>P</span>RODUCTOS</h2></div>
        <section class="productsList" id="productsList">
            <%
                ProductDAO productDAO = new ProductDAO();
                List<String> categoryList = productDAO.listCategory();
                Iterator<String> iteratorCategory = categoryList.iterator();
                String category = "";
                String auxCategory = "";
                String firstLetter = "";
                String imgUrl = "";
                while (iteratorCategory.hasNext()) {
                    category = iteratorCategory.next();
                    auxCategory = category;
                    auxCategory=auxCategory.toUpperCase();
                    firstLetter = auxCategory.substring(0, 1);
                    auxCategory=auxCategory.substring(1,auxCategory.length());
                    
            %>
            <div class="title">
                <h2 class="titleText"><span><%= firstLetter%></span><%= auxCategory%></h2>
            </div>
            <div class="content">
                <%
                    List<Product> productList = productDAO.listProduct();
                    Iterator<Product> iteratorProduct = productList.iterator();
                    System.out.println(productList.size());
                    Product product = null;
                    int i = 0;
                    while (i != 7 && iteratorProduct.hasNext()) {
                        i += 1;
                        product = iteratorProduct.next();
                        if (category.equals(product.getCategory())) {
                            imgUrl = "img/products/";
                            imgUrl += product.getImgUrl();
                %>

                <div class="box">
                    <div class="imgBx">
                        <img src=<%= imgUrl%> alt="">
                        <div class="optionCart">
                            <div class="button">
                                <span class="icon">
                                    <ion-icon name="cart-outline"></ion-icon>
                                </span>
                                <h3>AÑADIR AL CARRITO</h3>
                            </div>
                        </div>
                    </div>
                    <div class="text">
                        <h2 class="name"><%= product.getName()%></h2>
                        <h3 class="price">$ <%= product.getPrice()%></h3>
                        <h3 class="description"><%= product.getDescription()%></h3>
                    </div>
                </div>
                <%}
                    }%>
            </div>
            <%}%>
        </section>

        <div id="footer"></div>
        
        <script src="js/jquery-3.6.0.min.js"></script>
        <script src="js/allPageCode.js"></script>
        <script src="js/productsCode.js"></script>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </body>
</html>
