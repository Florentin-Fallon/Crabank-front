import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box>
      <Typography variant="h6" align="center" gutterBottom>
        Crabank
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        Financez vos ambitions, préservez la planète
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary">
        &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
