package Rest;

import ConnectionDB.ConnectionMongoDB;
import Model.Product;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.eq;
import java.sql.ResultSet;
import java.sql.SQLException;
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
 * @author RobertoCarlos
 */
@Path("Product")
@RequestScoped
public class ProductResource {

    
    @Context
    private UriInfo context;
    
    ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    MongoDatabase mongoDatabase;
    MongoCollection productCollection;
    ArrayList<Product> productList;
    FindIterable<Document> findIterableProduct;
    MongoCursor<Document> mongoCursorProduct;
    Product product;

    public ProductResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Product> getJson() {
        productList = new ArrayList<>();
        product = new Product();
        try {
            getCollections();
            
            while (mongoCursorProduct.hasNext()) {
                Document docObject = mongoCursorProduct.next();
                product = setProduct(docObject);
                productList.add(product);
            }
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }

        return productList;
    }

    @GET
    @Path("get/{category}")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList getJson(@PathParam("category") String category) {
        productList = new ArrayList<>();
        product = new Product();
        
        try {
            getCollections();

            findIterableProduct = productCollection.find(eq("category", category));
            mongoCursorProduct = findIterableProduct.iterator();
            
            while (mongoCursorProduct.hasNext()) {
                Document docObject = mongoCursorProduct.next();
                product = setProduct(docObject);
                productList.add(product);
            }
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return productList;
    }
    
    @POST
    @Path("add")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Document postJson(Product content) {
        Document httpCode;
        String query = "{"
                + "id: " + content.getId() + ","
                + "name: " + "'" + content.getName() + "'" + ","
                + "price: " + content.getPrice() + ","
                + "quantity: " + content.getQuantity() + ","
                + "category: " + "'" + content.getCategory() + "'" + ","
                + "description: " + "'" + content.getDescription() + "'" + ","
                + "imgUrl: " + "'" + content.getImgUrl() + "'" + ","
                + "}";
        try {
            getCollections();
            productCollection.insertOne(Document.parse(query));
            httpCode = new Document("http-code", 201);
        } catch (MongoException e) {
            httpCode = new Document("http-code", 504);
            System.out.println("Error" + e);
        }
        return httpCode;
    }
    
    @PUT
    @Path("update/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Document putJson(Product content, @PathParam("id") int id) {
        Document httpCode;
        String query = "{"
                + "id: " + content.getId() + ","
                + "name: " + "'" + content.getName() + "'" + ","
                + "price: " + content.getPrice() + ","
                + "quantity: " + content.getQuantity() + ","
                + "category: " + "'" + content.getCategory() + "'" + ","
                + "description: " + "'" + content.getDescription() + "'" + ","
                + "imgUrl: " + "'" + content.getImgUrl() + "'" + ","
                + "}";
        try {
            getCollections();
            findIterableProduct = productCollection.find(eq("id", id));
            Document cardObject = findIterableProduct.first();
            if (cardObject.getInteger("id") != null) {
                productCollection.findOneAndDelete(eq("id", id));
                productCollection.insertOne(Document.parse(query));
                httpCode = new Document("http-code", 201);
            } else {
                httpCode = new Document("http-code", 504);
            }
        } catch (MongoException e) {
            httpCode = new Document("http-code", 504);
            System.out.println("Error" + e);
        }
        return httpCode;
    }
    
    @DELETE
    @Path("delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Document deleteJson(@PathParam("id") int id) {
        Document httpCode = new Document("http-code", 504);
        try {
            getCollections();
            productCollection.findOneAndDelete(eq("id", id));
            httpCode = new Document("http-code", 201);
        } catch (Exception e) {
            System.out.println("Error" + e);
        }
        return httpCode;
    }
    
    /* REGLA DE NEGOCIO */
    
    @GET
    @Path("calculateCategoryInventary/{category}")
    @Produces(MediaType.APPLICATION_JSON)
    public Document getJson1(@PathParam("category") String category){
        Document httpCode = new Document("http-code", 504);
        product = new Product();
        int productTotal = 0;
        try {
            getCollections();

            findIterableProduct = productCollection.find(eq("category", category));
            mongoCursorProduct = findIterableProduct.iterator();
            while (mongoCursorProduct.hasNext()) {
                Document productObject = mongoCursorProduct.next();
                
                int c = productObject.getInteger("quantity");
                productTotal = productTotal+c;
            }
            
            String query = "{"
                        + "Categoria: '" + category+ "',"
                        + "TotalProductosDisponibles: " + productTotal
                        + "}";
            
            httpCode = new Document(Document.parse(query));
        } catch (Exception e) {
            System.out.println("Error" + e);
            httpCode = new Document("http-code", 504);
        }
        return httpCode;
    }
   
    
    /* FUNCIONES UTILES */
    
    private void getCollections() {
        mongoDatabase = connectionMongoDB.getMongoDatabase();
        productCollection = mongoDatabase.getCollection("Products");
        findIterableProduct = productCollection.find(new Document());
        mongoCursorProduct = findIterableProduct.iterator();
    }

    private Product setProduct(Document docObject) {
        Product auxProduct = new Product();
        auxProduct.setName(docObject.getString("name"));
        auxProduct.setPrice(docObject.getDouble("price"));
        auxProduct.setQuantity(docObject.getInteger("quantity"));
        auxProduct.setCategory(docObject.getString("category"));
        auxProduct.setDescription(docObject.getString("description"));
        auxProduct.setImgUrl(docObject.getString("imgUrl"));
        auxProduct.setId(docObject.getInteger("id"));

        return auxProduct;
    }
}
