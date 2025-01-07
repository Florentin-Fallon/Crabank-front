import {Box, Skeleton, Typography} from "@mui/material";
import React from "react";

function AccountAdvisorCard({account}) {
    if (account === undefined) {
        return (
            <Skeleton variant="rectangular" sx={{
                mt: 2,
                borderRadius: 2,
            }} width={360} height={180}/>
        )
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
      <Typography variant="h6" sx={{ mb: 6, fontWeight: "bold" }}>
        Conseiller
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {account.advisor.firstName} {account.advisor.lastName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
          {account.advisor.phoneNumber}
      </Typography>
      <Typography variant="body2" color="text.secondary">
          {account.advisor.email}
      </Typography>
    </Box>
  );
}

export default AccountAdvisorCard;
