import React from "react";
import { Box, Typography } from "@mui/material";
import AccountCreditCardCard from "../Cards/AccountCreditCardCard";

function CreditCard() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Cartes
      </Typography>
      <Box>
        <AccountCreditCardCard />
      </Box>
    </Box>
  );
}

export default CreditCard;
