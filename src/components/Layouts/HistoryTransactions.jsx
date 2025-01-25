import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getAccountTransactions } from "../../Api/api";
import TransactionCard from "./TransactionCard";

function HistoryTransactions({ account }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchAsync() {
      try {
        const fetchedTransactions = await getAccountTransactions(account.bban);
        setTransactions(fetchedTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    }

    if (account !== undefined) fetchAsync();
  }, [account]);

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Historique des transactions
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <Typography>Aucune transaction trouvée.</Typography>
        )}
      </Box>
    </Box>
  );
}

export default HistoryTransactions;
