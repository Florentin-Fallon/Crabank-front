import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert, Select, MenuItem,
} from "@mui/material";
import {createTransaction, getCurrentAccount} from "../../Api/api";

function FormTransaction({ onTransaction }) {
  const [iban, setIban] = useState("");
  const [amount, setAmount] = useState("");
  const [label, setLabel] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleTransaction = async () => {
    if (iban && amount && label) {
      let toSend = { currency, 'fromIban': (await getCurrentAccount()).iban, 'toIban': iban, amount, label }

      console.log("Données envoyées :", toSend);
      try {
        await createTransaction(toSend);
        setAlertMessage("Transaction réussie !");
        setAlertSeverity("success");
        setSnackbarOpen(true);
        if (onTransaction) onTransaction({ iban, amount });
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
        Nouveau virement
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
            label="Intitulé"
            variant="outlined"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
        />
        <TextField
          label="IBAN du destinataire"
          variant="outlined"
          value={iban}
          onChange={(e) => setIban(e.target.value)}
        />
        <Select
            value={currency}
            variant="outlined"
            label="Currency"
            onChange={(e) => setCurrency(e.target.value)}
        >
          <MenuItem value={'USD'}>United States Dollars (USD)</MenuItem>
          <MenuItem value={'EUR'}>Euros (EUR)</MenuItem>
          <MenuItem value={'ROBUX'}>Robux (ROBUX)</MenuItem>
        </Select>
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
