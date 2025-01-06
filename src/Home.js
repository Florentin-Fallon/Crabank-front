import { Box, Typography } from "@mui/material";
import React from "react";
import CustomTabs from "./components/Layouts/CustomTabs";

function Home() {
  return (
    <Box>
      <Typography variant="h5" sx={{ ml: 2, mt: 2 }}>
        Crabank
      </Typography>
      <CustomTabs />
    </Box>
  );
}

export default Home;
