import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import { getInvoices, deleteInvoice } from "../../util/invoiceAxios";
import InvoiceModalForm from "./InvoiceModalForm";
import Button from "@mui/material/Button";

function InvoiceCrud() {
  const [InvoiceCrud, setInvoiceCrud] = useState([]);
  const [invoice, setInvoice] = useState({});
  const [editable, setEditable] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadInvoiceCrud();
  }, []);

  const loadInvoiceCrud = async () => {
    const _invoiceCrud = await getInvoices();
    setInvoiceCrud(_invoiceCrud);
  };

  const handleEditable = (edit) => setEditable(edit);
  const handleClose = () => setOpen(false);
  const handleOpen = (params) => {
    setInvoice(params);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "¿Está seguro que desea eliminar el elemento?"
    );
    if (confirm) {
      const itemDelete = await deleteInvoice(id);
      loadInvoiceCrud();
      console.log(itemDelete);
    }
  };

  const columns = [
    {
      field: "key",
      headerName: "ID",
      width: 230,
    },
    {
      field: "username",
      headerName: "Nombre",
      width: 100,
    },
    { field: "quantity", headerName: "Catidad", width: 100 },
    { field: "productId", headerName: "Producto", width: 100 },
    { field: "detail", headerName: "Detalle", width: 300 },
    { field: "priceUnit", headerName: "Precio Unitario", width: 150 },
    { field: "total", headerName: "Total", width: 200 },
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
        <InvoiceModalForm
          handleClose={handleClose}
          invoice={invoice}
          editable={editable}
          loadData={loadInvoiceCrud}
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
          Añadir Factura
        </Button>
        <Box
          sx={{
            width: "75%",
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
          <h1>Facturas</h1>
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
      </Box>
    </>
  );
}

export default InvoiceCrud;
