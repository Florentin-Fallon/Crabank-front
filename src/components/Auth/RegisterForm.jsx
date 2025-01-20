import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Logo from "../../Assets/Logo.svg";
function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      <Box
        sx={{
          width: { xs: "80%", sm: "40%", md: "20%", lg: "20%" },
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={Logo} style={{ height: 70 }} />
        </Box>
        <Typography
          variant="h5"
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#006BD6",
          }}
        >
          Inscription
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
              alignItems: "center",
              mb: 2,
              width: "120%",
            }}
          >
            <TextField
              label="Email"
              variant="outlined"
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
              width: "120%",
            }}
          >
            <TextField
              label="Mot de passe"
              type="password"
              variant="outlined"
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
              width: "120%",
            }}
          >
            <TextField
              label="Confirmer mot de passe"
              type="password"
              variant="outlined"
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
              flexDirection: "column",
              my: 0.5,
              gap: 3,
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "006BD6",
                py: 0.5,
                textTransform: "none",
                width: "100%",
                fontSize: 12,
                "&:hover": {
                  backgroundColor: "#006BD6",
                },
              }}
              type="submit"
              fullWidth
            >
              Créer le compte
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#B3D1FF",
                fontSize: 12,
                textTransform: "none",
                width: "100%",
              }}
              fullWidth
            >
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#0050A0" }}
              >
                J'ai déjà un compte
              </Link>
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default RegisterForm;
