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
import java.text.ParseException;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
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

    @GET
    @Path("get/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Document getJson(@PathParam("username") String username) {
        Document httpCode;
        try {
            getCollections();

            findIterableUser = userCollection.find(eq("username", username));
            httpCode = findIterableUser.first();

            if (httpCode == null) {
                httpCode = new Document("http-code", 504);
            } 
        } catch (Exception e) {
            System.out.println("Error" + e);
            httpCode = new Document("http-code", 504);
        }
        return httpCode;
    }

    @POST
    @Path("add")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Document postJson(User content) {
        Document httpCode;
        String query = "{"
                + "name: " + "'" + content.getName() + "'" + ","
                + "surname: " + "'" + content.getSurname() + "'" + ","
                + "address: " + "'" + content.getAddress() + "'" + ","
                + "city: " + "'" + content.getCity()+ "'" + ","
                + "phone: " + "'" + content.getPhone()+ "'" + ","
                + "email: " + "'" + content.getEmail()+ "'" + ","
                + "username: " + "'" + content.getUsername()+ "'" + ","
                + "dateBirth: '" + content.getDateBirth() + "',"
                + "password: " + "'" + content.getPassword() + "'"
                + "}";
        
        try {
            getCollections();
            userCollection.insertOne(Document.parse(query));
            httpCode = new Document("http-code", 201);
        } catch (Exception e) {
            System.out.println("Error" + e);
            httpCode = new Document("http-code", 504);
        }

        return httpCode;
    }

    @PUT
    @Path("update/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Document putJson(User content, @PathParam("username") String username) {
        Document httpCode;
        try {
            getCollections();
            String query = "{"
                + "name: " + "'" + content.getName() + "'" + ","
                + "surname: " + "'" + content.getSurname() + "'" + ","
                + "address: " + "'" + content.getAddress() + "'" + ","
                + "city: " + "'" + content.getCity()+ "'" + ","
                + "phone: " + "'" + content.getPhone()+ "'" + ","
                + "email: " + "'" + content.getEmail()+ "'" + ","
                + "username: " + "'" + content.getUsername()+ "'" + ","
                + "dateBirth: '" + content.getDateBirth() + "',"
                + "password: " + "'" + content.getPassword() + "'"
                + "}";

            findIterableUser = userCollection.find(eq("username", username));
            Document cardObject = findIterableUser.first();
            if (cardObject.getString("username") != null) {
                userCollection.findOneAndDelete(eq("username", username));
                userCollection.insertOne(Document.parse(query));
                httpCode = new Document("http-code", 201);
            } else {
                httpCode = new Document("http-code", 504);
            }
        } catch (Exception e) {
            System.out.println("Error" + e);
            httpCode = new Document("http-code", 504);
        }

        return httpCode;
    }
    
    @DELETE
    @Path("delete/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Document deleteJson(@PathParam("username") String username) {
        Document httpCode = new Document("http-code", 504);
        try {
            getCollections();
            userCollection.findOneAndDelete(eq("username", username));
            httpCode = new Document("http-code", 201);
        } catch (Exception e) {
            System.out.println("Error" + e);
        }
        return httpCode;
    }
    
    /* REGLA DE NEGOCIO */
    @GET
    @Path("calculateAge/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Document calculateDate(@PathParam("username") String username) throws ParseException {
        Document httpCode = new Document("http-code", 504);
        try {
            getCollections();
            findIterableUser = userCollection.find(eq("username", username));

            if (findIterableUser != null) {
                Document docObjectCard = findIterableUser.first();
                String birthDate = docObjectCard.getString("dateBirth");
                Date actualDate = new Date();
                
                String dayBirth = birthDate.substring(0, 2);
                String monthBirth = birthDate.substring(3, 5);
                String yearBirth = birthDate.substring(6, 10);
                
                String monthActul = ((actualDate.getMonth() + 1) < 10) ? "0" + (actualDate.getMonth() + 1) : "" + (actualDate.getMonth() + 1);
                String actualYear = "" + (actualDate.getYear() + 1900);
                String dayActual = "" + actualDate.getDate();

                LocalDate date1 = LocalDate.parse(actualYear + "-" + monthActul + "-" + dayActual, DateTimeFormatter.ISO_DATE);
                LocalDate date2 = LocalDate.parse(yearBirth + "-" + monthBirth + "-" + dayBirth, DateTimeFormatter.ISO_DATE);
                
                Period period = Period.between(date1, date2);

                int years = Math.abs(period.getYears());
                int months = Math.abs(period.getMonths());
                int days = Math.abs(period.getDays());

                String query = "{"
                        + "FechaDeNacimiento: '" + birthDate + "',"
                        + "Edad: " + "'" + years + " años"
                        + ", " + months + " meses" 
                        + " y " + days + " dias" + "'" + ","
                        + "FechaActual: '" + actualDate.getDate() + "/" + (actualDate.getMonth() + 1) + "/" + (actualDate.getYear() + 1900) + "',"
                        + "}";
                httpCode = Document.parse(query);
            }

        } catch (Exception e) {
            System.out.println("Error" + e);
        }

        return httpCode;
    }

    /* FUNCIONES UTILES */
    private void getCollections() {
        mongoDatabase = connectionMongoDB.getMongoDatabase();
        userCollection = mongoDatabase.getCollection("User");
        findIterableUser = userCollection.find(new Document());
        mongoCursorUser = findIterableUser.iterator();
        System.out.println("Rest.UsersResource.getCollections()");
    }

    private ArrayList getUserlist() {
        userList = new ArrayList<>();
        try {
            getCollections();
            while (mongoCursorUser.hasNext()) {
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
                user.setDateBirth(userObject.getString("dateBirth"));
                userList.add(user);
            }
        } catch (Exception e) {
        }
        return userList;
    }
}
