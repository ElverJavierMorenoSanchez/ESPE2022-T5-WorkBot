import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { postCreditCard, putCreditCard } from "../../util/creditCardAxios";

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
  const [ownCard, setOwnCard] = useState("");
  const [numberCard, setNumberCard] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [dateExpiry, setDateExpiry] = useState("");

  useEffect(() => {
    if (props.card) {
      setId(props.card.id);
      setOwnCard(props.card.ownCard);
      setNumberCard(props.card.numberCard);
      setSecurityCode(props.card.securityCode);
      setDateExpiry(props.card.dateExpiry);
    }
  }, []);

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleChangeOwnCard = (event) => {
    setOwnCard(event.target.value);
  };

  const handleChangeNumberCard = (event) => {
    setNumberCard(event.target.value);
  };

  const handleChangeSecurityCode = (event) => {
    setSecurityCode(event.target.value);
  };

  const handleChangeDateExpiry = (event) => {
    setDateExpiry(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCard = {
      id,
      ownCard,
      numberCard,
      securityCode,
      dateExpiry,
    };

    if (props.editable) {
      const card = await putCreditCard(props.card.key, newCard);
      console.log(card);
      props.loadData();
    } else {
      const card = await postCreditCard(newCard);
      console.log(card);
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
          <h2 align="center">{props.editable ? "Editar" : "Añadir"} Tarjeta</h2>
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
              id="own_card"
              label="Dueño Tarjeta"
              type="text"
              value={ownCard}
              onChange={handleChangeOwnCard}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="card_number"
              label="Número de Tarjeta"
              type="number"
              value={numberCard}
              onChange={handleChangeNumberCard}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="expiry_date"
              label="Fecha De Expiración"
              type="text"
              value={dateExpiry}
              onChange={handleChangeDateExpiry}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="security_code"
              label="Código de Seguridad"
              type="number"
              value={securityCode}
              onChange={handleChangeSecurityCode}
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
