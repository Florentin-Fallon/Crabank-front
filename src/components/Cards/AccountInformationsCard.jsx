import { Box, Typography } from "@mui/material";
import React from "react";

function AccountInformationsCard() {
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
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Informations
      </Typography>
      <Typography variant="body2">Nom</Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Compte de la République
      </Typography>
      <Typography variant="body2">Titulaire du compte</Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Emmanuel Macron
      </Typography>
    </Box>
  );
}

export default AccountInformationsCard;
