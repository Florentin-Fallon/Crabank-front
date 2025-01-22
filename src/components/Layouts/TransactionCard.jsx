import React from "react";
import { Box, Typography, Divider } from "@mui/material";

function TransactionCard({ transaction }) {
  const color = transaction.type === "outwards" ? "red" : "green";
  const sign = transaction.type === "outwards" ? "-" : "+";

  return (
    <Box sx={{ my: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
          p: 2,
        }}
      >
        <Typography sx={{ color }}>
          {sign} {transaction.amount} {transaction.currency}
        </Typography>
        <Typography>{transaction.label}</Typography>
      </Box>
      <Divider />
    </Box>
  );
}

export default TransactionCard;
