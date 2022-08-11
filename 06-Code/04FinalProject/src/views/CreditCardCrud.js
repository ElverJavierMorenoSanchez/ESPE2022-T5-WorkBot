import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCreditCards, deleteCreditCard } from "../util/axios";

function CreditCardCrud() {
  const [creditCards, setCreditCards] = useState([]);

  useEffect(() => {
    const loadCreditCards = async () => {
      const _creditCards = await getCreditCards();

      setCreditCards(_creditCards);
    };

    loadCreditCards();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    //const itemDelete = await deleteCreditCard(id);
  };

  const columns = [
    {
      field: "key",
      headerName: "ID",
      width: 250,
    },
    {
      field: "own_card",
      headerName: "Dueño Tarjeta",
      width: 200,
    },
    { field: "number_card", headerName: "Número Tarjeta", width: 200 },
    { field: "date_expiry", headerName: "Fecha de Expiración", width: 150 },
    { field: "security_code", headerName: "Código de Seguridad", width: 150 },
    {
      field: "options",
      headerName: "Opciones",
      width: 150,
      renderCell: (params) => (
        <>
          <a
            target="_blank"
            rel="noreferrer"
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
              <ModeIcon
                sx={{
                  fontSize: "1em",
                }}
              />
            </IconButton>
          </a>

          <a
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
          </a>
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: "75%",
        height: "700px",
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
            own_card: item.ownCard,
            number_card: item.numberCard,
            date_expiry: item.dateExpiry,
            security_code: item.securityCode,
          }))}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </Box>
  );
}

export default CreditCardCrud;
