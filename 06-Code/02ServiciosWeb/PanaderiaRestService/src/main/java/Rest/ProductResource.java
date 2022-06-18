
package Rest;

import ConnectionDB.ConnectionMongoDB;
import Model.CreditCard;
import Model.Product;
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
import javax.ws.rs.POST;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import org.bson.Document;

/**
 * REST Web Service
 *
 * @author RobertoCarlos
 */
@Path("Product")
@RequestScoped
public class ProductResource {

    @Context
    private UriInfo context;
    MongoCollection userCollection;
    MongoCollection cardCollection;
    FindIterable<Document> findIterableCreditCard;
    MongoCursor<Document> mongoCursorCreditCard;
    FindIterable<Document> findIterableUser;
    MongoCursor<Document> mongoCursorUser;
    Product product;
   // CreditCard creditCard;
   
    public ProductResource() {
    }

    ArrayList<Product> productList = new ArrayList<>();
       ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
            MongoDatabase mongoDatabase;
           
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Product> getJson() {
    mongoDatabase = connectionMongoDB.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Products");
            FindIterable<Document> findIterable = collection.find(new Document());
            MongoCursor<Document> mongoCursor = findIterable.iterator();
            while (mongoCursor.hasNext()) {
                Document docObject = mongoCursor.next();
                Product product = new Product();
                product.setName(docObject.getString("name"));
                product.setPrice(docObject.getDouble("price"));
                product.setQuantity(docObject.getInteger("quantity"));
                product.setCategory(docObject.getString("category"));
                product.setDescription(docObject.getString("description"));
                product.setImgUrl(docObject.getString("imgUrl"));
                productList.add(product);
            }
            return productList;
    }

    @POST
    @Path("addProduct")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes (MediaType.APPLICATION_JSON)
     public ArrayList<Product>  postJson(Product product) {
        String query = "{"
                + "name: " +"'"+ product.getName() + "'"+","
                + "price: " + product.getPrice() +","
                + "quantity: " + product.getQuantity() +","
                + "category: " +"'"+ product.getCategory() + "'"+","
                + "description: " +"'"+ product.getDescription() + "'"+","
                + "imgUrl: " +"'"+ product.getImgUrl() + "'"+","
                + "}";
        productList.add(product);
        
        try {
            mongoDatabase = connectionMongoDB.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Products");
            collection.insertOne(Document.parse(query));
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return productList;
     }
     
     
     @GET
    @Path("/getProduct/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Product> getJson(@PathParam("id") int id) {
        try {
            getCollections();

            findIterableUser = userCollection.find(eq("idCreditCard", id));
            findIterableCreditCard = cardCollection.find(eq("id", id));

            if (!(findIterableUser == null || findIterableCreditCard == null)) {
                Document docObject = findIterableUser.first();
                Document docObjectCard = findIterableCreditCard.first();

               // user = new User();
                //ser.setName(docObject.getString("name"));
               // setCreditCard(docObjectCard);
            }
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return productList;
    }
     
    /**
     * PUT method for updating or creating an instance of ProductResource
     * @param content representation for the resource
     */
    
     @POST
    @Path("addProduct/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public ArrayList postJson(CreditCard content, @PathParam("username") String username) {
        String query = "{"
                + "numberCard: " + content.getNumberCard() + ","
                + "dateExpiry: " + "'" + content.getDateExpiry() + "'" + ","
                + "ownCard: " + "'" + content.getOwnCard() + "'" + ","
                + "securityCode: " + content.getSecurityCode() + ","
                + "id: " + content.getId() + ","
                + "}";

        try {
            getCollections();
            cardCollection.insertOne(Document.parse(query));
            userCollection.updateOne(eq("username", username), set("idCreditCard", content.getId()));
            

        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        
        return productList;
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(Product content) {
    }

    private void getCollections() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
}
