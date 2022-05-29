package ModelDAO;

import ConnectionDB.ConnectionMongoDB;
import Interfaces.ProductCrud;
import Model.Product;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import java.sql.ResultSet;
import java.util.ArrayList;
import org.bson.Document;

/**
 *
 * @author Javier Snz
 */
public class ProductDAO implements ProductCrud {

    ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    MongoDatabase mongoDatabase;
    ResultSet resultSet;
    Product product;

    @Override
    public ArrayList listProduct() {
        ArrayList<Product> productList = new ArrayList<>();

        try {
            mongoDatabase = connectionMongoDB.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Productos");
            FindIterable<Document> findIterable = collection.find(new Document());
            MongoCursor<Document> mongoCursor = findIterable.iterator();

            while (mongoCursor.hasNext()) {
                Document docObject = mongoCursor.next();
                product = new Product();
                product.setName(docObject.getString("name"));
                product.setPrice(docObject.getDouble("price"));
                product.setImgUrl(docObject.getString("img"));
                productList.add(product);
            }
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }

        return productList;
    }

    @Override
    public Product listProduct(int id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public boolean addProduct(Product product) {
        String query = "{"
                + "name: " + product.getName() + ","
                + "price: " + product.getPrice() + ","
                + "quantity: " + product.getQuantity() + ","
                + "profit: " + product.getProfit() + ","
                + "}";

        try {
            mongoDatabase = connectionMongoDB.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Productos");
            collection.insertOne(Document.parse(query));
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }

        return false;
    }

    @Override
    public boolean updateProduct(Product product) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public boolean deleteProduct(Product product) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public double calculateProfits(int quality, double price) {
        double profit;
        double IVA = (double) 0.12;
        profit = (quality * price) * IVA;

        return profit;
    }
}