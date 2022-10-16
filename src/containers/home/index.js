import { Box } from "@mui/system";
import { CustomHeader, SideBar } from "../../components";
import EventListing from "../../components/EventListing";
import LiveMatchHome from "../../components/LiveMatchHome";
import MyBetHome from "../../components/MyBetHome";

export default function Home() {
  return (
    <div style={{ height: "100vh", display: 'flex', flexDirection: 'column' }} >
      <CustomHeader />
      <Box flex={1} sx={[{ flex: 1, display: 'flex', height: '80%', }, (theme) => ({
        backgroundImage: `${theme.palette.primary.homeBodyGradient}`
      })]} >

        <SideBar />
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <EventListing />
          <Box style={{width:"40%"}}>
            <LiveMatchHome />
            <br />
            <MyBetHome />
          </Box>
        </Box>
      </Box>

    </div>
  );
}