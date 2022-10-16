import { Box } from "@mui/system";
import { useState } from "react";
import { CustomHeader, MatchOdds, SideBar } from "../../components";
import EventListing from "../../components/EventListing";
import MatchComponent from "../../components/MathComponent";

export default function Home() {
  const [drawer, setDrawer] = useState(false)
  return (
    <div style={{ height: "100vh", display: 'flex', flexDirection: 'column' }} >
      <CustomHeader />
      <Box flex={1} sx={[{ flex: 1, display: 'flex', height: '80%', }, (theme) => ({
        backgroundImage: `${theme.palette.primary.homeBodyGradient}`
      })]} >

        <SideBar />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'flex-start', overflow: 'auto', alignItems: 'flex-start' }}>
          <EventListing />
          <MatchComponent />
          <MatchOdds />
        </Box>
      </Box>

    </div>
  );
}