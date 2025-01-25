import React, { useEffect, useState } from "react";
import { Box, Typography, Switch, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PreviewCard from "../../Assets/PreviewCard.svg";
import { getAccountFirstCard } from "../../Api/api";

function CreditCard({ account, setValue }) {
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

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", ml: 10 }}>
      <Box>
        <Box
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Gérer ma carte
          </Typography>
          <Typography
            color="primary"
            fontSize="large"
            aria-label="add"
            onClick={() => setValue("5")}
          >
            <AddIcon />
          </Typography>
        </Box>
        {card === null || card === undefined ? (
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
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
            </Box>
          </Box>
        ) : (
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <img src={PreviewCard} alt="Card" />
              <Typography variant="h6">{card.name}</Typography>
            </Box>
            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 5 }}>
                Mes options cartes
              </Typography>
              {[
                "Paiement sans contact",
                "Paiement à distance",
                "Opération à l'étranger",
              ].map((option, index) => (
                <Box
                  key={index}
                  sx={{
                    border: 1,
                    borderColor: "#D4D4D4",
                    borderRadius: 2,
                    p: 2,
                    mb: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">{option}</Typography>
                  <Switch defaultChecked />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <Box sx={{ width: "90%", ml: 30 }}>
        {[
          {
            title: "Plafond de paiement mensuel",
            amount: "5000€",
            spent: "3000€",
            usage: "60%",
          },
          {
            title: "Plafond de retrait",
            amount: "600€",
            spent: "0€",
            usage: "0%",
          },
        ].map((plafond, index) => (
          <Box
            key={index}
            sx={{
              border: 1,
              borderColor: "#D4D4D4",
              borderRadius: 2,
              p: 2,
              mb: 4,
            }}
          >
            <Box sx={{ display: "flex", gap: 4, mb: 1 }}>
              <Typography variant="h6">{plafond.title}</Typography>
              <Typography variant="h6" sx={{ mb: 1, textAlign: "right" }}>
                {plafond.amount}
              </Typography>
            </Box>
            <Box sx={{ width: "100%", mb: 1 }}>
              <Box
                sx={{
                  width: "80%",
                  height: 10,
                  backgroundColor: "#D4D4D4",
                  borderRadius: 5,
                }}
              >
                <Box
                  sx={{
                    width: plafond.usage,
                    height: "100%",
                    backgroundColor: "primary.main",
                    borderRadius: 5,
                  }}
                />
              </Box>
            </Box>
            <Typography variant="body2">Dépensé : {plafond.spent}</Typography>
          </Box>
        ))}
        <Box
          sx={{
            border: 1,
            borderColor: "#D4D4D4",
            borderRadius: 2,
            p: 2,
            mb: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Augmenter mes plafonds</Typography>
            <Switch />
          </Box>
        </Box>
        <Box
          sx={{
            border: 1,
            borderColor: "#D4D4D4",
            borderRadius: 2,
            p: 2,
            mb: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Verrouillage temporaire</Typography>
            <Switch />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CreditCard;
