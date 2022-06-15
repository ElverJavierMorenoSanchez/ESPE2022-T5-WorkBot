package Model;

import java.util.Date;

/**
 *
 * @author Javier Snz
 */
public class CreditCard {
    private long numberCard;
    private String dateExpiry;
    private int securityCode;
    private String ownCard;
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public CreditCard(int numberCard, String dateExpiry, int securityCode, String ownCard) {
        this.numberCard = numberCard;
        this.dateExpiry = dateExpiry;
        this.securityCode = securityCode;
        this.ownCard = ownCard;
    }

    public CreditCard() {
    }
    
    public long getNumberCard() {
        return numberCard;
    }

    public void setNumberCard(long numberCard) {
        this.numberCard = numberCard;
    }

    public String getDateExpiry() {
        return dateExpiry;
    }

    public void setDateExpiry(String dateExpiry) {
        this.dateExpiry = dateExpiry;
    }

    public int getSecurityCode() {
        return securityCode;
    }

    public void setSecurityCode(int securityCode) {
        this.securityCode = securityCode;
    }

    public String getOwnCard() {
        return ownCard;
    }

    public void setOwnCard(String ownCard) {
        this.ownCard = ownCard;
    }
}
