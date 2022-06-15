
package Rest;

import ConnectionDB.ConnectionMongoDB;
import Model.Product;
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
 * @author RobertoCarlos
 */
@Path("Product")
@RequestScoped
public class ProductResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ProductResource
     */
    public ProductResource() {
    }

    ArrayList<Product> productList = new ArrayList<>();
       ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
            MongoDatabase mongoDatabase;
           
    @GET
    @Path("listar")
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

    /**
     * PUT method for updating or creating an instance of ProductResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(Product content) {
    }
}
