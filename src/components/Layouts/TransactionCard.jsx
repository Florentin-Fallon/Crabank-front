import React from "react";
import { Box, Typography, Divider } from "@mui/material";

function TransactionCard({ transaction }) {
  const color = transaction.type === "outwards" ? "red" : "green";
  const sign = transaction.type === "outwards" ? "-" : "+";

  const transactionDate = new Date(transaction.date).toLocaleDateString(
    "fr-FR",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );

  return (
    <Box sx={{ my: 0 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
          p: 2,
        }}
      >
        <Typography>{transactionDate}</Typography>
        <Typography
          sx={{
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "180px",
            textOverflow: "ellipsis",
          }}
        >
          {transaction.label}
        </Typography>
        <Typography sx={{ color }}>
          {sign} {transaction.amount} {transaction.currency}
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
}

export default TransactionCard;
