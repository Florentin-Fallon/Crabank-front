import React from "react";
import { Box, Typography } from "@mui/material";
import AccountTransactionCard from "../Cards/AccountTransactionCard";
import { getAccountTransactions } from "../../Api/api";
function HistoryTransactions() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Historique des transactions
      </Typography>
      <Box>
        <AccountTransactionCard />
      </Box>
    </Box>
  );
}

export default HistoryTransactions;
