import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardInfo({ title, img, info }) {
  return (
    <Card sx={{ display: "flex", margin: "20px", height: "300px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "340px",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={img}
          alt="Live from space album cover"
        />
        <hr />
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Typography component="div" variant="h6">
            {info}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
