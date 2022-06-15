package Rest;

import ConnectionDB.ConnectionMongoDB;
import Model.CreditCard;
import Model.User;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.*;
import static com.mongodb.client.model.Updates.set;
import java.util.ArrayList;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import javax.enterprise.context.RequestScoped;
import org.bson.Document;

/**
 * REST Web Service
 *
 * @author Javier Snz
 */
@Path("CreditCard")
@RequestScoped
public class CreditCardResource {

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
    CreditCard creditCard;

    public CreditCardResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList getJson() {
        try {
            getCollections();
            userList = getCardList();
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return userList;
    }

    @GET
    @Path("/getCard/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public User getJson(@PathParam("id") int id) {
        try {
            getCollections();

            findIterableUser = userCollection.find(eq("idCreditCard", id));
            findIterableCreditCard = cardCollection.find(eq("id", id));

            if (!(findIterableUser == null || findIterableCreditCard == null)) {
                Document docObject = findIterableUser.first();
                Document docObjectCard = findIterableCreditCard.first();

                user = new User();
                user.setName(docObject.getString("name"));
                setCreditCard(docObjectCard);
            }
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return user;
    }

    @POST
    @Path("addCard/{username}")
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
            
            userList = getCardList();

        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        
        return userList; 
    }

    @PUT
    @Path("updateCard/{id}/{ownCard}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public ArrayList putJson(@PathParam("id") int id, @PathParam("ownCard") String ownCard) {
        try {
            getCollections();
            
            cardCollection.updateOne(eq("id", id), set("ownCard", ownCard));
            userList = getCardList();

        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        
        return userList;
    }

    @DELETE
    @Path("deleteCard/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public ArrayList deleteJson(@PathParam("id") int id) {
        try {
            getCollections();
            cardCollection.findOneAndDelete(eq("id", id));
            userCollection.updateOne(eq("idCreditCard", id), set("idCreditCard", -1));
            userList = getCardList();
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return userList;
    }

    //////////
    private void setCreditCard(Document docObjectCard) {
        creditCard = new CreditCard();
        creditCard.setId(docObjectCard.getInteger("id"));
        creditCard.setDateExpiry(docObjectCard.getString("dateExpiry"));
        creditCard.setSecurityCode(docObjectCard.getInteger("securityCode"));
        creditCard.setOwnCard(docObjectCard.getString("ownCard"));
        creditCard.setNumberCard(docObjectCard.getLong("numberCard"));

        user.setCreditCard(creditCard);
    }

    private void getCollections() {
        mongoDatabase = connectionMongoDB.getMongoDatabase();
        userCollection = mongoDatabase.getCollection("User");
        cardCollection = mongoDatabase.getCollection("CreditCard");
        findIterableUser = userCollection.find(new Document());
        mongoCursorUser = findIterableUser.iterator();
    }

    private ArrayList getCardList() {
        userList = new ArrayList<>();
        while (mongoCursorUser.hasNext()) {
            Document docObject = mongoCursorUser.next();

            if (docObject.getInteger("idCreditCard") != -1) {
                user = new User();
                user.setName(docObject.getString("name"));
                findIterableCreditCard = cardCollection.find(eq("id", docObject.getInteger("idCreditCard")));

                if (findIterableCreditCard != null) {
                    Document docObjectCard = findIterableCreditCard.first();
                    setCreditCard(docObjectCard);
                    userList.add(user);
                }
            }
        }
        
        return userList;
    }
}
