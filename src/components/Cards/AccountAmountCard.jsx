import { Box, Typography } from "@mui/material";
import React from "react";

function AccountAmountCard() {
  return (
    <Box
      sx={{
        backgroundColor: "#006BD6",
        color: "#fff",
        border: 1,
        borderColor: "#D4D4D4",
        borderRadius: 2,
        p: 2,
        mt: 2,
        width: 360,
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h6">Solde du compte</Typography>
      <Typography variant="body2" sx={{ mb: 7 }}>
        EUR
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        1 000,00 €
      </Typography>
    </Box>
  );
}

export default AccountAmountCard;
