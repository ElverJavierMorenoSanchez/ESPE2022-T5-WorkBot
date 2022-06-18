package Model;

/**
 *
 * @author santi
 */
public class Invoice {

    private int quantity;
    private String detail;
    private double priceUnit;
    private double total;
    private User user;

    public Invoice(int quantity, String detalle, double priceUnit, double total) {

        this.quantity = quantity;
        this.detail = detalle;
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

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
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
