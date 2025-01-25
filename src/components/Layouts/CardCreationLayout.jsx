import React, { useState } from "react";
import {
  Alert,
  Box,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import PreviewCard from "../../Assets/PreviewCard.svg";
import { createAccountCard } from "../../Api/api";
import Button from "@mui/material/Button";

function CardCreationLayout({ account, setValue }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [cardName, setCardName] = useState("");
  const [cardNetwork, setCardNetwork] = useState("mastercard");
  const [cardType, setCardType] = useState("debit");
  const [cardStyle, setCardStyle] = useState("black");

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleCardCreation = async () => {
    if (!cardName) {
      return;
    }

    let toSend = {
      name: cardName,
      network: cardNetwork,
      type: cardType,
      style: cardStyle,
    };
    try {
      await createAccountCard(account.bban, toSend);
    } catch (error) {
      console.error("Erreur lors de la création :", error);

      setAlertMessage("Erreur lors de la création de la carte !");
      setAlertSeverity("error");
    } finally {
      setValue(0);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Créer une carte
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <img src={PreviewCard} alt="Card" />
          <TextField
            label="Nom de la carte"
            variant="outlined"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
          <Select
            value={cardNetwork}
            variant="outlined"
            label="Network"
            onChange={(e) => setCardNetwork(e.target.value)}
          >
            <MenuItem value={"mastercard"}>Mastercard</MenuItem>
            <MenuItem value={"visa"}>Visa</MenuItem>
          </Select>
          <Select
            value={cardType}
            variant="outlined"
            label="Type"
            onChange={(e) => setCardType(e.target.value)}
          >
            <MenuItem value={"debit"}>
              Carte de débit (retrait instantané)
            </MenuItem>
            <MenuItem value={"credit"}>
              Carte de crédit (retrait différé)
            </MenuItem>
          </Select>
          <Select
            value={cardStyle}
            variant="outlined"
            label="Style"
            onChange={(e) => setCardStyle(e.target.value)}
          >
            <MenuItem value={"black"}>
              Edition spéciale Club du Crousti-Crabe
            </MenuItem>
          </Select>
          <Button variant="contained" onClick={handleCardCreation}>
            Créer la carte
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default CardCreationLayout;
