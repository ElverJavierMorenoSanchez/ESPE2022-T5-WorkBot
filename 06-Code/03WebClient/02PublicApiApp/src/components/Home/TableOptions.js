import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function TableOptions() {
  const btn = {
    background: "linear-gradient(45deg, #fe6b8b 20%, #ff8e53 80%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "o 3px 5px 2px rbga(255, 105, 135, .3)",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    height: 48,
    "&:hover": {
      opacity: [0.9, 0.9, 0.9],
    },
  };

  return (
    <Box
      sx={{
        width: "15%",
        height: "86vh",
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
      <h1>OPCIONES</h1>
      <Box>
        <Link
          to="/client-info"
          style={{
            height: "100%",
            width: "100%",
            paddingTop: "12px",
            textDecoration: "none",
          }}
        >
          <Button to={`client-info`} sx={btn}>
            Informacion Cliente
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default TableOptions;
