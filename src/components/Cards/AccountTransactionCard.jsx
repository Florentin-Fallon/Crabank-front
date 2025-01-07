import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function AccountTransactionCard() {
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
      <Typography sx={{ textAlign: "center", mb: 1 }}>
        Dernières Transactions
      </Typography>
      <Box>
        <Box sx={{ display: "flex", gap: 2, my: 1 }}>
          <Typography sx={{ color: "red" }}>- 5000€</Typography>
          <Typography sx={{ textAlign: "center" }}>Actions SNCF</Typography>
          <Typography>
            <CheckOutlinedIcon fontSize="small" sx={{ color: "green" }} />
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", gap: 2, my: 1 }}>
          <Typography sx={{ color: "red" }}>- 6 000 000€</Typography>
          <Typography sx={{ textAlign: "center" }}>Sécurité Sociale</Typography>
          <Typography>
            <CloseOutlinedIcon fontSize="small" sx={{ color: "red" }} />
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", gap: 2, my: 1 }}>
          <Typography sx={{ color: "green" }}>+9 000 000€</Typography>
          <Typography sx={{ textAlign: "center" }}>
            Impôts des Français
          </Typography>
          <Typography>
            <CheckOutlinedIcon fontSize="small" sx={{ color: "green" }} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AccountTransactionCard;
