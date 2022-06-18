package Rest;

import ConnectionDB.ConnectionMongoDB;
import Model.Invoice;
import Model.User;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.eq;
import java.util.ArrayList;
import javax.ws.rs.*;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.core.*;
import org.bson.Document;

/**
 * REST Web Service
 *
 * @author santi
 */
@Path("Invoice")
@RequestScoped
public class InvoiceResource {

    ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    MongoDatabase mongoDatabase;
    MongoCollection userCollection;
    MongoCollection invoiceCollection;
    ArrayList<Invoice> invoiceList;
    FindIterable<Document> findIterableInvoice;
    MongoCursor<Document> mongoCursorInvoice;
    FindIterable<Document> findIterableUser;
    MongoCursor<Document> mongoCursorUser;
    User user;
    Invoice invoice;

    @Context
    private UriInfo context;

    public InvoiceResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList getJson() {
        try {
            getCollections();
            invoiceList = getInvoiceList();
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return invoiceList;
    }

    @GET
    @Path("/getInvoice/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Invoice getJson(@PathParam("usermane") String username) {
        try {
            getCollections();

            findIterableUser = userCollection.find(eq("usernameInvoice", username));
            findIterableInvoice = invoiceCollection.find(eq("username", username));

            if (!(findIterableUser == null || findIterableInvoice == null)) {
                Document docObjectUser = findIterableUser.first();
                Document docObjectInvoice = findIterableInvoice.first();

                setUser(docObjectUser);
                setInvoice(docObjectInvoice);
                invoice.setUser(user);
            }
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return invoice;
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(Invoice content) {
    }

    private void getCollections() {
        mongoDatabase = connectionMongoDB.getMongoDatabase();
        userCollection = mongoDatabase.getCollection("User");
        invoiceCollection = mongoDatabase.getCollection("Invoice");
        findIterableInvoice = invoiceCollection.find(new Document());
        mongoCursorInvoice = findIterableInvoice.iterator();
    }

    private ArrayList<Invoice> getInvoiceList() {
        invoiceList = new ArrayList<>();
        while (mongoCursorInvoice.hasNext()) {
            Document docObjectInvoice = mongoCursorInvoice.next();

            setInvoice(docObjectInvoice);
            
            if (docObjectInvoice.getString("username") != null) {
                findIterableUser = userCollection.find(eq("username", docObjectInvoice.getString("username")));
                Document userObject = findIterableUser.first();
                
                setUser(userObject);
                invoice.setUser(user);
            }
            invoiceList.add(invoice);
        }
        return invoiceList;
    }

    private void setInvoice(Document docObject) {
        invoice = new Invoice();
        invoice.setDetail(docObject.getString("detail"));
        invoice.setPriceUnit(docObject.getDouble("priceUnit"));
        invoice.setQuantity(docObject.getInteger("quantity"));
        invoice.setTotal(docObject.getDouble("total"));
    }

    private void setUser(Document docObjectUser) {
        user = new User();
        user.setName(docObjectUser.getString("name"));
        user.setSurname(docObjectUser.getString("surname"));
        user.setAddress(docObjectUser.getString("address"));
        user.setPhone(docObjectUser.getString("phone"));
    }
}
