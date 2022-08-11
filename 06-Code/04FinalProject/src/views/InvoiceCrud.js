import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import { getInvoiceCrud, deleteInvoice } from "../util/invoiceAxios";

function InvoiceCrud() {
  const [InvoiceCrud, setInvoiceCrud] = useState([]);

  useEffect(() => {
    const loadInvoiceCrud = async () => {
      const _invoiceCrud = await getInvoiceCrud();

      setInvoiceCrud(_invoiceCrud);
    };

    loadInvoiceCrud();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    //const itemDelete = await deleteInvoiceCrud(username);
  };

  const columns = [
    {
      field: "key",
      headerName: "ID",
      width: 250,
    },
    {
      field: "username",
      headerName: "Nombre",
      width: 200,
    },
    { field: "quantity", headerName: "Catidad", width: 200 },
    { field: "productId", headerName: "Producto", width: 200 },
    { field: "detail", headerName: "Detalle", width: 150 },
    { field: "priceUnit", headerName: "Precio Unitario", width: 150 },
    { field: "total", headerName: "Total", width: 200 },
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
      <h1>Factura de Compras</h1>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={InvoiceCrud.map((item) => ({
            key: item._id,
            id: item.id,
            username: item.username,
            quantity: item.quantity,
            productId: item.productId,
            detail: item.detail,
            priceUnit: item.priceUnit,
            total: item.total,

          }))}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </Box>
  );
}

export default InvoiceCrud;