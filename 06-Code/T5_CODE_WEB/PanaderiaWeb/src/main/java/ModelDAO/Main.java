/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ModelDAO;

import Model.User;

/**
 *
 * @author RobertoCarlos
 */
public class Main {
  
    public static void main(String[] args) {
        User user= new User ("name","surname","address","city", "phone","email","username","password");
        UserDAO userDAO=new UserDAO();
        userDAO.addUser(user);
    }
}

