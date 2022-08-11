import React from "react";
import Button from "@mui/material/Button";

const Cart = (props) => {
  return (
    <div className="container">
      <div className="my-5">
        <h4>Carrito de compras</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Accion</th>
              <th scope="col">Total</th>
            </tr>
          </thead>

          <tbody id="items">
            {props.cart.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{1}</td>
                <td>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ margin: "0 10px" }}
                  >
                    +
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ margin: "0 10px" }}
                  >
                    -
                  </Button>
                </td>
                <td>$ {item.price}</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className="footer-carrito">
              <th scope="row" colSpan="2">
                Total productos
              </th>
              <td></td>
              <td>
                <Button
                  variant="contained"
                  color="success"
                  onClick={props.emptyCart}
                  sx={{ margin: "0 10px" }}
                >
                  Pagar
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={props.emptyCart}
                >
                  Vaciar
                </Button>
              </td>
              <td className="font-weight-bold">
                $ <span></span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
