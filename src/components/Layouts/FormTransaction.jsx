import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import { createTransaction, getCurrentAccount } from "../../Api/api";

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
      let toSend = {
        currency,
        fromIban: (await getCurrentAccount()).iban,
        toIban: iban,
        amount,
        label,
      };

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ml: 25,
        mt: 5,
        gap: 20,
      }}
    >
      <Box
        sx={{ width: "40%", display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
        >
          Nouveau virement
        </Typography>
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
        <TextField
          label="Montant"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Select
          value={currency}
          variant="outlined"
          label="Currency"
          onChange={(e) => setCurrency(e.target.value)}
        >
          <MenuItem value={"USD"}>United States Dollars (USD)</MenuItem>
          <MenuItem value={"EUR"}>Euros (EUR)</MenuItem>
          <MenuItem value={"ROBUX"}>Robux (ROBUX)</MenuItem>
        </Select>
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
      <Divider
        orientation="vertical"
        variant="middle"
        sx={{ color: "black", height: "500px", width: "2px" }}
      />
      <Box
        sx={{ width: "40%", display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
        >
          Nouveau paiement Paylib
        </Typography>
        <TextField label="Intitulé" variant="outlined" />
        <TextField label="Numéro de téléphone" variant="outlined" />
        <TextField label="Montant" variant="outlined" />
        <Select value={currency} variant="outlined" label="Currency">
          <MenuItem value={"USD"}>United States Dollars (USD)</MenuItem>
          <MenuItem value={"EUR"}>Euros (EUR)</MenuItem>
          <MenuItem value={"ROBUX"}>Robux (ROBUX)</MenuItem>
        </Select>
        <Box>
          <Button
            variant="contained"
            sx={{ width: "100%", textTransform: "none" }}
          >
            Payer avec Paylib
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
