package Rest;

import ConnectionDB.ConnectionMongoDB;
import Model.CreditCard;
import Model.Invoice;
import Model.User;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.eq;
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
            Document docObject = mongoCursorInvoice.next();

            invoice = new Invoice();
            invoice.setDetalle(docObject.getString("detalle"));
            invoice.setPriceUnit(docObject.getDouble("priceUnit"));
            invoice.setQuantity(docObject.getInteger("quantity"));
            invoice.setTotal(docObject.getDouble("total"));

            if (docObject.getString("username") != null) {
                findIterableUser = userCollection.find(eq("username", docObject.getString("username")));
                Document userObject = findIterableUser.first();
                user = new User();
                user.setName(userObject.getString("name"));
                user.setSurname(userObject.getString("surname"));
                user.setAddress(userObject.getString("address"));
                user.setPhone(userObject.getString("phone"));
                invoice.setUser(user);
            }
            invoiceList.add(invoice);
        }

        return invoiceList;
    }
}
