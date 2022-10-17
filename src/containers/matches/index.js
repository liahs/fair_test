import { Box } from "@mui/system";
import { useState } from "react";
import { CustomHeader, MatchOdds, SideBar } from "../../components";
import EventListing from "../../components/EventListing";
import MatchComponent from "../../components/MathComponent";
import LiveMatchHome from "../../components/LiveMatchHome";
import MyBetHome from "../../components/MyBetHome";
import MatchesComponent from "../../components/Matches";

import { useMediaQuery, useTheme } from "@mui/material";

export default function Matches() {
    const [drawer, setDrawer] = useState(false)
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <div style={{ height: "100vh", display: 'flex', flexDirection: 'column' }} >
            <CustomHeader />
            <Box flex={1} sx={[{ flex: 1, display: 'flex', height: '80%', }, (theme) => ({
                backgroundImage: `${theme.palette.primary.homeBodyGradient}`
            })]} >

                <SideBar />

                <Box sx={{ display: 'flex', overflowX: "hidden", flexDirection: 'column', flex: 1, justifyContent: 'flex-start', overflowY: "auto", alignItems: 'flex-start' }}>


                    <EventListing />
                    <MatchesComponent />

                </Box>
            </Box>

        </div>
    );
}