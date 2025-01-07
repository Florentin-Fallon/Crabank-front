import {Box, Divider, Skeleton, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {numberToString} from "../../Api/utils";
import Mastercard from "../../Assets/Mastercard.png";
import Visa from "../../Assets/visa.png";
import {getAccountFirstCard} from "../../Api/api";

function AccountCreditCardCard({account}) {
    const [card, setCard] = useState()
    const [numbers, setNumbers] = useState(9999)

    useEffect(() => {
        async function fetchAsync() {
            let card = await getAccountFirstCard(account.bban)
            let lastNumbers = card.numbers.split(' ')[3]

            setCard(card)
            setNumbers(lastNumbers)
        }

        if (account !== undefined) fetchAsync()
    }, [account]);

    if (card === undefined) {
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
                backgroundColor: "#161616",
                color: "white",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Typography variant="h6" sx={{
                textAlign: "left",
                mb: 1,
            }}>
                {card.name}
            </Typography>
            <Typography variant="body2">
                •••• {numbers}
            </Typography>
            <Box sx={{flex: 1}}>

            </Box>
            {
                card.network === 1 ? <img src={Mastercard} style={{
                    height: 40,
                    width: 50,
                    objectFit: "contain"
                }}></img> : <img src={Visa} style={{
                    height: 40,
                    width: 50,
                    objectFit: "contain"
                }}></img>
            }
        </Box>
    );
}

export default AccountCreditCardCard;
