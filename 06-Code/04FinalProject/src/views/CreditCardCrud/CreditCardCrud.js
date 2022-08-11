import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCreditCards, deleteCreditCard } from "../../util/creditCardAxios";
import CreditCardModalForm from "./CreditCardModalForm";
import Button from "@mui/material/Button";

function CreditCardCrud() {
  const [creditCards, setCreditCards] = useState([]);
  const [creditCard, setCreditCard] = useState({});
  const [editable, setEditable] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadCreditCards();
  }, []);

  const loadCreditCards = async () => {
    const _creditCards = await getCreditCards();

    setCreditCards(_creditCards);
  };

  const handleEditable = (edit) => setEditable(edit);
  const handleClose = () => setOpen(false);
  const handleOpen = (params) => {
    setCreditCard(params);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "¿Está seguro que desea eliminar el elemento?"
    );
    if (confirm) {
      const itemDelete = await deleteCreditCard(id);
      loadCreditCards();
      console.log(itemDelete);
    }
  };

  const columns = [
    {
      field: "key",
      headerName: "ID",
      width: 250,
    },
    {
      field: "ownCard",
      headerName: "Dueño Tarjeta",
      width: 200,
    },
    { field: "numberCard", headerName: "Número Tarjeta", width: 200 },
    { field: "dateExpiry", headerName: "Fecha de Expiración", width: 150 },
    { field: "securityCode", headerName: "Código de Seguridad", width: 150 },
    {
      field: "options",
      headerName: "Opciones",
      width: 150,
      renderCell: (params) => (
        <>
          <div
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              handleEditable(true);
              handleOpen(params.row);
            }}
          >
            <IconButton
              aria-label="delete"
              sx={{
                color: "primary.main",
                "&:hover": {
                  color: "#111",
                },
              }}
            >
              <ModeIcon
                sx={{
                  fontSize: "1em",
                }}
              />
            </IconButton>
          </div>

          <div
            onClick={() => {
              handleDelete(params.row.key);
              return;
            }}
          >
            <IconButton
              aria-label="delete"
              sx={{
                color: "primary.main",
                "&:hover": {
                  color: "#111",
                },
              }}
            >
              <DeleteIcon
                sx={{
                  fontSize: "1em",
                }}
              />
            </IconButton>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div id="header"></div>
      {open ? (
        <CreditCardModalForm
          handleClose={handleClose}
          card={creditCard}
          editable={editable}
          loadData={loadCreditCards}
        />
      ) : (
        <></>
      )}
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          background: "#fff",
          marginTop: "50px",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            handleEditable(false);
            handleOpen({});
          }}
          sx={{
            marginBottom: "50px",
          }}
        >
          Añadir Tarjeta
        </Button>

        <Box
          sx={{
            width: "65%",
            height: "600px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "20px",
            paddingRight: "20px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "1px 1px 20px #333",
          }}
        >
          <h1>Tarjetas de Crédito</h1>

          <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
              rows={creditCards.map((item) => ({
                key: item._id,
                id: item.id,
                ownCard: item.ownCard,
                numberCard: item.numberCard,
                dateExpiry: item.dateExpiry,
                securityCode: item.securityCode,
              }))}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
            />
          </div>
        </Box>
      </Box>
    </>
  );
}

export default CreditCardCrud;
