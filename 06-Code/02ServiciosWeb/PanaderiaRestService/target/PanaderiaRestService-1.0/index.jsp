<%-- 
    Document   : index
    Created on : 18-jun-2022, 19:38:21
    Author     : Javier Snz
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/indexStyle.css">
    </head>
    <body>
        <header>
            <a href="#" class="logo">Dulcemente Pasteles Resources<span>.</span></a>
        </header>

        <div id="home">
            <section class="banner" id="banner">
                <div class="content left">
                    <h2>Diviertete con nuestros recursos</h2>
                    <p>Aquí encontrarás los recursos que nuestra página oficial genera. Entre los recursos encontrarás, los clientes registrados, los productos, las facturas y tarjetas de crédito. Ninguno de los datos son reales y solo sirven para demostrar el funcionamiento de los servicios REST</p>
                    <a href="#" class="btn">CONTINUA BAJANDO</a>
                </div>
                <div class="content right"></div>
            </section>

            <section class="resources" id="resources">

                <!-- USUARIOS -->

                <div class="tableContainer">
                    <div class="title">
                        <h2 class="titleText"><span>U</span>SUARIOS.</h2>
                    </div>
                    <div>
                        <table>
                            <caption><h2>URI 1</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Apartir de  un id se obtiene la información de la tarjeta a la que le corresponda el id.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>GET</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/getCard/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td><b>idCard:</b> id de la tarjeta de crédito.</td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { <br>
                                            "creditCard": { <br>
                                            "dateExpiry": "MM/yy", <br>
                                            "id": 0,<br>
                                            "numberCard": 1234567891234561,<br>
                                            "ownCard": "Nombre Apellido",<br>
                                            "securityCode": 000<br>
                                            },<br>
                                            "username": "username"<br>
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 2</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Se añade una nueva tarjeta a un usuario indicando su nombre de usuario. Los usuarios solo pueden tener una tarjeta registrada, por lo que, si se se le inserta una nueva tarjeta a un usuario que ya tiene una simplemente se actualizará la información.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>POST</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/addCard/{username}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td> <b>username:</b> Nombre de usuario de la persona a la que se le va a registrar la tarjeta. <br>
                                        <b>JSON:</b> <br>
                                        { <br>
                                        "dateExpiry": "MM/yy", <br>
                                        "id": 0,<br>
                                        "numberCard": 1234567891234561,<br>
                                        "ownCard": "Nombre Apellido",<br>
                                        "securityCode": 000<br>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { 
                                            "http-code": 201 
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 3</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Se actualiza la información de una tajeta indicando su id.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>PUT</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/updateCard/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td> <b>idCard:</b> id de la tarjeta de crédito.<br>
                                        <b>JSON:</b> <br>
                                        { <br>
                                        "dateExpiry": "MM/yy", <br>
                                        "id": 0,<br>
                                        "numberCard": 1234567891234561,<br>
                                        "ownCard": "Nombre Apellido",<br>
                                        "securityCode": 000<br>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { 
                                            "http-code": 201 
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 4</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Se elimina una tarjeta indicando su id.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>DELETE</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/deleteCard/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td> <b>idCard:</b> id de la tarjeta de crédito.<br>
                                    </td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { 
                                            "http-code": 201 
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 5</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Toda tarjeta de credito tiene una fecha de caducidad, por lo que, apartir de su id podemos calcular cuanto tiempo falta para que llegue esa fecha</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>GET</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/calculateDate/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td><b>idCard:</b> id de la tarjeta de crédito.</td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { <br>

                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="resources/Users" class="btn" target="_blank">PROBAR URI</a>
                </div>

                <!-- PRODUCTOS --> 

                <div class="tableContainer">
                    <div class="title">
                        <h2 class="titleText"><span>P</span>RODUCTOS.</h2>
                    </div>
                    <div>
                        <table>
                            <caption><h2>URI 1</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Apartir de  un id se obtiene la información de la tarjeta a la que le corresponda el id.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>GET</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/getCard/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td><b>idCard:</b> id de la tarjeta de crédito.</td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { <br>
                                            "creditCard": { <br>
                                            "dateExpiry": "MM/yy", <br>
                                            "id": 0,<br>
                                            "numberCard": 1234567891234561,<br>
                                            "ownCard": "Nombre Apellido",<br>
                                            "securityCode": 000<br>
                                            },<br>
                                            "username": "username"<br>
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 2</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Se añade una nueva tarjeta a un usuario indicando su nombre de usuario. Los usuarios solo pueden tener una tarjeta registrada, por lo que, si se se le inserta una nueva tarjeta a un usuario que ya tiene una simplemente se actualizará la información.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>POST</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/addCard/{username}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td> <b>username:</b> Nombre de usuario de la persona a la que se le va a registrar la tarjeta. <br>
                                        <b>JSON:</b> <br>
                                        { <br>
                                        "dateExpiry": "MM/yy", <br>
                                        "id": 0,<br>
                                        "numberCard": 1234567891234561,<br>
                                        "ownCard": "Nombre Apellido",<br>
                                        "securityCode": 000<br>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { 
                                            "http-code": 201 
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 3</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Se actualiza la información de una tajeta indicando su id.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>PUT</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/updateCard/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td> <b>idCard:</b> id de la tarjeta de crédito.<br>
                                        <b>JSON:</b> <br>
                                        { <br>
                                        "dateExpiry": "MM/yy", <br>
                                        "id": 0,<br>
                                        "numberCard": 1234567891234561,<br>
                                        "ownCard": "Nombre Apellido",<br>
                                        "securityCode": 000<br>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { 
                                            "http-code": 201 
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 4</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Se elimina una tarjeta indicando su id.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>DELETE</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/deleteCard/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td> <b>idCard:</b> id de la tarjeta de crédito.<br>
                                    </td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { 
                                            "http-code": 201 
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 5</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Toda tarjeta de credito tiene una fecha de caducidad, por lo que, apartir de su id podemos calcular cuanto tiempo falta para que llegue esa fecha</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>GET</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/calculateDate/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td><b>idCard:</b> id de la tarjeta de crédito.</td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { <br>

                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="resources/Product" class="btn" target="_blank">PROBAR URI</a>
                </div>

                <!-- TARJETAS DE CREDITO -->

                <div class="tableContainer">
                    <div class="title">
                        <h2 class="titleText"> TARJETAS <span>D</span>E CREDITO.</h2>
                    </div>
                    <div>
                        <table>
                            <caption><h2>URI 1</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Apartir de  un id se obtiene la información de la tarjeta a la que le corresponda el id.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>GET</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/getCard/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td><b>idCard:</b> id de la tarjeta de crédito.</td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { <br>
                                            "creditCard": { <br>
                                            "dateExpiry": "MM/yy", <br>
                                            "id": 0,<br>
                                            "numberCard": 1234567891234561,<br>
                                            "ownCard": "Nombre Apellido",<br>
                                            "securityCode": 000<br>
                                            },<br>
                                            "username": "username"<br>
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 2</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Se añade una nueva tarjeta a un usuario indicando su nombre de usuario. Los usuarios solo pueden tener una tarjeta registrada, por lo que, si se se le inserta una nueva tarjeta a un usuario que ya tiene una simplemente se actualizará la información.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>POST</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/addCard/{username}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td> <b>username:</b> Nombre de usuario de la persona a la que se le va a registrar la tarjeta. <br>
                                        <b>JSON:</b> <br>
                                        { <br>
                                        "dateExpiry": "MM/yy", <br>
                                        "id": 0,<br>
                                        "numberCard": 1234567891234561,<br>
                                        "ownCard": "Nombre Apellido",<br>
                                        "securityCode": 000<br>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { 
                                            "http-code": 201 
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 3</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Se actualiza la información de una tajeta indicando su id.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>PUT</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/updateCard/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td> <b>idCard:</b> id de la tarjeta de crédito.<br>
                                        <b>JSON:</b> <br>
                                        { <br>
                                        "dateExpiry": "MM/yy", <br>
                                        "id": 0,<br>
                                        "numberCard": 1234567891234561,<br>
                                        "ownCard": "Nombre Apellido",<br>
                                        "securityCode": 000<br>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { 
                                            "http-code": 201 
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 4</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Se elimina una tarjeta indicando su id.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>DELETE</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/deleteCard/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td> <b>idCard:</b> id de la tarjeta de crédito.<br>
                                    </td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { 
                                            "http-code": 201 
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 5</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Toda tarjeta de credito tiene una fecha de caducidad, por lo que, apartir de su id podemos calcular cuanto tiempo falta para que llegue esa fecha</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>GET</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/calculateDate/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td><b>idCard:</b> id de la tarjeta de crédito.</td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { <br>

                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="resources/CreditCard" class="btn" target="_blank">PROBAR URI</a>
                </div>

                <!-- FACTURAS -->

                <div class="tableContainer">
                    <div class="title">
                        <h2 class="titleText"><span>F</span>ACTURAS.</h2>
                    </div>
                    <div>
                        <table>
                            <caption><h2>URI 1</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Apartir de  un id se obtiene la información de la tarjeta a la que le corresponda el id.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>GET</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/getCard/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td><b>idCard:</b> id de la tarjeta de crédito.</td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { <br>
                                            "creditCard": { <br>
                                            "dateExpiry": "MM/yy", <br>
                                            "id": 0,<br>
                                            "numberCard": 1234567891234561,<br>
                                            "ownCard": "Nombre Apellido",<br>
                                            "securityCode": 000<br>
                                            },<br>
                                            "username": "username"<br>
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 2</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Se añade una nueva tarjeta a un usuario indicando su nombre de usuario. Los usuarios solo pueden tener una tarjeta registrada, por lo que, si se se le inserta una nueva tarjeta a un usuario que ya tiene una simplemente se actualizará la información.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>POST</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/addCard/{username}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td> <b>username:</b> Nombre de usuario de la persona a la que se le va a registrar la tarjeta. <br>
                                        <b>JSON:</b> <br>
                                        { <br>
                                        "dateExpiry": "MM/yy", <br>
                                        "id": 0,<br>
                                        "numberCard": 1234567891234561,<br>
                                        "ownCard": "Nombre Apellido",<br>
                                        "securityCode": 000<br>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { 
                                            "http-code": 201 
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 3</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Se actualiza la información de una tajeta indicando su id.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>PUT</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/updateCard/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td> <b>idCard:</b> id de la tarjeta de crédito.<br>
                                        <b>JSON:</b> <br>
                                        { <br>
                                        "dateExpiry": "MM/yy", <br>
                                        "id": 0,<br>
                                        "numberCard": 1234567891234561,<br>
                                        "ownCard": "Nombre Apellido",<br>
                                        "securityCode": 000<br>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { 
                                            "http-code": 201 
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 4</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Se elimina una tarjeta indicando su id.</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>DELETE</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/deleteCard/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td> <b>idCard:</b> id de la tarjeta de crédito.<br>
                                    </td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { 
                                            "http-code": 201 
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <caption><h2>URI 5</h2></caption>
                            <tbody>
                                <tr>
                                    <th>DESCRIPCIÓN</th>
                                    <td>Toda tarjeta de credito tiene una fecha de caducidad, por lo que, apartir de su id podemos calcular cuanto tiempo falta para que llegue esa fecha</td>
                                </tr>
                                <tr>
                                    <th>MÉTODO</th>
                                    <td>GET</td>
                                </tr>
                                <tr>
                                    <th>URI</th>
                                    <td>workbot.jelastic.saveincloud.net/resources/CreditCard<b>/calculateDate/{idCard}</b></td>
                                </tr>
                                <tr>
                                    <th>PARÁMETROS</th>
                                    <td><b>idCard:</b> id de la tarjeta de crédito.</td>
                                </tr>
                                <tr>
                                    <th>FORMATO</th>
                                    <td>JSON</td>
                                </tr>
                                <tr>
                                    <th>DEVUELVE</th>
                                    <td>
                                        <p>
                                            { <br>

                                            }
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="resources/Invoice" class="btn" target="_blank">PROBAR URI</a>
                </div>

            </section>

        </div>

        <footer>
            <div class="container">
                <div class="sec aboutUs">
                    <h2>ACERCA DE NOSOTROS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nihil inventore fuga eum sequi quo quos reprehenderit, dicta incidunt nulla laborum amet cupiditate debitis doloremque. Nostrum ut enim maxime voluptates?</p>
                    <ul class="sci">
                        <li><a href="#"><span class="icon"><ion-icon name="logo-facebook"></ion-icon></span></a></li>
                        <li><a href="#"><span class="icon"><ion-icon name="logo-twitter"></ion-icon></ion-icon></span></a></li>
                        <li><a href="#"><span class="icon"><ion-icon name="logo-instagram"></ion-icon></span></a></li>
                        <li><a href="#"><span class="icon"><ion-icon name="logo-tiktok"></ion-icon></ion-icon></span></a></li>
                    </ul>
                </div>
                <div class="sec quickLinks">
                    <h2>ENLACES ÚTILES</h2>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Help</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div class="sec contact">
                    <h2>INFORMACIÓN DE CONTACTO</h2>
                    <ul class="info">
                        <li>
                            <span><ion-icon name="navigate-circle-sharp"></ion-icon></span>
                            <a href="">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</a>
                        </li>
                        <li>
                            <span><ion-icon name="call-sharp"></ion-icon></span>
                            <p>
                                <a href="tel:09814523678">098 145 23678</a>
                                <br>
                                <a href="tel:09814523678">098 145 23678</a>
                            </p>
                        </li>
                        <li>
                            <span><ion-icon name="mail-sharp"></ion-icon></ion-icon></span>
                            <p><a href="maito:dulcementepasteles@gmail.com">dulcementepasteles@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div class="copyrighText">
            <p>Copyright 2022 WorkBot. All right Reserved </p>
        </div>

        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <script src="js/indexCode.js"></script>
    </body>
</html>


