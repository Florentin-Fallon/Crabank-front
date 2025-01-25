import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";

function AccountInformationsCard({ account }) {
  if (account === undefined) {
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
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Informations
      </Typography>
      <Typography>Titulaire du compte</Typography>
      <Typography sx={{ fontWeight: "bold", mb: 1.5 }}>
        {account.ownerName}
      </Typography>
      <Typography>Numéro de compte</Typography>
      <Typography sx={{ fontWeight: "bold" }}>•••• 4020</Typography>
    </Box>
  );
}

export default AccountInformationsCard;
