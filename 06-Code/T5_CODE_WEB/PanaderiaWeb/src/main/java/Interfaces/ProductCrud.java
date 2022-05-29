package Interfaces;

import Model.Product;
import java.util.ArrayList;

/**
 *
 * @author Javier Snz
 */
public interface ProductCrud {

    public ArrayList listProduct();

    public Product listProduct(int id);

    public boolean addProduct(Product product);

    public boolean updateProduct(Product product);

    public boolean deleteProduct(Product product);

    /*Regla de negocio*/
    public double calculateProfits(int quality, double price);
}