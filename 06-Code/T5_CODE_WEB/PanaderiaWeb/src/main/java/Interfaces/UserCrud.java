/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Interfaces;

import Model.User;

/**
 *
 * @author RobertoCarlos
 */
public interface UserCrud {
    public boolean addUser (User user);
    public boolean updateUser (User user);
    public boolean deleteUser (User user);
    public boolean findUser (User user);
}
