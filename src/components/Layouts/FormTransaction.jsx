import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

function FormTransaction() {
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
        <TextField label="IBAN du destinataire" variant="outlined" />
        <TextField label="Montant" variant="outlined" />
        <Box>
          <Button
            variant="contained"
            sx={{ width: "100%", textTransform: "none" }}
          >
            Confirmer
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FormTransaction;
