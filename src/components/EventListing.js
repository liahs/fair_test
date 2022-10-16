import { Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { Card, Cricket, Football, Hockey, Play, Slot, Tennis } from "../assets"

const EventListing = ({ }) => {
    const [selected, setSelected] = useState('INPLAY')
    const data = [
        {
            title: "INPLAY",
            image: Play
        },
        {
            title: "LIVE CASINO",
            image: Slot
        },
        {
            title: "LIVE CARD",
            image: Card
        },
        {
            title: "CRICKET",
            image: Cricket
        },
        {
            title: "SOCCER",
            image: Football
        },
        {
            title: "TENNIS",
            image: Tennis
        },
        {
            title: "ICE HOCKEY",
            image: Hockey
        }
    ]
    const EventComponent = ({ data }) => {
        return (
            <Box onClick={() => {
                setSelected(data.title)
            }} sx={[{
                width: '5.5vw', minHeight: { laptop: 50, mobile: 40 }, minWidth: { laptop: 50, mobile: 40 }, height: '5.5vw', marginX: '1vw', marginY: '1vh', borderRadius: '.6vh', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: { laptop: 'center', mobile: 'center' }, background: 'white'
            }, selected == data.title ? { border: "2px solid #F8C851" } : { border: '2px solid white' }]} >
                <img src={data.image} style={{ width: '30px', height: '30px', alignSelf: 'center' }} />
                <Typography noWrap sx={{ fontSize: { laptop: '.7vw', tablet: "0px", mobile: '0px' }, marginTop: { mobile: '0px', tablet: '0px', laptop: '1vh' } }} >{data.title}</Typography>
            </Box>
        )
    }
    return (
        <Box sx={[{ width: "100%", marginTop: '1vh', display: 'flex', flexWrap: 'wrap' }]}>

            {
                data.map((i) => {
                    return (
                        <EventComponent data={i} />
                    )
                })
            }
        </Box>
    )
}

export default EventListing;