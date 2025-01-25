import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";

function AccountCreditLimitCard({ account }) {
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
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Plafond
      </Typography>
      <Typography variant="body2" sx={{ mb: 7 }}>
        {account.currency}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        50 000 {account.currency}
      </Typography>
    </Box>
  );
}

export default AccountCreditLimitCard;
