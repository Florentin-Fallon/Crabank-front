import { Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Mastercard from "../../Assets/Mastercard.png";
import Visa from "../../Assets/visa.png";
import { getAccountFirstCard } from "../../Api/api";

function AccountCreditCardCard({ account }) {
  const [card, setCard] = useState();
  const [numbers, setNumbers] = useState(9999);

  useEffect(() => {
    async function fetchAsync() {
      let firstCard = await getAccountFirstCard(account.bban);
      if (firstCard === undefined) {
        setCard(null);
        return;
      }
      let lastNumbers = firstCard.numbers.split(" ")[3];

      setCard(firstCard);
      setNumbers(lastNumbers);
    }

    if (account !== undefined) fetchAsync();
  }, [account]);

  if (card === null) {
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
          Aucune carte associée
        </Typography>
      </Box>
    );
  }

  if (card === undefined) {
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
        backgroundColor: "#161616",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: "left",
          mb: 1,
        }}
      >
        {card.name}
      </Typography>
      <Typography variant="body2">•••• {numbers}</Typography>
      <Box sx={{ flex: 1 }}></Box>
      {card.network === 1 ? (
        <img
          src={Mastercard}
          alt="Mastercard"
          style={{
            height: 40,
            width: 50,
            objectFit: "contain",
          }}
        ></img>
      ) : (
        <img
          src={Visa}
          alt="Visa"
          style={{
            height: 40,
            width: 50,
            objectFit: "contain",
          }}
        ></img>
      )}
    </Box>
  );
}

export default AccountCreditCardCard;
