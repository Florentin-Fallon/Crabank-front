import {Box, colors, Typography} from "@mui/material";
import {numberToString} from "../../Api/utils";

export function Information({account}) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Typography sx={{
                textAlign: "left",
                fontWeight: "bold"
            }} variant="h4"
            >Informations
            </Typography>
            <Box sx={{
                display: "flex",
                marginTop: "25px",
                alignItems: "left",
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "15px",
                    border: 1,
                    borderColor: "#D4D4D4",
                    borderRadius: 2,
                    p: 2,
                }}>
                    <Typography variant={"h6"}>Informations personnelles</Typography>
                    <Typography sx={{marginTop: "20px"}}>Nom complet : {account.ownerName}</Typography>
                    <Typography>Numéro de téléphone : 01 23 45 67 89</Typography>
                    <Typography>Adresse e-mail : {account.ownerEmail}</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: 1,
                    borderColor: "#D4D4D4",
                    borderRadius: 2,
                    p: 2,
                }}>
                    <Typography variant={"h6"}>Informations de compte</Typography>
                    <Typography sx={{marginTop: "20px"}}>Numéro de compte : {account.bban}</Typography>
                    <Typography>IBAN : {account.iban}</Typography>
                    <Typography>Plafond bancaire : {numberToString(account.creditLimit)} {account.currency}</Typography>
                    <Typography>Conseiller : {account.advisor.firstName} {account.advisor.lastName}</Typography>
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                marginTop: "15px",
                alignItems: "left",
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "15px",
                    border: 1,
                    borderColor: "#D4D4D4",
                    borderRadius: 2,
                    p: 2,
                }}>
                    <Typography variant={"h6"}>Informations financières</Typography>
                    <Typography sx={{marginTop: "20px"}}>Solde actuel
                        : {numberToString(account.amount)} {account.currency}</Typography>
                    <Typography>Découvert : <span style={{color: "green"}}>Autorisé</span></Typography>
                    <Typography>Taux d'intérêt : -2%</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: 1,
                    borderColor: "#D4D4D4",
                    borderRadius: 2,
                    p: 2,
                }}>
                    <Typography variant={"h6"}>Type de compte</Typography>
                    <Typography sx={{marginTop: "20px"}}>Nature du compte : Compte Coutant </Typography>
                    <Typography>Devise : {account.currency}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Information;