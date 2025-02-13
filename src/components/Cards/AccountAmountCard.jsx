import {Box, Skeleton, Typography} from "@mui/material";
import React from "react";
import {numberToString} from "../../Api/utils";

function AccountAmountCard({account}) {
    if (account === undefined) {
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
                backgroundColor: "#006BD6",
                color: "#fff",
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
            <Typography variant="h6">Solde du compte</Typography>
            <Typography variant="body2" sx={{mb: 7}}>
                {account.currency}
            </Typography>
            <Typography variant="h4" sx={{fontWeight: "bold"}}>
                {numberToString(account.amount)} {account.currency}
            </Typography>
        </Box>
    );
}

export default AccountAmountCard;
