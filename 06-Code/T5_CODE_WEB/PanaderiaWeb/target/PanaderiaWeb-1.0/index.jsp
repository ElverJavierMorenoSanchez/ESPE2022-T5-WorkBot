<%-- 
    Document   : index
    Created on : 28-may-2022, 15:03:11
    Author     : Javier Snz
    Diseño basado en: https://www.youtube.com/watch?v=ac5nmWOkBEY&t=0s
--%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.List"%>
<%@page import="Model.Product"%>
<%@page import="ModelDAO.ProductDAO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/indexStyle.css">
        <link rel="stylesheet" href="css/headerStyle.css">
    </head>
    <body>
        <div id="header"></div>
        <div id="home">
            <section class="banner" id="banner">
                <div class="content left">
                    <h2>Disfruta De Los Mejores Postres</h2>
                    <p>Te invitamos a degustar productos del horno a tu mesa, con los más altos estándares de calidad y precios accesibles a nuestra comunidad, contamos con alta de experiencia en el mercado, apoyando el desarrollo de la industria.</p>
                    <a href="#" class="btn">Nuestros Productos</a>
                </div>
                <div class="content right"></div>
            </section>
            <section class="about" id="about">
                <div class="row">
                    <div class="col50">
                        <h2 class="titleText"><span>U</span>NA VARIEDAD DE SABORES <br> PARA LOS PALADARES MAS EXIGENTES.</h2>
                        <p>Al igual que una panadería perfectamente horneada, creamos Panadería con un amor especial, y se nota. Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Nulla harum sunt dolorem officiis est dicta facilis enim velit atque eligendi? Nemo, laborum tempore alias quo magnam, illum veritatis quia iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, esse. Natus dolorum esse numquam adipisci laudantium, totam possimus, amet veritatis! Quas deserunt quibusdam quis quidem accusantium incidunt reiciendis maiores corrupti? <br><br> Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Exercitationem, nulla et dolorem veritatis aliquam explicabo saepe est hic voluptas maxime qui sunt temporibus voluptates reiciendis quibusdam quidem maiores, inventore blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing, elit. Quasi, blanditiis, dolore. Repellendus expedita, dolore est debitis, maiores dolorum modi animi, iure itaque natus nemo perspiciatis. Dignissimos ipsum possimus repudiandae quis!</p>
                    </div>
                    <div class="col50">
                        <div class="imgBx">
                            <img src="images/img1.jpg" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <section class="menu" id="menu">
                <div class="title">
                    <h2 class="titleText">NUESTROS <span>P</span>RODUCTOS</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="content">

                    <%
                        ProductDAO productDAO = new ProductDAO();
                        List<Product> productList = productDAO.listProduct();
                        Iterator<Product> iteratorProduct = productList.iterator();
                        System.out.println("-----------------------------------------------------------------");
                        System.out.println(productList.size());
                        Product product = null;
                        String imgUrl = "";
                        int i = 0;
                        while (i != 7 && iteratorProduct.hasNext()) {
                            i += 1;
                            imgUrl = "images/";
                            product = iteratorProduct.next();
                            imgUrl += product.getImgUrl();
                    %>
                    <div class="box">
                        <div class="imgBx">
                            <img src=<%= imgUrl%> alt="">
                        </div>
                        <div class="text">
                            <h3><%= product.getName()%></h3>
                        </div>
                    </div>
                    <%}%>
                </div>
                <div class="title">
                    <a href="#" class="btn">View All</a>
                </div>
            </section>
            <section class="expert" id="expert">
                <div class="title">
                    <h2 class="titleText">NUESTRA <span>P</span>ANADERA</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="content">
                    <div class="grid">
                        <div class="box">
                            <div class="imgBx">
                                <img src="images/expert1.jpg" alt="">
                            </div>
                        </div>
                        <div class="box">
                            <div class="text">
                                <h3>María Belen</h3>
                            </div>
                            <div class="info">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum veritatis magnam rem quaerat hic eos, labore nesciunt omnis officiis, modi libero repellat praesentium distinctio corrupti consequatur dolorem pariatur error explicabo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="testimonials" id="testimonials">
                <div class="title white">
                    <h2 class="titleText">ELLOS <span>D</span>IJERON DE NOSOTROS</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="content">
                    <div class="box">
                        <div class="imgBx">
                            <img src="images/testi1.jpg" alt="">
                        </div>
                        <div class="text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta obcaecati temporibus eius velit nostrum iste natus, incidunt error facere amet fugiat ex expedita autem fugit labore. Repudiandae, labore doloremque.
                            </p>
                            <h3>Someone Famous</h3>
                        </div>
                    </div>
                    <div class="box">
                        <div class="imgBx">
                            <img src="images/testi2.jpg" alt="">
                        </div>
                        <div class="text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta obcaecati temporibus eius velit nostrum iste natus, incidunt error facere amet fugiat ex expedita autem fugit labore. Repudiandae, labore doloremque.
                            </p>
                            <h3>Someone Famous</h3>
                        </div>
                    </div>
                    <div class="box">
                        <div class="imgBx">
                            <img src="images/testi3.jpg" alt="">
                        </div>
                        <div class="text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta obcaecati temporibus eius velit nostrum iste natus, incidunt error facere amet fugiat ex expedita autem fugit labore. Repudiandae, labore doloremque.
                            </p>
                            <h3>Someone Famous</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact" id="contact">
                <div class="title">
                    <h2 class="titleText"><span>C</span>ONTACTANOS</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="contactForm">
                    <h3>Enviar Mensaje</h3>
                    <div class="inputBox">
                        <input type="text" placeholder="Name">
                    </div>
                    <div class="inputBox">
                        <input type="text" placeholder="Email">
                    </div>
                    <div class="inputBox">
                        <textarea name="Name"></textarea>
                    </div>
                    <div class="inputBox">
                        <input type="submit" class="btn" value="Send">
                    </div>
                </div>
            </section>
        </div>

        <div class="copyrighText">
            <p>Copyright 2022 Onine Tutorials. All right Reserved </p>
        </div>

        <script src="js/headerCode.js"></script>
    </body>
</html>
