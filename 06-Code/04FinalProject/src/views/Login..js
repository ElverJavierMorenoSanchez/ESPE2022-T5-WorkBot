import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import bg from "../img/bg/bg2.jpg";
import { getToken } from "../util/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.setItem("token", "");
    //const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const token = await getToken(email, password);

    if (!token.token) {
      alert(token.message);
    } else {
      localStorage.setItem("token", token.token);

      if (email === "admin@gmail.com") {
        navigate("/admin/products");
      } else {
        navigate("/home");
      }
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: bg,
      }}
    >
      <Grid
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "550px",
          margin: "0px 20px",
          backgroundColor: "#ffe2f7",
          boxShadow: "1px 1px 20px #ff99e6",
          borderRadius: "15px",
        }}
      >
        <Container
          elevation={4}
          maxWidth="xs"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "50px",
            }}
          >
            <Avatar
              sx={{
                background: "#6f0c83",
              }}
            >
              <LockIcon />
            </Avatar>
            <Typography variant="h6">Sign In</Typography>
          </Box>
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="outlined"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <TextField
              fullWidth
              autoFocus
              type="password"
              color="primary"
              margin="normal"
              variant="outlined"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
            <Box
              sx={{
                margin: "20px",
                textDecoration: "none",
              }}
            >
              <Typography variant="h7">
                ¿No tienes cuenta? <Link to="/signUp">Ingresa aquí</Link>
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </Container>
      </Grid>
    </Box>
  );
};

export default Login;
