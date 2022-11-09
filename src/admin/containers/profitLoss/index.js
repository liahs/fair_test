import { Box, Typography } from "@mui/material"
import { ARROWDOWN, ARROWUP } from "../../assets";
import { Background, Header } from "../../components";
import GeneralReportList from "../../components/GeneralReportList";
import ProfitLossList from "../../components/ProfitLossList";
import YellowHeaderProfitLoss from "../../components/YellowHeaderProfitLoss";

const ProfitLoss = () => {
    const ExtraHeader = () => {
        return (
            <Box sx={{ marginY: '1.5vh' }}>
                <Typography sx={{ color: "white", marginLeft: '10px', fontSize: '20px', fontWeight: '500', marginBottom: '1vh' }} >Profit/Loss for Event Type</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ width: "25%", display: "flex", paddingLeft: "10px", background: "#27AC1E", alignItems: "center", height: "45px", marginX: 2, marginLeft: .9 }}>
                        <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "white" }}>Cricket : 4,02,000,000,0</Typography>
                        <img src={ARROWUP} style={{ marginLeft: '5px', width: '20px', height: '10px' }} />

                    </Box>
                    <Box sx={{ width: "25%", display: "flex", paddingLeft: "10px", background: "#E32A2A", alignItems: "center", height: "45px", marginRight: 2 }}>
                        <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "white" }}>Football : 4,02,000,000,0</Typography>
                        <img src={ARROWDOWN} style={{ marginLeft: '5px', width: '20px', height: '10px' }} />

                    </Box>
                    <Box sx={{ width: "25%", display: "flex", paddingLeft: "10px", background: "#27AC1E", alignItems: "center", height: "45px", }}>
                        <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "white" }}>Tennis : 4,02,000,000,0</Typography>
                        <img src={ARROWUP} style={{ marginLeft: '5px', width: '20px', height: '10px' }} />

                    </Box>
                </Box>
            </Box >
        )
    }
    return (
        <Background>
            <Header />
            <YellowHeaderProfitLoss />

            <ExtraHeader />
            <ProfitLossList />
        </Background>
    )
}
export default ProfitLoss;