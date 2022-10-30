import { Box, Typography } from "@mui/material"
import { MyBet } from "../assets"
import StyledImage from './StyledImage'
const data = [
    {
        title: "Book maker",
        time: "03:23 AM",
        type: "Back",
        odds: "90.00",
        stake: "1000.00",
        country: 'INDIA'
    },
    {
        title: "Match odds",
        time: "03:23 AM",
        type: "Lay",
        odds: "90.00",
        stake: "1000.00",
        country: 'INDIA'
    },

]
const AllRateOdds = () => {
    return (
        <Box sx={{ width: { mobile: "96%", laptop: '100%' }, marginY: { mobile: '.7vh', laptop: '1vh' }, padding: .2, background: 'white' }}>
            <Box sx={[{ width: '100%', height: "42px", justifyContent: 'space-between', alignItems: 'center', paddingLeft: '10px', paddingRight: '4px', marginBottom: '.1vh', display: 'flex', }, (theme) => ({
                backgroundImage: `${theme.palette.primary.headerGradient}`
            })]} >
                <Typography sx={{ fontWeight: '12px', color: 'white', fontWeight: '700' }} >All Rate Odds</Typography>

                <Box sx={{ width: '100px', height: '90%', background: 'white', justifyContent: 'center', borderRadius: '3px', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: '700', color: '#FF1111' }} >Total Bet</Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: '700', color: "#0B4F26" }} >999</Typography>

                </Box>
            </Box>
            <RowComponent header={true} data={["Market", "Favourite", "Back/Lay", "Odds", "Stake"]} />

            {
                [...data, ...data, ...data, ...data].map((i, k) => {
                    return (
                        <RowComponent header={false} data={i} />
                    )
                })
            }
        </Box>
    )
}

const RowComponent = ({ header, data }) => {
    const getColor = () => {

        if (header) {
            return "black"
        }
        else if (data?.type == "Back") {
            return "#B3E0FF"
        }
        else {
            return "#FF9292"
        }

    }
    return (
        <Box sx={{ width: '100%', height: header ? '20px' : '42px', background: 'white', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>


            {!header && <>
                <SingleBox color={getColor} data={data.title} first={true} header={header} />
                <SingleBox color={getColor()} data={data} up={true} header={header} />
                <SingleBox color={getColor()} data={data?.type} header={header} />
                <SingleBox color={getColor()} data={data?.odds} header={header} />
                <SingleBox color={getColor()} data={data?.stake} header={header} /></>}
            {header && <>
                <SingleBox color={getColor} data={data[0]} header={header} />
                <SingleBox color={getColor()} data={data[1]} header={header} />
                <SingleBox color={getColor()} data={data[2]} header={header} />
                <SingleBox color={getColor()} data={data[3]} header={header} />
                <SingleBox color={getColor()} data={data[4]} header={header} /></>}


        </Box>
    )
}
const SingleBox = ({ data, header, color, up, first }) => {

    return !header ? first ? (
        <Box sx={{ width: '100%', height: '40px', background: "#F1C550", marginX: { mobile: '1px', laptop: '0.4px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: '700', fontSize: '12px', color: 'black', textAlign: 'center' }} >{data}</Typography>
        </Box>
    ) : up ? (
        <Box sx={{ width: '100%', height: '40px', flexDirection: 'column', background: color, marginX: { mobile: '1px', laptop: '0.4px' }, display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '8px', color: 'black', textAlign: 'end', marginRight: '3px' }} >{data.time}</Typography>
            <Box sx={{ height: '.4vh' }} ></Box>
            <Typography sx={{ fontWeight: '600', fontSize: '12px', color: 'black', textAlign: 'start', marginLeft: '3px' }} >{data.country}</Typography>

        </Box>
    ) : (
        <Box sx={{ width: '100%', height: '40px', background: color, marginX: { mobile: '1px', laptop: '0.4px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '12px', color: 'black' }} >{data}</Typography>
        </Box>
    ) : header &&
    (
        <Box sx={{ width: '100%', height: '20px', background: 'black', marginX: { mobile: '1px', laptop: '0.4px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: '400', fontSize: '10px', color: 'white' }} >{data}</Typography>
        </Box>
    )
}
export default AllRateOdds;