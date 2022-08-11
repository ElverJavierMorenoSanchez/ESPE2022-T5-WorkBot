
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import { GetProducts, deleteProducts } from "../util/productAxios";
import ProductModalFrom from "./ProductModalFrom";
import Button from "@mui/material/Button";

function ProductCrud() {
  const [ProductCruds, setProductCruds] = useState([]);
  const [product, setProduct] = useState({});
  const [editable, setEditable] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadProductCruds();
  }, []);

  const loadProductCruds = async () => {
    const _ProductCruds = await GetProducts();

    setProductCruds(_ProductCruds);
  };

  const handleEditable = (edit) => setEditable(edit);
  const handleClose = () => setOpen(false);
  const handleOpen = (params) => {
    setProduct(params);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "¿Está seguro que desea eliminar el elemento?"
    );
    if (confirm) {
      const itemDelete = await deleteProducts(id);
      loadProductCruds();
      console.log(itemDelete);
    }
  };

  const columns = [
    { field: "key", headerName: "ID", width: 240 },
    { field: "name", headerName: "Nombre", width: 200 },
    { field: "category", headerName: "categoria", width: 100 },
    { field: "description", headerName: "Descripcion", width: 300 },
    { field: "price", headerName: "Precio", width: 70 },
    { field: "quantity", headerName: "Cantidad", width: 70 },
    { field: "imgUrl", headerName: "Imagen", width: 200 },
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
        <ProductModalFrom
          handleClose={handleClose}
          product={product}
          editable={editable}
          loadData={loadProductCruds}
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
          Añadir Producto
        </Button>
        <Box
          sx={{
            width: "76%",
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
          <h1>Productos</h1>
          <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
              rows={ProductCruds.map((item) => ({
                key: item._id,
                id: item.id,
                name: item.name,
                category: item.category,
                description: item.description,
                price: item.price,
                quantity: item.quantity,
                imgUrl: item.imgUrl,
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

export default ProductCrud;