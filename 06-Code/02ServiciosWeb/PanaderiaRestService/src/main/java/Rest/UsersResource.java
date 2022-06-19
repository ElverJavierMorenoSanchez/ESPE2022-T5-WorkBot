/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package Rest;

import ConnectionDB.ConnectionMongoDB;
import Model.User;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Updates.set;
import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import org.bson.Document;

/**
 * REST Web Service
 *
 * @author valerynaranjo
 */
@Path("Users")
@RequestScoped
public class UsersResource {

    @Context
    private UriInfo context;
    ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    MongoDatabase mongoDatabase;
    MongoCollection userCollection;
    ArrayList<User> userList;
    FindIterable<Document> findIterableUser;
    MongoCursor<Document> mongoCursorUser;
    User user;

    /**
     * Creates a new instance of UsersResource
     */
    public UsersResource() {
    }

    /**
     * Retrieves representation of an instance of Rest.UsersResource
     *
     * @return an instance of Model.User
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList getJson() {
        userList = new ArrayList<>();
        try { 
            userList = getUserlist();

        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return userList;
    }
    
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public ArrayList postJson(User content, @PathParam("username") String username, Document Document) {
        String query = "{"
                + "name: " + content.getName()+ ","
                + "surname: " + "'" + content.getSurname()+ "'" + ","
                + "address: " + "'" + content.getAddress()+ "'" + ","
                + "city: " + content.getCity()+ ","
                + "phone: " + content.getPhone()+ ","
                + "dateBirth: " + content.getDateBirth()+ ","
                + "}";

        try {
            getCollections();
            Document = new Document();
            userList.insert.One(Document.parse(query));
            userCollection.updateOne(eq("username", username));
            
            userList = getUserlist();

        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        
        return userList; 
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    
        try { 
            userList = getUserlist();

        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return userList;
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public ArrayList postJson(User content, @PathParam("username") String username, Document Document) {
        String query = "{"
                + "name: " + content.getName()+ ","
                + "surname: " + "'" + content.getSurname()+ "'" + ","
                + "address: " + "'" + content.getAddress()+ "'" + ","
                + "city: " + content.getCity()+ ","
                + "phone: " + content.getPhone()+ ","
                + "dateBirth: " + content.getDateBirth()+ ","
                + "}";
        
    }    
    /**
     * PUT method for updating or creating an instance of UsersResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(User content) {
    }

    private void getCollections() {
        mongoDatabase = connectionMongoDB.getMongoDatabase();
        userCollection = mongoDatabase.getCollection("User");
        findIterableUser = userCollection.find(new Document());
        mongoCursorUser = findIterableUser.iterator();
        System.out.println("Rest.UsersResource.getCollections()");
    }
    
    private ArrayList getUserlist(){
        userList = new ArrayList<>();
        try {
            getCollections();
            while(mongoCursorUser.hasNext()){
                Document userObject = mongoCursorUser.next();
                user = new User();
                user.setName(userObject.getString("name"));
                user.setSurname(userObject.getString("surname"));
                user.setAddress(userObject.getString("address"));
                user.setCity(userObject.getString("city"));
                user.setPhone(userObject.getString("phone"));
                user.setEmail(userObject.getString("email"));
                user.setUsername(userObject.getString("username"));
                user.setPassword(userObject.getString("password"));
                System.out.println(user);
             // user.setdateBirth(userObject.getString("dateBirth"));
                userList.add(user);
            }
        } catch (Exception e) {
        }
        return userList;
    }
}
