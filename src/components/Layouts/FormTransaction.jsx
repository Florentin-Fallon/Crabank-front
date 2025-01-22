import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

function FormTransaction({ onTransaction }) {
  const [iban, setIban] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransaction = () => {
    if (iban && amount) {
      onTransaction({ iban, amount });
      setIban("");
      setAmount("");
    }
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
    </Box>
  );
}

export default FormTransaction;
