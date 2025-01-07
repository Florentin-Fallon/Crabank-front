import {Box, Divider, Skeleton, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {numberToString} from "../../Api/utils";
import {getAccountFirstCard, getAccountTransactions} from "../../Api/api";

function AccountTransactionCard({account}) {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        async function fetchAsync() {
            let transactions = await getAccountTransactions(account.bban)
            setTransactions(transactions)
        }

        if (account !== undefined) fetchAsync()
    }, [account]);

    if (transactions === undefined || transactions.length === 0) {
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
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Dernières Transactions
            </Typography>
            <Box>
                {
                    transactions.filter((value, index, array) => index < 3).map((transaction, index) => {
                        let color = transaction.type === "outwards" ? "red" : "green"
                        let sign = transaction.type === "outwards" ? "-" : "+"

                        return <>
                            <Box sx={{display: "flex", gap: 2, my: 1}}>
                                <Typography sx={{color: color}}>{sign} {numberToString(transaction.amount)} {transaction.currency}</Typography>
                                <Typography sx={{textAlign: "center"}}>{transaction.label}</Typography>
                                <Typography>
                                    <CheckOutlinedIcon fontSize="small" sx={{color: "green"}}/>
                                </Typography>
                            </Box>
                            {index < 2 ? <Divider/> : <></>}
                        </>
                    })
                }
            </Box>
        </Box>
    );
}

export default AccountTransactionCard;
