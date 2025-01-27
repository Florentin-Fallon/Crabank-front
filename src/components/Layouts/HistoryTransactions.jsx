import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getAccountTransactions } from "../../Api/api";
import { numberToString } from "../../Api/utils";

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

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
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
      >
        Historique des transactions
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "semibold",
          mb: 2,
          textAlign: "center",
          color: "green",
          mt: 2,
        }}
      >
        {numberToString(account.amount)} {account.currency}
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 1, width: 700 }}
      >
        {transactions.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>Date</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Nom</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Montant</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction) => {
                  const sign = transaction.type === "outwards" ? "-" : "+";
                  const color =
                    transaction.type === "outwards" ? "red" : "green";
                  return (
                    <TableRow key={transaction.id}>
                      <TableCell sx={{ textAlign: "center" }}>
                        {formatDate(transaction.date)}
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {transaction.label}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Typography sx={{ color: color }}>
                          {sign} {numberToString(transaction.amount)} {transaction.currency}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography>Aucune transaction trouvée.</Typography>
        )}
      </Box>
    </Box>
  );
}

export default HistoryTransactions;
