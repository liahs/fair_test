import { Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { BASKETBALL, Card, CHESS, Cricket, Football, GOLF, Hockey, Play, Slot, SNOOKER, Tennis } from "../assets"

const EventListing = ({ }) => {
    const [selected, setSelected] = useState('CRICKET')
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
        },
        {
            title: "SNOOKER",
            image: SNOOKER
        }
        ,
        {
            title: "GOLF",
            image: GOLF
        },
        {
            title: "CHESS",
            image: CHESS
        },
        {
            title: "BASKETBALL",
            image: BASKETBALL
        }
    ]
    const EventComponent = ({ data }) => {
        return (
            <Box onClick={() => {
                setSelected(data.title)
            }} sx={[{
                width: '55px', minHeight: { laptop: 70, tablet: 65, mobile: 50 }, minWidth: { laptop: 70, tablet: 65, mobile: 50 }, height: '55px', marginX: '1vw', marginY: '1vh', borderRadius: '.6vh', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: { laptop: 'center', mobile: 'center' }, background: 'white'
            }, selected == data.title ? { border: "2px solid #F8C851" } : { border: '2px solid white' }]} >
                <img src={data.image} style={{ width: '30px', height: '30px', alignSelf: 'center' }} />
                <Typography noWrap sx={{ fontSize: { laptop: '.7vw', tablet: "0px", mobile: '0px' }, marginTop: { mobile: '0px', tablet: '0px', laptop: '1vh' } }} >{data.title}</Typography>
            </Box>
        )
    }
    return (
        <Box sx={[{ width: { mobile: "90%", laptop: '100%', tablet: '80%' }, minHeight: { mobile: 80, laptop: 85 }, overflowY: "visible", overflowX: 'auto', marginTop: '1vh', alignSelf: { mobile: 'center', laptop: 'flex-start', tablet: 'center' }, justifyContent: { mobile: 'center', table: "center", laptop: "flex-start" }, display: 'flex' }]}>

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