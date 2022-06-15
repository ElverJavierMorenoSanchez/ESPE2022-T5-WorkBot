package Model;

/**
 *
 * @author santi
 */
public class Invoice {
    private int quantity;
    private String detalle;
    private double priceUnit;
    private double total;

    public Invoice(int quantity, String detalle, double priceUnit, double total) {
       
        this.quantity = quantity;
        this.detalle = detalle;
        this.priceUnit = priceUnit;
        this.total = total;
    }

    public Invoice() {
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
    
}
