import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { createTransaction } from "../../Api/api";

function FormTransaction({ onTransaction }) {
  const [iban, setIban] = useState("");
  const [amount, setAmount] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleTransaction = async () => {
    if (iban && amount) {
      console.log("Données envoyées :", { iban, amount });
      try {
        await createTransaction({ iban, amount });
        setAlertMessage("Transaction réussie !");
        setAlertSeverity("success");
        onTransaction({ iban, amount });
      } catch (error) {
        console.error("Erreur lors de la transaction :", error);
        setAlertMessage("Erreur lors de la transaction !");
        setAlertSeverity("error");
      } finally {
        setIban("");
        setAmount("");
        setSnackbarOpen(true);
      }
    } else {
      setAlertMessage("Veuillez remplir tous les champs !");
      setAlertSeverity("warning");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Virements
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "150%",
        }}
      >
        <TextField
          label="IBAN du destinataire"
          variant="outlined"
          value={iban}
          onChange={(e) => setIban(e.target.value)}
        />
        <TextField
          label="Montant"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Box>
          <Button
            variant="contained"
            sx={{ width: "100%", textTransform: "none" }}
            onClick={handleTransaction}
          >
            Confirmer
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default FormTransaction;
