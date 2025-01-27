import {Box, colors, Typography} from "@mui/material";

export function Information({account}) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Typography sx={{
                textAlign: "left",
            }} variant="h3">Informations</Typography>
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
                    <Typography sx={{marginTop: "20px"}}>Nom complet :</Typography>
                    <Typography>Numéro de téléphone : 01 23 45 67 89</Typography>
                    <Typography>Adresse e-mail : </Typography>
                    <Typography>Date de naissance :</Typography>
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
                    <Typography sx={{marginTop: "20px"}}>Numéro de compte :</Typography>
                    <Typography>Numéro de carte :</Typography>
                    <Typography>Plafond bancaire : {account.creditLimit}</Typography>
                    <Typography>Conseiller :</Typography>
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
                    <Typography sx={{marginTop: "20px"}}>Solde actuel : {account.amount} {account.currency}</Typography>
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