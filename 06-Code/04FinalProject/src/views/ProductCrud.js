import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import { getProductCruds, deleteCreditCard } from "../util/axios";

function ProductCrud() {
  const [ProductCruds, setProductCruds] = useState([]);

  useEffect(() => {
    const loadProductCruds = async () => {
      const _ProductCruds = await getProductCruds();

      setProductCruds(_ProductCruds);
    };

    loadProductCruds();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    //const itemDelete = await deleteProduct(id);
  };

  const columns = [
    { field: "key", headerName: "ID", width: 250 },
    { field: "name", headerName: "Nombre", width: 200 },
    { field: "category", headerName: "categoria", width: 200 },
    { field: "description", headerName: "Descripcion", width: 150 },
    { field: "price", headerName: "Precio", width: 150 },
    { field: "quantity", headerName: "Cantidad", width: 150 },
    { field: "imgUrl", headerName: "Imagen", width: 150 },
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
            imgUrl: item.imgUrl
          }))}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </Box>
  );
}

export default ProductCrud;
