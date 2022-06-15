
package Rest;

import Model.Invoice;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.core.MediaType;

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

    /**
     * Creates a new instance of InvoiceResource
     */
    public InvoiceResource() {
    }

    /**
     * Retrieves representation of an instance of Rest.InvoiceResource
     * @return an instance of Model.Invoice
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Invoice getJson() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
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
