import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Layouts/Footer";

function Home() {
  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Hello
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" color="primary">
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Login
          </Link>
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
