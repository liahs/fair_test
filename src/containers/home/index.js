import { Box } from "@mui/system";
import { useState } from "react";
import { CustomHeader, MatchOdds, SideBar } from "../../components";
import EventListing from "../../components/EventListing";
import MatchComponent from "../../components/MathComponent";
import LiveMatchHome from "../../components/LiveMatchHome";
import MyBetHome from "../../components/MyBetHome";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Home() {
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
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'flex-start', overflow: 'auto', alignItems: 'flex-start' }}>

          <EventListing />
          {matchesMobile && <>
            <Box sx={{ display: 'block', width: '80%', alignSelf: 'center' }}>
              <LiveMatchHome />
              <br />
              <MyBetHome />
            </Box>
            <MatchComponent />

            <MatchOdds /></>}
          {!matchesMobile && <Box sx={{ display: 'flex' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>

              <MatchComponent />
              <MatchOdds />
            </Box>
            <Box sx={{ flex: .3, paddingRight: '20px' }}>
              <LiveMatchHome />
              <br />
              <MyBetHome />

            </Box>
          </Box>
          }

        </Box>
      </Box>

    </div>
  );
}