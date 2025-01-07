import { Box, Typography } from "@mui/material";
import React from "react";

function AccountAdvisorCard() {
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
      <Typography variant="h6" sx={{ mb: 6, fontWeight: "bold" }}>
        Conseillère
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Brigitte Macron
      </Typography>
      <Typography variant="body2" color="text.secondary">
        01 23 45 67 89
      </Typography>
      <Typography variant="body2" color="text.secondary">
        brigitte-vacances78@elysee.fr
      </Typography>
    </Box>
  );
}

export default AccountAdvisorCard;
