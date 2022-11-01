import { Box } from "@mui/system";
import { useState } from "react";
import { CustomHeader, MatchOdds, SideBar } from "../../components";
import EventListing from "../../components/EventListing";
import MatchComponent from "../../components/MathComponent";
import LiveMatchHome from "../../components/LiveMatchHome";
import MyBetHome from "../../components/MyBetHome";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import PlaceBet from "../../components/PlaceBet";
import { HourGlass } from "../../assets";
import Lottie from "lottie-react";
import AllRateOdds from "../../components/AllRateOdds";
import SessionBet from "../../components/SessionBet";
import BetPlaced from "../../components/BetPlaced";

export default function Home() {
  const [drawer, setDrawer] = useState(false)
  const theme = useTheme()
  const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
  const [open, handleClose] = useState(false)
  const [selected, setSelected] = useState("CRICKET")
  const [visible, setVisible] = useState(false)
  return (
    <div style={{ height: "100vh", display: 'flex', flexDirection: 'column' }} >
      <CustomHeader />
      <Box flex={1} sx={[{ flex: 1, display: 'flex', }, (theme) => ({
        backgroundImage: `${theme.palette.primary.homeBodyGradient}`
      })]} >
        <SideBar />
        {/* <PlaceBet open={open} handleClose={() => {
          handleClose(!open)
        }} /> */}
        <Box sx={{ display: 'flex', overflowX: "hidden", flexDirection: 'column', flex: 1, justifyContent: 'flex-start', overflowY: "auto", alignItems: 'flex-start' }}>

          <EventListing setSelected={setSelected} selected={selected} />
          <BetPlaced visible={visible} setVisible={setVisible} />

          {matchesMobile && (selected == "CRICKET" || selected == "INPLAY") && < div style={{ width: '100%' }}>
            <MatchOdds onClick={() => handleClose(true)} />

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignSelf: 'center', alignItems: 'center' }}>
              <AllRateOdds />
              <SessionBet />
              <MatchComponent />
              <LiveMatchHome />

              {/* <MyBetHome /> */}
            </Box>
          </div>}
          {!matchesMobile && (selected == "CRICKET" || selected == "INPLAY") && <Box sx={{ display: 'flex', width: '100%' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>

              <MatchOdds onClick={() => handleClose(true)} />
            </Box>
            <Box sx={{ width: '30%', paddingRight: '1%' }}>
              <MatchComponent />

              <LiveMatchHome />
              <AllRateOdds />
              <SessionBet />

              {/* <MyBetHome /> */}
            </Box>
          </Box>
          }
          {selected != "CRICKET" && selected != "INPLAY" &&
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