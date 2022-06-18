package Rest;

import ConnectionDB.ConnectionMongoDB;
import Model.CreditCard;
import Model.User;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.*;
import static com.mongodb.client.model.Updates.set;
import java.text.ParseException;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
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
    FindIterable<Document> findIterableCard;
    MongoCursor<Document> mongoCursorCard;
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
        } catch (Exception e) {
            System.out.println("Error" + e);
        }
        return userList;
    }

    @GET
    @Path("/getCard/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public User getJson(@PathParam("id") int id) {
        user = new User();
        try {
            getCollections();

            findIterableUser = userCollection.find(eq("idCreditCard", id));
            findIterableCard = cardCollection.find(eq("id", id));
            Document docObject = findIterableUser.first();
            Document docObjectCard = findIterableCard.first();
            user.setUsername(docObject.getString("username"));
            setCreditCard(docObjectCard);
        } catch (Exception e) {
            System.out.println("Error" + e);
        }
        return user;
    }

    @POST
    @Path("addCard/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Document postJson(CreditCard content, @PathParam("username") String username) {
        Document httpCode;
        String query = "{"
                + "numberCard: " + content.getNumberCard() + ","
                + "dateExpiry: " + "'" + content.getDateExpiry() + "'" + ","
                + "ownCard: " + "'" + content.getOwnCard() + "'" + ","
                + "securityCode: " + content.getSecurityCode() + ","
                + "id: " + content.getId() + ","
                + "}";

        try {
            getCollections();

            findIterableUser = userCollection.find(eq("username", username));
            Document userObject = findIterableUser.first();
            if (userObject.getInteger("idCreditCard") != -1) {
                cardCollection.findOneAndDelete(eq("id", userObject.getInteger("idCreditCard")));
            }
            userCollection.updateOne(eq("username", username), set("idCreditCard", content.getId()));
            cardCollection.insertOne(Document.parse(query));
            httpCode = new Document("http-code", 201);

        } catch (Exception e) {
            System.out.println("Error" + e);
            httpCode = new Document("http-code", 504);
        }

        return httpCode;
    }

    @PUT
    @Path("updateCard/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Document putJson(CreditCard content, @PathParam("id") int id) {
        Document httpCode;
        try {
            getCollections();
            String query = "{"
                    + "numberCard: " + content.getNumberCard() + ","
                    + "dateExpiry: " + "'" + content.getDateExpiry() + "'" + ","
                    + "ownCard: " + "'" + content.getOwnCard() + "'" + ","
                    + "securityCode: " + content.getSecurityCode() + ","
                    + "id: " + content.getId() + ","
                    + "}";

            findIterableCard = cardCollection.find(eq("id", id));
            Document cardObject = findIterableCard.first();
            if (cardObject.getInteger("id") != null) {
                cardCollection.findOneAndDelete(eq("id", id));
                cardCollection.insertOne(Document.parse(query));
                userCollection.updateOne(eq("idCreditCard", id), set("idCreditCard", content.getId()));
                httpCode = new Document("http-code", 201);
            } else {
                httpCode = new Document("http-code", 504);
            }

        } catch (Exception e) {
            System.out.println("Error" + e);
            httpCode = new Document("http-code", 504);
        }

        return httpCode;
    }

    @DELETE
    @Path("deleteCard/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Document deleteJson(@PathParam("id") int id) {
        Document httpCode = new Document("http-code", 504);
        try {
            getCollections();
            cardCollection.findOneAndDelete(eq("id", id));
            userCollection.updateOne(eq("idCreditCard", id), set("idCreditCard", -1));
            httpCode = new Document("http-code", 201);
        } catch (Exception e) {
            System.out.println("Error" + e);
        }
        return httpCode;
    }

    /* REGLA DE NEGOCIO */
    @GET
    @Path("calculateDate/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Document calculateDate(@PathParam("id") int id) throws ParseException {
        Document httpCode = new Document("http-code", 504);
        try {
            getCollections();
            findIterableCard = cardCollection.find(eq("id", id));

            if (findIterableCard != null) {
                Document docObjectCard = findIterableCard.first();
                String dateExpiry = docObjectCard.getString("dateExpiry");
                Date actualDate = new Date();
                String monthExpiry = dateExpiry.substring(0, 2);
                String yearExpiry = "" + (Integer.parseInt(dateExpiry.substring(3, 5)) + 2000) + "";
                String monthActul = ((actualDate.getMonth() + 1) < 10) ? "0" + (actualDate.getMonth() + 1) : "" + (actualDate.getMonth() + 1);
                String actualYear = "" + (actualDate.getYear() + 1900);

                LocalDate date1 = LocalDate.parse(actualYear + "-" + monthActul + "-" + actualDate.getDate(), DateTimeFormatter.ISO_DATE);
                LocalDate date2 = LocalDate.parse(yearExpiry + "-" + monthExpiry + "-01", DateTimeFormatter.ISO_DATE);
                
                Period period = Period.between(date1, date2);

                int years = Math.abs(period.getYears());
                int months = Math.abs(period.getMonths()) + 1;

                String query = "{"
                        + "ValidaHasta: '" + monthExpiry + "/" + yearExpiry + "',"
                        + "TiempoRestante: " + "'" + years + " años"
                        + " y " + months + " meses" + "'" + ","
                        + "FechaActual: '" + (actualDate.getMonth() + 1) + "/" + (actualDate.getYear() + 1900) + "',"
                        + "}";
                httpCode = Document.parse(query);
            }

        } catch (Exception e) {
            System.out.println("Error" + e);
        }

        return httpCode;
    }

    /* FUNCIONES UTILES */
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
            Document userObject = mongoCursorUser.next();

            if (userObject.getInteger("idCreditCard") != null && userObject.getInteger("idCreditCard") != -1) {
                user = new User();
                user.setUsername(userObject.getString("username"));
                findIterableCard = cardCollection.find(eq("id", userObject.getInteger("idCreditCard")));

                if (findIterableCard != null) {
                    Document docObjectCard = findIterableCard.first();
                    setCreditCard(docObjectCard);
                    userList.add(user);
                }
            } else {
                userCollection.updateOne(eq("username", userObject.getString("username")), set("idCreditCard", -1));
            }
        }

        return userList;
    }
}
