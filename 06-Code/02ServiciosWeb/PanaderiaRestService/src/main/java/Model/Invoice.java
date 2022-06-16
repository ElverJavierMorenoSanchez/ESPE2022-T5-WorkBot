package Model;

/**
 *
 * @author santi
 */
public class Invoice {
    private int id;
    private int quantity;   
    private String detalle;
    private double priceUnit;
    private double total;
    private User user;

    

    public Invoice(int id, int quantity, String detalle, double priceUnit, double total) {
       
        this.id = id;
        this.quantity = quantity;
        this.detalle = detalle;
        this.priceUnit = priceUnit;
        this.total = total;
    }

    public Invoice() {
    }
    
        public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDetalle() {
        return detalle;
    }

    public void setDetalle(String detalle) {
        this.detalle = detalle;
    }

    public double getPriceUnit() {
        return priceUnit;
    }

    public void setPriceUnit(double priceUnit) {
        this.priceUnit = priceUnit;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
    
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    
}
