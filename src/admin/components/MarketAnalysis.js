import { Box, Typography } from "@mui/material";
import { ARROWUP, BACKIMAGE } from "../assets/index";
const LiveMarketComponent = ({ team, team_2 }) => {
    const StockBox = ({ team, value }) => {
        return (
            <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10px' }}>
                <Typography sx={{ color: 'white', fontSize: { mobile: '13px', laptop: '20px' }, fontWeight: '600' }}>{team}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ color: 'white', fontSize: { mobile: '13px', laptop: '20px' }, marginRight: '5px', fontWeight: '600' }}>{value}</Typography>
                    {!team && <img style={{ width: '20px', height: '12px' }} src={ARROWUP} />}
                </Box>
            </Box>
        )
    }

    return (
        <Box sx={{ width: '99%', display: 'flex', position: 'relative', marginY: '6px', alignSelf: 'center', justifyContent: 'space-evenly',height:"75px", flexDirection: { mobile: 'column', laptop: 'row' } }} >
            <Box sx={{ position: 'absolute', zIndex: 11, width: '60px', height: '15px', top: '-8px', left: '10px', background: '#46CF4D', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white' }}>
                <Typography sx={{ fontSize: { laptop: '10px', mobile: '8px' }, color: 'white', fontStyle: 'italic' }}>LIVE NOW</Typography>
            </Box>
            <Box sx={{ background: '#F8C851', paddingY: { mobile: .5, laptop: 0 }, width: { mobile: "99%", laptop: '39.9%' }, height: '100%', display: 'flex', alignItems: 'center', marginX: '2px', border: '1.5px solid white' }}>
                <Typography sx={{ fontSize: { laptop: '25px', mobile: '17px' }, fontWeight: 'bold', marginLeft: '5px' }}>India Vs pakistan</Typography>
            </Box>
            <Box sx={{ width: '99%', alignSelf: 'center', display: 'flex',height:"100%", marginTop: { mobile: '2px', laptop: 0 } }}>
                <Box sx={{ background: '#27AC1E', width: '33%', height: '100%', border: '1.5px solid white' }}>
                    <StockBox value={"+100,000,000"} team={team} />
                </Box>
                <Box sx={{ background: '#E32A2A', width: '33%', height: '100%', marginX: '2px', border: '1.5px solid white' }}>
                    <StockBox value={"+100,000,000"} team={team_2} />
                </Box>
                <Box sx={{ background: '#0B4F26', width: '33%', height: '100%', border: '1.5px solid white', marginRight: '2px' }}>
                    <StockBox value={"100,000,000"} team={"Total Bet"} />

                </Box>
            </Box>
        </Box >
    )
}
const MarketAnalysis = () => {
    return (
        <Box sx={{ display: 'flex',width: '100vw', flexDirection: 'column'}} >
            <Typography sx={{ fontSize: '20px', color: 'white', marginLeft: '10px', fontWeight: '600', marginY: '10px' }} >MARKET ANALYSIS</Typography>
            <LiveMarketComponent team_2={'Pakistan'} team={"India"} />
            <LiveMarketComponent team_2={'Pakistan'} team={"India"} />
            <LiveMarketComponent team_2={'Pakistan'} team={"India"} />
            <LiveMarketComponent team_2={'Pakistan'} team={"India"} />
            <LiveMarketComponent team_2={'Pakistan'} team={"India"} />
        </Box>
    )
}
export default MarketAnalysis;