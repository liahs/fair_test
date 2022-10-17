import { Box, Typography } from "@mui/material"
import { MyBet } from "../assets"
import StyledImage from './StyledImage'

const MyBetHome = () => {
    return (
        <Box sx={{ minWidth: "10%", background: "#F1C550" ,marginBottom:"2vh"}}>
            <Box sx={{ height: "35px", display: "flex", alignItems: "center", px: "10px" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>My Bet</Typography>
            </Box>
            <RowComponent header={true} data={["Matched Bet", "Odds", "Stake"]} />
            <RowComponent header={false} data={["INDIA", "90.00", "100.00"]} />
            <div style={{ height: "1px", background: "#fafafa" }} />
            <RowComponent header={false} data={["PAKISTAN", "90.00", "100.00"]} />
        </Box>
    )
}

const RowComponent = ({ data, containerStyle, header }) => {
    return (
        <Box sx={[{ height: "20px", backgroundColor: header ? "#319E5B" : "#FFFFFF", height: header ? "20px" : "30px", flexDirection: "row", display: "flex" }, containerStyle]}>
            {data?.map((x, i) => <Box sx={{ flex: i == 0 ? 6 : 3, px: i == 0 ? "10px" : "0px", marginLeft: i != 0 ? "2px" : 0, display: "flex", alignItems: "center", background: i != 0 ? (header ? "black" : "#F1F1F1") : "transparent", justifyContent: i != 0 ? "center" : "flex-start" }}>
                <Typography sx={{ fontSize: { laptop: header ? "10px" : "12px", mobile: header ? "8px" : "10px" }, fontWeight: header ? "normal" : "600", color: header ? "text.white" : "text" }}>{x}</Typography>
            </Box>)}
        </Box>
    )
}
export default MyBetHome