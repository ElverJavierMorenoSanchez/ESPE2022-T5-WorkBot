package Rest;

import ConnectionDB.ConnectionMongoDB;
import Model.Invoice;
import Model.User;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.core.MediaType;
import org.bson.Document;

/**
 * REST Web Service
 *
 * @author santi
 */
@Path("Invoice")
@RequestScoped
public class InvoiceResource {

    @Context
    private UriInfo context;

    ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    MongoDatabase mongoDatabase;
    MongoCollection userCollection;
    MongoCollection cardCollection;
    ArrayList<User> userList;
    FindIterable<Document> findIterableCreditCard;
    MongoCursor<Document> mongoCursorCreditCard;
    FindIterable<Document> findIterableUser;
    MongoCursor<Document> mongoCursorUser;
    User user;
    Invoice invoice;
    
    public InvoiceResource() {
    }
       
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList getJson() {
        try {
            getCollections();
            userList = getInvoiceList();
        } catch (MongoException e){
            System.out.println("Error" + e);
        }
        return userList;
    }
    
    /**
     * PUT method for updating or creating an instance of InvoiceResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(Invoice content) {
    }

    private void getCollections() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    private ArrayList<User> getInvoiceList() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
}
