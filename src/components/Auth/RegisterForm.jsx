import React, { useState } from "react";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import LocalPhone from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PasswordIcon from "@mui/icons-material/Password";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Prénom:", firstname);
    console.log("Nom:", lastname);
    console.log("Téléphone:", number);
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
          width: { xs: "80%", sm: "40%", md: "20%", lg: "20%" },
          padding: 5,
          boxShadow: 3,
          borderRadius: 5,
        }}
      >
        <CardContent>
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
                alignItems: "center",
                mb: 2,
                width: "100%",
              }}
            >
              <AccountCircle sx={{ mr: 1, mt: 2 }} />
              <TextField
                label="Prénom"
                variant="standard"
                color="success"
                fullWidth
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                width: "100%",
              }}
            >
              <AccountCircle sx={{ mr: 1, mt: 2 }} />
              <TextField
                label="Nom"
                variant="standard"
                color="success"
                fullWidth
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                width: "100%",
              }}
            >
              <LocalPhone sx={{ mr: 1, mt: 2 }} />
              <TextField
                label="Téléphone"
                variant="standard"
                color="success"
                fullWidth
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                width: "100%",
              }}
            >
              <AlternateEmailIcon sx={{ mr: 1, mt: 2 }} />
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
                alignItems: "center",
                mb: 2,
                width: "100%",
              }}
            >
              <PasswordIcon sx={{ mr: 1, mt: 2 }} />
              <TextField
                label="Mot de passe"
                type="password"
                variant="standard"
                color="success"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                width: "100%",
              }}
            >
              <GppGoodIcon sx={{ mr: 1, mt: 2 }} />
              <TextField
                label="Confirmer mot de passe"
                type="password"
                variant="standard"
                color="success"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                my: 2,
                gap: 1.5,
              }}
            >
              <Button variant="contained" size="small" type="submit">
                Soumettre
              </Button>
              <Button variant="contained" size="small">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Retour
                </Link>
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default RegisterForm;
