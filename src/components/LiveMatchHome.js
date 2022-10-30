import { Box, Typography } from "@mui/material"
import { MyBet } from "../assets"
import StyledImage from './StyledImage'

const LiveMatchHome = () => {
    return (
        <Box sx={{ minWidth: "10%", background: "#F1C550", marginY: '1vh', width: { mobile: "97%", laptop: '100%' } }}>
            <Box sx={{ height: "35px", display: "flex", alignItems: "center", px: "10px", width: { mobile: "100%", laptop: '100%' } }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>Live Match</Typography>
            </Box>
            <StyledImage src={MyBet} sx={{ height: "auto", width: { mobile: "100%", laptop: '100%', alignSelf: 'center' } }} />
        </Box>
    )
}

export default LiveMatchHome