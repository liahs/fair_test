import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { CustomHeader, MatchOdds, SideBar } from "../../components";
import EventListing from "../../components/EventListing";
import MatchesComponent from "../../components/Matches";

import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HourGlass } from "../../assets";
import Lottie from "lottie-react";

export default function Matches() {
    const [drawer, setDrawer] = useState(false)
    const theme = useTheme()
    const navigate = useNavigate()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    const [selected, setSelected] = useState("CRICKET")

    return (
        <div style={{ height: "100vh", display: 'flex', flexDirection: 'column' }} >
            <CustomHeader />
            <Box flex={1} sx={[{ flex: 1, display: 'flex', height: '80%', }, (theme) => ({
                backgroundImage: `${theme.palette.primary.homeBodyGradient}`
            })]} >

                <SideBar />

                <Box sx={{ display: 'flex', overflowX: "hidden", flexDirection: 'column', flex: 1, justifyContent: 'flex-start', overflowY: "auto", alignItems: 'flex-start' }}>


                    <EventListing selected={selected} setSelected={setSelected} />
                    <div style={{ height: "1vh" }} />
                    {(selected == "CRICKET" || selected == "INPLAY") && <MatchesComponent onClick={() => navigate('/home')} />}
                    {(selected != "CRICKET" && selected != "INPLAY") &&
                        <Box style={{ display: "flex", justifyContent: "center", width: "100%", flex: 1, alignItems: "center", flexDirection: "column" }}>
                            <Lottie animationData={HourGlass} style={{ display: "flex", alignSelf: "center", width: "200px", height: "200px" }} />
                            <Typography sx={{ color: "text.white" }}>Coming Soon</Typography>
                        </Box>
                    }
                </Box>
            </Box>

        </div>
    );
}