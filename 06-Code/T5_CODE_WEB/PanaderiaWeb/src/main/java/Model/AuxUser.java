/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;

/**
 *
 * @author Javier Snz
 */
public class AuxUser {
    public static AuxUser auxUser;    
    private User user;

    public static AuxUser getAuxUser() {
        if (auxUser == null) {
            auxUser = new AuxUser();
        }
        return auxUser;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
