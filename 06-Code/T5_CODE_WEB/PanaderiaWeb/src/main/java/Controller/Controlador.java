/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controller;

import Model.AuxUser;
import Model.Product;
import Model.User;
import ModelDAO.ProductDAO;
import ModelDAO.UserDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Javier Snz
 */
@WebServlet(name = "Controlador", urlPatterns = {"/Controlador"})
public class Controlador extends HttpServlet {
    
    String home = "index.jsp";
    String products = "jsps/products.jsp";
    String adminProduct = "jsps/adminProduct.jsp";
    String newUser = "jsps/newUser.jsp";
    String login = "jsps/login.jsp";
    Product product = new Product();
    User user = new User();
    ProductDAO productDAO = new ProductDAO();
    UserDAO userDAO = new UserDAO();
    int id;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Controlador</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Controlador at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        AuxUser.getAuxUser();
        String access = "";
        String accion = request.getParameter("accion");
        switch (accion) {
            case "home": {
                access = home;
            }
            break;
            case "products": {
                access = products;
            }
            break;
            case "adminProduct":{
                access = adminProduct;
            }
            break;
            case "newUser":{
                access = newUser;
            }
            break;
            case "login":{
                access = login;
            }
            case "addProduct": {
                String name = request.getParameter("name");
                double price = Float.parseFloat(request.getParameter("price"));
                int quantity = Integer.parseInt(request.getParameter("quantity"));
                double profit = productDAO.calculateProfits(quantity, price);

                product.setName(name);
                product.setPrice(price);
                product.setQuantity(quantity);
                productDAO.addProduct(product);
            }
            break;
            case "addUser": {
                String name = request.getParameter("name");
                String surname = request.getParameter("surname");
                String address = request.getParameter("address");
                String city = request.getParameter("city");
                String phone = request.getParameter("phone");
                String email = request.getParameter("email");
                String username = request.getParameter("username");
                String password = request.getParameter("password");

                user.setName(name);
                user.setSurname(surname);
                user.setAddress(address);
                user.setCity(city);
                user.setPhone(phone);
                user.setEmail(email);
                user.setUsername(username);
                user.setPassword(password);
                
                AuxUser.getAuxUser().setUser(user);
                userDAO.addUser(user);
            }
            break;
            case "validationUser":{
                String email = request.getParameter("email");
                String username = request.getParameter("username");
                String password = request.getParameter("password");
                
                user.setEmail(email);
                user.setSurname(username);
                user.setPassword(password);
                
                if(userDAO.findUser(user)){
                    AuxUser.getAuxUser().setUser(user);
                    access = home;
                }else{
                    access = products;
                }
            }
            break;
            case "closeSesion": {
                access = home;
                AuxUser.getAuxUser().setUser(null);
            }
            break;
        }

        RequestDispatcher view = request.getRequestDispatcher(access);
        view.forward(request, response);

        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
