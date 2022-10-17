import { Box } from "@mui/system";
import { useState } from "react";
import { CustomHeader, MatchOdds, SideBar } from "../../components";
import EventListing from "../../components/EventListing";
import MatchComponent from "../../components/MathComponent";
import LiveMatchHome from "../../components/LiveMatchHome";
import MyBetHome from "../../components/MyBetHome";
import { useMediaQuery, useTheme } from "@mui/material";
import PlaceBet from "../../components/PlaceBet";

export default function Home() {
  const [drawer, setDrawer] = useState(false)
  const theme = useTheme()
  const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
  const [open, handleClose] = useState(false)
  return (
    <div style={{ height: "100vh", display: 'flex', flexDirection: 'column' }} >
      <CustomHeader />
      <Box flex={1} sx={[{ flex: 1, display: 'flex', height: '80%', }, (theme) => ({
        backgroundImage: `${theme.palette.primary.homeBodyGradient}`
      })]} >

        <SideBar />
        <PlaceBet open={open} handleClose={() => {
          handleClose(!open)
        }} />
        <Box sx={{ display: 'flex', overflowX: "hidden", flexDirection: 'column', flex: 1, justifyContent: 'flex-start', overflowY: "auto", alignItems: 'flex-start' }}>


          <EventListing />

          {matchesMobile && <>
            <Box sx={{ display: 'block', width: '90%', alignSelf: 'center', }}>
              <LiveMatchHome />
              {/* <div style={{ height: '.002vh' }} ></div> */}

              <MatchComponent />
              {/* <div style={{ height: '.7vh' }} ></div> */}
              <MyBetHome />
              {/* <div style={{ height: '2vh' }} ></div> */}

            </Box>

            <MatchOdds onClick={() => handleClose(true)} /></>}
          {!matchesMobile && <Box sx={{ display: 'flex' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

              <MatchOdds onClick={() => handleClose(true)} />
            </Box>
            <Box sx={{ width: '50%', paddingRight: '8%', marginLeft: -1 }}>
              <LiveMatchHome />
              {/* <div style={{ height: '.0013vh' }} ></div> */}

              {/* <br /> */}
              <MatchComponent />
              {/* <div style={{ height: '1vh' }} ></div> */}

              <MyBetHome />

            </Box>
          </Box>
          }

        </Box>
      </Box>

    </div>
  );
}