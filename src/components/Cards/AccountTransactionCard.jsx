import {
  Box,
  Skeleton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { numberToString } from "../../Api/utils";
import { getAccountTransactions } from "../../Api/api";

function AccountTransactionCard({ account }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchAsync() {
      let transactions = await getAccountTransactions(account.bban);
      setTransactions(transactions);
    }

    if (account !== undefined) fetchAsync();
  }, [account]);

  if (transactions === undefined || transactions.length === 0) {
    return (
      <Skeleton
        variant="rectangular"
        sx={{
          mt: 2,
          borderRadius: 2,
        }}
        width={360}
        height={180}
      />
    );
  }

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
        maxHeight: 180,
        overflow: "hidden",
        boxSizing: "border-box",
        "&:hover": {
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
        Dernières Transactions
      </Typography>
      <Box sx={{ maxHeight: 120, overflow: "hidden" }}>
        <Table>
          <TableBody>
            {transactions.slice(0, 4).map((transaction, index) => {
              let color = transaction.type === "outwards" ? "red" : "green";
              let sign = transaction.type === "outwards" ? "-" : "+";

              return (
                <TableRow
                  key={`${transaction.label}-${transaction.amount}-${index}`}
                >
                  <TableCell
                    sx={{
                      textAlign: "left",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      padding: 1,
                    }}
                  >
                    {transaction.label}
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "right", color: color, padding: 0.5 }}
                  >
                    {sign} {numberToString(transaction.amount)}{" "}
                    {transaction.currency}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

export default AccountTransactionCard;
