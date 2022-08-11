import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { postInvoice, putInvoice } from "../../util/invoiceAxios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  borderRadius: "15px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  align: "center",
  p: 4,
};

export default function CreditCardModalForm(props) {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productId, setProductId] = useState("");
  const [detail, setDetail] = useState("");
  const [priceUnit, setPriceUnit] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    if (props.invoice) {
      setId(props.invoice.id);
      setUsername(props.invoice.username);
      setQuantity(props.invoice.quantity);
      setProductId(props.invoice.productId);
      setDetail(props.invoice.detail);
      setPriceUnit(props.invoice.priceUnit);
      setTotal(props.invoice.total);
    }
  }, []);

  const handleChangeId = (event) => {
    setId(event.target.value);
  };
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };
  const handleChangeProductId = (event) => {
    setProductId(event.target.value);
  };
  const handleChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const handleChangePriceUnit = (event) => {
    setPriceUnit(event.target.value);
  };
  const handleChangeTotal = (event) => {
    setTotal(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newInvoice = {
      id,
      username,
      quantity,
      productId,
      detail,
      priceUnit,
      total,
    };

    if (props.editable) {
      const invoice = await putInvoice(props.invoice.key, newInvoice);
      console.log(invoice);
      props.loadData();
    } else {
      const invoice = await postInvoice(newInvoice);
      console.log(invoice);
      props.loadData();
    }

    props.handleClose();
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 align="center">{props.editable ? "Editar" : "Añadir"} Factura</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="id"
              label="Id"
              type="number"
              value={id}
              onChange={handleChangeId}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="username"
              label="Nombre usuario"
              type="text"
              value={username}
              onChange={handleChangeUsername}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="quantity"
              label="Cantidad"
              type="number"
              value={quantity}
              onChange={handleChangeQuantity}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="productId"
              label="Id Producto"
              type="number"
              value={productId}
              onChange={handleChangeProductId}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="detail"
              label="Detalles"
              type="text"
              value={detail}
              onChange={handleChangeDetail}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="priceUnit"
              label="Precio Unitario"
              type="number"
              value={priceUnit}
              onChange={handleChangePriceUnit}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="total"
              label="Total"
              type="number"
              value={total}
              onChange={handleChangeTotal}
              sx={{
                marginTop: "15px",
              }}
            />

            <Box
              sx={{
                margin: "20px",
                marginTop: "50px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <Button
                variant="contained"
                color="success"
                type="submit"
                sx={{
                  width: "100px",
                }}
                onClick={() => handleSubmit()}
              >
                Guardar
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={props.handleClose}
                sx={{
                  width: "100px",
                }}
              >
                Salir
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
