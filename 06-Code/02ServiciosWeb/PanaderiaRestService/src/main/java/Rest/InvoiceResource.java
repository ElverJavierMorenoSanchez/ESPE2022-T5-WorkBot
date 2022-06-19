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
import static com.mongodb.client.model.Updates.set;
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

    @Context
    private UriInfo context;
    ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    MongoDatabase mongoDatabase;
    MongoCollection userCollection;
    MongoCollection invoiceCollection;
    MongoCollection productCollection;
    ArrayList<Invoice> invoiceList;
    FindIterable<Document> findIterableInvoice;
    FindIterable<Document> findIterableProduct;
    MongoCursor<Document> mongoCursorInvoice;
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
            invoiceList = getInvoiceList();
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return invoiceList;
    }

    @GET
    @Path("get/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList getJson(@PathParam("username") String username) {
        invoiceList = new ArrayList<>();
        try {
            getCollections();

            findIterableUser = userCollection.find(eq("username", username));
            Document docObjectUser = findIterableUser.first();

            findIterableInvoice = invoiceCollection.find(eq("username", username));
            mongoCursorInvoice = findIterableInvoice.iterator();

            while (mongoCursorInvoice.hasNext()) {
                invoice = new Invoice();
                Document docObjectInvoice = mongoCursorInvoice.next();
                setUser(docObjectUser);
                setInvoice(docObjectInvoice);
                invoice.setUser(user);
                invoiceList.add(invoice);
            }
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return invoiceList;
    }

    @GET
    @Path("getWithId/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Invoice getInvocie(@PathParam("id") int id) {
        invoice = new Invoice();
        try {
            getCollections();

            findIterableInvoice = invoiceCollection.find(eq("id", id));
            Document invoiceObject = findIterableInvoice.first();

            findIterableUser = userCollection.find(eq("username", invoiceObject.getString("username")));
            Document docObjectUser = findIterableUser.first();
            setUser(docObjectUser);
            setInvoice(invoiceObject);
            invoice.setUser(user);

        } catch (Exception e) {
            System.out.println("Error" + e);
        }
        return invoice;
    }

    @POST
    @Path("add/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Document postJson(Invoice content, @PathParam("username") String username) {
        Document httpCode;

        try {
            getCollections();
            findIterableUser = userCollection.find(eq("username", username));
            Document userObject = findIterableUser.first();

            findIterableProduct = productCollection.find(eq("id", content.getProductId()));
            Document productObject = findIterableProduct.first();

            if (userObject != null && productObject != null) {
                double totalPrice = calculateTotal(content.getQuantity(), productObject.getDouble("price"));

                String query = "{"
                        + "id: " + content.getId() + ","
                        + "productId: " + content.getProductId() + ","
                        + "quantity: " + content.getQuantity() + ","
                        + "detail: '" + productObject.getString("description") + "',"
                        + "priceUnit: " + productObject.getDouble("price") + ","
                        + "total: " + totalPrice + ","
                        + "username: '" + username + "',"
                        + "}";

                int totalQuantity = productObject.getInteger("quantity") - content.getQuantity();

                productCollection.updateOne(eq("id", content.getProductId()), set("quantity", totalQuantity));
                invoiceCollection.insertOne(Document.parse(query));
                httpCode = new Document("http-code", 201);

            } else {
                httpCode = new Document("http-code", 504);
            }
        } catch (MongoException e) {
            System.out.println("Error" + e);
            httpCode = new Document("http-code", 504);
        }

        return httpCode;
    }

    @DELETE
    @Path("delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Document deleteJson(@PathParam("id") int id) {
        Document httpCode = new Document("http-code", 504);
        try {
            getCollections();
            invoiceCollection.findOneAndDelete(eq("id", id));
            httpCode = new Document("http-code", 201);
        } catch (Exception e) {
            System.out.println("Error" + e);
        }
        return httpCode;
    }

    /* REGLA DE NEGOCIO */
    @PUT
    @Path("calculateTotalPrice")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Document calculateTotalPrice(Invoice content) {
        Document httpCode;

        try {
            getCollections();

            findIterableProduct = productCollection.find(eq("id", content.getProductId()));
            Document productObject = findIterableProduct.first();

            if (productObject != null) {

                double totalPrice = calculateTotal(content.getQuantity(), productObject.getDouble("price"));

                String query = "{"
                        + "productId: " + content.getProductId() + ","
                        + "Cantidad: " + content.getQuantity() + ","
                        + "Detalles: '" + productObject.getString("description") + "',"
                        + "PrecioUnitario: " + productObject.getDouble("price") + ","
                        + "Total: " + totalPrice + ","
                        + "}";

                httpCode = new Document(Document.parse(query));
            } else {
                httpCode = new Document("http-code", 504);
            }
        } catch (Exception e) {
            System.out.println("Error" + e);
            httpCode = new Document("http-code", 504);
        }

        return httpCode;
    }

    private double calculateTotal(int quantity, double priceUnit) {
        double IVA = 0.12;
        double totalPrice = (quantity * priceUnit);
        double totalIva = totalPrice * IVA;

        return totalPrice + totalIva;
    }

    /* FUNCIONES UTILES */
    private void getCollections() {
        mongoDatabase = connectionMongoDB.getMongoDatabase();
        userCollection = mongoDatabase.getCollection("User");
        invoiceCollection = mongoDatabase.getCollection("Invoice");
        productCollection = mongoDatabase.getCollection("Products");
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
        invoice.setId(docObject.getInteger("id"));
        invoice.setProductId(docObject.getInteger("productId"));
    }

    private void setUser(Document docObjectUser) {
        user = new User();
        user.setName(docObjectUser.getString("name"));
        user.setSurname(docObjectUser.getString("surname"));
        user.setAddress(docObjectUser.getString("address"));
        user.setPhone(docObjectUser.getString("phone"));
        user.setUsername(docObjectUser.getString("username"));
    }
}
