import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import HomeIcon from "../../Assets/Home.svg";
import Card from "../../Assets/Card.svg";
import ArrowUp from "../../Assets/Arrow-up.svg";
import ArrowRotate from "../../Assets/Arrow-Rotate.svg";
import User from "../../Assets/User.svg";
import Power from "../../Assets/Power.svg";
import {Link} from "react-router-dom";
import AccountAmountCard from "../Cards/AccountAmountCard";
import AccountInformationsCard from "../Cards/AccountInformationsCard";
import AccountCreditLimitCard from "../Cards/AccountCreditLimitCard";
import AccountAdvisorCard from "../Cards/AccountAdvisorCard";
import AccountTransactionCard from "../Cards/AccountTransactionCard";
import {getCurrentAccount, getAccountCards} from "../../Api/api";
import AccountCreditCardCard from "../Cards/AccountCreditCardCard";
import Information from "../Information/Information";
import FormTransaction from "./FormTransaction";
import HistoryTransactions from "./HistoryTransactions";
import CreditCard from "./CreditCard";
import CardCreationLayout from "./CardCreationLayout";

function CustomTabs() {
    const [value, setValue] = React.useState("0");
    const [account, setAccount] = useState();
    const [cards, setCards] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        async function fetchAccountAsync() {
            let account = await getCurrentAccount();
            setAccount(account);

            if (account) {
                const userCards = await getAccountCards(account.bban);
                setCards(userCards);
            }
        }

        fetchAccountAsync();
    }, []);

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                height: 450,
                mt: 1,
            }}
        >
            <TabContext value={value}>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{
                        "& .MuiTab-root": {
                            marginBottom: 1,
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                        },
                        "& .MuiTabs-indicator": {
                            backgroundColor: "#fff",
                        },
                    }}
                >
                    <Tab
                        disableRipple
                        icon={
                            <img
                                src={HomeIcon}
                                alt="Home"
                                style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    backgroundColor: value === "0" ? "#e1eefc" : "transparent",
                                    padding: 15,
                                }}
                            />
                        }
                        value="0"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                    <Tab
                        disableRipple
                        icon={
                            <img
                                src={ArrowUp}
                                alt="ArrowUp"
                                style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    backgroundColor: value === "1" ? "#e1eefc" : "transparent",
                                    padding: 15,
                                }}
                            />
                        }
                        value="1"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                    <Tab
                        disableRipple
                        icon={
                            <img
                                src={ArrowRotate}
                                alt="ArrowRotate"
                                style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    backgroundColor: value === "2" ? "#e1eefc" : "transparent",
                                    padding: 15,
                                }}
                            />
                        }
                        value="2"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                    <Tab
                        disableRipple
                        icon={
                            <img
                                src={Card}
                                alt="Card"
                                style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    backgroundColor: value === "3" ? "#e1eefc" : "transparent",
                                    padding: 15,
                                }}
                            />
                        }
                        value="3"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            "&:hover": {
                                backgroundColor: "#fff",
                            },
                        }}
                    />
                    <Tab
                        disableRipple
                        icon={
                            <img
                                src={User}
                                alt="User"
                                style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    backgroundColor: value === "4" ? "#e1eefc" : "transparent",
                                    padding: 15,
                                }}
                            />
                        }
                        value="4"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            "&:hover": {
                                backgroundColor: "#fff",
                            },
                        }}
                    />
                </Tabs>
                <TabPanel
                    value="0"
                    sx={{
                        margin: 0,
                        padding: 0,
                        ml: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 2,
                            justifyContent: "center",
                        }}
                    >
                        <AccountAmountCard account={account}/>
                        <Link
                            style={{textDecoration: "none", color: "inherit"}}
                            to="#"
                            onClick={() => setValue("4")}
                        >
                            <AccountInformationsCard account={account}/>
                        </Link>
                        <AccountCreditLimitCard account={account}/>
                        <Link
                            style={{textDecoration: "none", color: "inherit"}}
                            to="#"
                            onClick={() => setValue("2")}
                        >
                            <AccountTransactionCard account={account}/>
                        </Link>
                        <AccountAdvisorCard account={account} cards={cards}/>
                        <Link
                            style={{textDecoration: "none", color: "inherit"}}
                            to="#"
                            onClick={() => setValue("3")}
                        >
                            <AccountCreditCardCard account={account}/>
                        </Link>
                    </Box>
                </TabPanel>
                <TabPanel value="1">
                    <FormTransaction/>
                </TabPanel>
                <TabPanel value="2">
                    <HistoryTransactions account={account}/>
                </TabPanel>
                <TabPanel value="3">
                    <CreditCard account={account} setValue={setValue}/>
                </TabPanel>
                <TabPanel
                    sx={{
                        width: "100%",
                    }}
                    value="4"
                >
                    <Information account={account}/>
                </TabPanel>
                <TabPanel value="5">
                    <CardCreationLayout account={account} setValue={setValue}/>
                </TabPanel>
            </TabContext>
            <Box
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: 8,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Link to="/login">
                    <Tab
                        icon={
                            <img src={Power} alt="Power" style={{width: 24, height: 24}}/>
                        }
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 1,
                        }}
                    />
                </Link>
            </Box>
        </Box>
    );
}

export default CustomTabs;
