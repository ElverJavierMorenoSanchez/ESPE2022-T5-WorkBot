/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ModelDAO;

import ConnectionDB.ConnectionMongoDB;
import Interfaces.UserCrud;
import Model.User;
import com.mongodb.MongoException;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import java.sql.ResultSet;
import org.bson.Document;

/**
 *
 * @author RobertoCarlos
 */
public class UserDAO implements UserCrud{
    ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    MongoDatabase mongoDatabase;
    ResultSet resultSet;
    User user;
    
    @Override
    public boolean addUser(User user) {
      String query = "{"
                + "name: " +"'"+ user.getName() +"'"+ ","
                + "surname: " +"'"+ user.getSurname() +"'"+ ","
                + "address: " +"'"+ user.getAddress() +"'"+ ","
                + "city: " +"'"+ user.getAddress() +"'"+ ","
                + "phone: " +"'"+ user.getAddress() +"'"+ ","
                + "email: " +"'"+ user.getAddress() +"'"+ ","
                + "username: " +"'"+ user.getAddress() +"'"+ ","
                + "password: " +"'"+ user.getAddress() +"'"
                 +"}";
      //String query = "{name: 'jose'}";
              
        try {
            mongoDatabase = connectionMongoDB.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("User");
            collection.insertOne(Document.parse(query));
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }

        return false;
    }
    

    @Override
    public boolean updateUser(User user) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public boolean deleteUser(User user) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    
}
