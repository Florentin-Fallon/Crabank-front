import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("password:", password);
    console.log("Formulaire envoyé");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          maxWidth: { xs: 250, sm: 300 },
          minWidth: { xs: 250, sm: 300 },
          padding: 5,
          boxShadow: 3,
          borderRadius: 5,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: "regular", fontFamily: "Roboto" }}
            gutterBottom
          >
            Connexion
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                mb: 2,
                py: 1.5,
                width: "100%",
              }}
            >
              <AlternateEmailIcon sx={{ mr: 1, my: 0.5 }} />
              <TextField
                label="Email"
                variant="standard"
                color="success"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                mb: 2,
                width: "100%",
              }}
            >
              <PasswordIcon sx={{ mr: 1, my: 0.5 }} />
              <TextField
                label="Mot de passe"
                variant="standard"
                type="password"
                color="success"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Box>
            <Box sx={{ my: 2, width: "70%" }}>
              <Button
                size="small"
                sx={{
                  mb: 2,
                  bgcolor: "#728996",
                  "&:hover": { bgcolor: "#607080" },
                  width: "100%",
                }}
                variant="contained"
                type="submit"
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Se connecter
                </Link>
              </Button>
              <Button
                size="small"
                sx={{
                  bgcolor: "#4caf50",
                  "&:hover": { bgcolor: "#388e3c" },
                  width: "100%",
                }}
                variant="contained"
                href="/register"
              >
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  S'inscrire
                </Link>
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginForm;
