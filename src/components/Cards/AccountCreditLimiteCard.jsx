import { Box, Typography } from "@mui/material";
import React from "react";

function AccountCreditLimiteCard() {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "#D4D4D4",
        borderRadius: 2,
        p: 2,
        mt: 2,
        width: 360,
        height: 180,
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h6" sx={{ mb: 9, fontWeight: "bold" }}>
        Plafond
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        1 000 000 €
      </Typography>
    </Box>
  );
}

export default AccountCreditLimiteCard;
