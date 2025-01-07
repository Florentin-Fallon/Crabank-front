import { Box, Typography } from "@mui/material";
import React from "react";
import CustomTabs from "./components/Layouts/CustomTabs";
import Logo from "./Assets/Logo.svg";

function Home() {
  return (
    <Box>
      <img src={Logo} style={{height: 50}}/>
      <CustomTabs />
    </Box>
  );
}

export default Home;
