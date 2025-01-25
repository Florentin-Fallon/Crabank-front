import React, {useEffect, useState} from "react";
import {Box, Fab, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import PreviewCard from "../../Assets/PreviewCard.svg";
import {getAccountFirstCard} from "../../Api/api";

function CreditCard({account, setValue}) {
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
        <Box>
            <Box sx={{ mb: 2, display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
                <Typography variant="h4" sx={{fontWeight: "bold"}}>
                    Votre carte
                </Typography>
                <Fab color="primary" aria-label="add" onClick={() => setValue("5")}>
                    <AddIcon />
                </Fab>
            </Box>
            {card === null || card === undefined ? (
                <Box>
                    <Box sx={{display: "flex", justifyContent: "center", gap: 2}}>
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
                    <Box sx={{display: "flex", justifyContent: "center", gap: 2}}>
                        <img src={PreviewCard} alt="Card"/>
                        <Typography variant="h6">{card.name}</Typography>
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default CreditCard;
