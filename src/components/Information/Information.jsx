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
                    paddingLeft: 2.5,
                    paddingTop: 1.7,
                    paddingRight: 10,
                }}>
                    <Typography variant={"h6"} sx={{fontWeight: "bold"}}>Informations personnelles</Typography>
                    <Typography sx={{marginTop: "10px"}}>Nom complet : {account.ownerName}</Typography>
                    <Typography sx={{my:0.8}}>Numéro de téléphone : 01 23 45 67 89</Typography>
                    <Typography>Adresse e-mail : {account.ownerEmail}</Typography>
                    <Typography sx={{mt:0.8}}>Nationalité : Américaine</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "10px",
                    border: 1,
                    borderColor: "#D4D4D4",
                    borderRadius: 2,
                    paddingLeft: 2.5,
                    paddingTop: 1.7,
                    paddingBottom: 1.7,
                    paddingRight: 10,
                }}>
                    <Typography variant={"h6"} sx={{fontWeight: "bold"}}>Informations de compte</Typography>
                    <Typography sx={{marginTop: "10px"}}>Numéro de compte : {account.bban}</Typography>
                    <Typography sx={{my:0.8}}>IBAN : {account.iban}</Typography>
                    <Typography sx={{mb:0.8}}>Plafond bancaire : {numberToString(account.creditLimit)} {account.currency}</Typography>
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
                    paddingLeft: 2.5,
                    paddingTop: 1.7,
                    paddingBottom: 1.7,
                    paddingRight: 15.7,
                }}>
                    <Typography variant={"h6"} sx={{fontWeight: "bold"}}>Informations financières</Typography>
                    <Typography sx={{marginTop: "10px"}}>Solde actuel
                        : {numberToString(account.amount)} {account.currency}</Typography>
                    <Typography sx={{my:0.8}}>Découvert : <span style={{color: "green"}}>Autorisé</span></Typography>
                    <Typography>Taux d'intérêt : -2%</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: 1,
                    borderColor: "#D4D4D4",
                    borderRadius: 2,
                    paddingLeft: 2.5,
                    paddingTop: 1.7,
                    paddingBottom: 1.7,
                    paddingRight: 18,
                }}>
                    <Typography variant={"h6"} sx={{fontWeight: "bold"}}>Type de compte</Typography>
                    <Typography sx={{marginTop: "10px"}}>Nature du compte : Compte Coutant </Typography>
                    <Typography sx={{mt:0.8}}>Devise : {account.currency}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Information;
