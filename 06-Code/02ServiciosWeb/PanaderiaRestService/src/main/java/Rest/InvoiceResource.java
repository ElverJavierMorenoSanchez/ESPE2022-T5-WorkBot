package Rest;

import ConnectionDB.ConnectionMongoDB;
import Model.Invoice;
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

    
    public InvoiceResource() {
    }
    
    ArrayList<Invoice> invoiceList = new ArrayList<>();
    ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    MongoDatabase mongoDatabase;
       
    @GET
    @Path("listar")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Invoice> getJson() {
        mongoDatabase = connectionMongoDB.getMongoDatabase();
        MongoCollection collection = mongoDatabase.getCollection("Invoice");
        FindIterable<Document> findIterable = collection.find(new Document());
        MongoCursor<Document> mongoCursor = findIterable.iterator();
        while (mongoCursor.hasNext()){
            Document docObject = mongoCursor.next();
            
        }
        
        return invoiceList;
    }
    
    /**
     * PUT method for updating or creating an instance of InvoiceResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(Invoice content) {
    }
}
