import React from "react"
import { useTheme } from "@emotion/react"
import { Typography, useMediaQuery, Box, Menu } from "@mui/material"
import { Header, Info, Lock, Logout, TIME, UD } from "../assets"
import './index.css'
import PlaceBet from "./PlaceBet"
import Matches from "../containers/matches"
import MatchesComponent from "./Matches"
import StyledImage from "./StyledImage"

const SeperateBox = ({ color, empty, value, value2, lock }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (

        <Box sx={{ background: color, border: color != 'white' ? '1px solid #2626264D' : '0px solid white', width: { mobile: '30%', laptop: '20%' }, height: '94%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
            {!empty && !lock && <Box sx={{ alignItems: 'center', justifyContent: 'space-around' }} >
                <Typography sx={{ fontSize: '13px', color: color == 'white' ? 'white' : 'black', fontWeight: '700', textAlign: 'center' }} >{value}</Typography>
                <Typography sx={{ fontSize: '12px', marginTop: -.4, color: color == 'white' ? 'white' : 'black', textAlign: 'center' }} >{value2}</Typography>
            </Box>}
            {lock &&
                <img
                    src={Lock}
                    style={{ width: '10px', height: '15px' }}
                />

            }
        </Box>
    )
}
const Divider = () => {
    return (
        <Box sx={{ width: '100%', background: 'rgba(211,211,211)', height: '1px' }} ></Box>
    )
}
const BoxComponent = ({ name, color }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <Box sx={{ display: 'flex', background: 'white', height: '40px', width: '100%', alignItems: 'center' }} >
            <Box sx={{ display: 'flex', background: 'white', position: 'relative', height: '40px', width: '40%', alignItems: 'center', justifyContent: 'space-between', }} >

                <Typography sx={{ color: 'black', fontSize: { laptop: '14px', mobile: "13px" }, fontWeight: '600', marginLeft: '7px' }} >{name}</Typography>
                <MoneyBox color={color} />
            </Box>
            <Box sx={{ display: 'flex', background: 'white', height: '40px', width: { laptop: '60%', mobile: '80%' }, justifyContent: { mobile: 'flex-end', laptop: 'center' }, alignItems: 'center' }} >
                {!matchesMobile && <SeperateBox value={"1.71"} value2={" 1cr+"} color={matchesMobile ? "white" : "#B3E0FF"} />
                }
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                {!matchesMobile && <SeperateBox value={"1.71"} value2={" 1cr+"} color={matchesMobile ? "white" : "#FFB5B5"} />}
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                <SeperateBox value={"1.71"} value2={" 1cr+"} color={matchesMobile ? "white" : "#B3E0FF"} />
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                <SeperateBox value={"1.72"} value2={" 1cr+"} color={matchesMobile ? "white" : "#FFB5B5"} />
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#B3E0FF"} />
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#FFB5B5"} />
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

            </Box>
        </Box>
    )
}
const SmallBox = ({ color }) => {
    return (
        <Box sx={{ width: { laptop: '70px', mobile: '17vw' }, position: 'absolute', display: 'flex', left: { mobile: '56.5%', laptop: '49vw', tablet: '49%' }, justifyContent: 'center', alignItems: 'center', height: '30px', background: 'white', borderRadius: '7px' }}>
            <Typography sx={{ fontSize: { laptop: '12px', mobile: '10px' }, fontWeight: 'bold', color: color ? color : '#46e080' }} >+Book.60</Typography>
        </Box>
    )
}
const SmallBoxSeason = ({ color }) => {
    return (
        <Box sx={{ width: { laptop: '70px', mobile: '17vw' }, flexDirection: 'column', position: 'absolute', display: 'flex', left: { mobile: '56.5%', laptop: '49vw', tablet: '49%' }, justifyContent: 'center', alignItems: 'center', height: '30px', background: 'white', borderRadius: '3px' }}>
            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#FF4D4D' }} >+Book.60</Typography>
            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#46e080' }} >999</Typography>

        </Box>
    )
}
const MoneyBox = ({ color }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <Box sx={{
            width: '80px', border: "1px solid #2626264D",
            borderRadius: "5px", justifyContent: 'center', position: matchesMobile ? 'absolute' : 'relative', right: matchesMobile ? '-90%' : '7px', alignItems: 'center', display: 'flex', height: '25px', background: '#F6F6F6', borderRadius: '7px'
        }}>
            <Typography sx={{ fontSize: '9px', fontWeight: 'bold', color: color }} >-10,00,000</Typography>
        </Box>
    )
}
const Time = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontSize: { mobile: '10px', laptop: "12px" }, fontWeight: 'bold', color: '#black', width: { mobile: '40px', laptop: '80px' } }} >5 sec Delay</Typography>
            <img style={{ width: '20px', height: '20px' }} src={TIME} />
        </Box>
    )
}
const Odds = ({ onClick }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <Box onClick={onClick} sx={{ display: 'flex', backgroundColor: 'white', padding: .2, flexDirection: 'column', marginY: { mobile: '.7vh', laptop: '1vh' }, width: { mobile: "96%", laptop: '97%' }, marginX: '1vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>





            <Box sx={{ display: 'flex', height: 38, flexDirection: 'row', width: '99.7%', alignSelf: 'center' }}>
                <Box sx={{ flex: 1, background: '#f1c550', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "12px" }, fontWeight: 'bold', marginLeft: '7px' }} >Match Odds</Typography>
                    <Time />
                </Box>

                <Box sx={{
                    flex: .1, background: '#262626'
                    // '#262626' 
                }}>
                    <div class="slanted"></div>

                </Box>
                <Box sx={{
                    flex: 1, background: '#262626',
                    // '#262626' ,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <SmallBox />
                    <Typography sx={{ color: 'white', width: '60px', fontSize: { laptop: '9px', mobile: "7px" }, fontWeight: '500', flexWrap: "wrap" }} >Maximum Bet 100000</Typography>
                    <img src={Info} style={{ width: '15px', height: '15px', marginRight: '5px', marginLeft: '5px' }} />
                </Box>
            </Box >
            {
                <Box sx={{ display: 'flex', background: '#319E5B', height: '25px', width: '99.7%', alignSelf: 'center' }} >
                    <Box sx={{ display: 'flex', background: "'#319E5B'", height: '25px', width: '40%', alignItems: 'center' }} >
                        <Typography sx={{ color: 'white', fontSize: { laptop: '11px', mobile: "9px" }, marginLeft: '7px' }} >MIN: 4000 MAX:4500</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', background: '#319E5B', height: '25px', width: { laptop: '60%', mobile: '80%' }, justifyContent: { laptop: 'center', mobile: 'flex-end' } }} >
                        <Box sx={{ background: "#00C0F9", width: { laptop: '16.5%', mobile: "25%" }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Typography sx={{ fontSize: '12px', color: 'black', fontWeight: '600' }} >Back</Typography>
                        </Box>
                        <Box sx={{ width: '.35%', display: 'flex' }} ></Box>

                        <Box sx={{ background: "#FF9292", width: { laptop: '16.5%', mobile: "25%" }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Typography sx={{ fontSize: '12px', color: 'black', fontWeight: '600' }} >Lay</Typography>
                        </Box>

                    </Box>
                </Box>
            }
            <BoxComponent color={'#46e080'} name={'INDIA'} />
            <Divider />
            <BoxComponent color={'#FF4D4D'} name={'PAKISTAN'} />
            <Divider />
            <BoxComponent color={'#F8C851'} name={"DRAW"} />
        </Box >

    )
}
const SeasonMarketBox = () => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >6 Over runs INDIA W (INDIA vs PAKISTAN) Adv 0</Typography>
            </Box>
            <Box sx={{ display: 'flex', position: 'relative', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                <SeperateBox color={"white"} />
                {matchesMobile && <PlaceBetComponent />}
                {false && <>
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} /></>}
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                <SeperateBox color={"white"} />
                <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                {!matchesMobile && <>
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                </>}
                {!matchesMobile && <PlaceBetComponentWeb />}
            </Box>
        </Box>
    )
}
const PlaceBetComponent = () => {
    return (
        <Box sx={{ background: "#0B4F26", flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', width: { laptop: "90px", mobile: '80px' }, borderRadius: '5px', height: '35px', left: '35px', position: 'absolute' }} >
            <Box sx={{ background: "#FDF21A", borderRadius: '3px', width: "90%", height: '45%', display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: { laptop: '10px', mobile: "8px" }, fontWeight: 'bold', color: "#FF4D4D" }}>Total Bet : <span style={{ color: "#0B4F26" }} >250</span></Typography>
            </Box>
            <Box>
                <Typography sx={{ fontSize: { laptop: '10px', mobile: "8px" }, fontWeight: '500', color: "white" }}>Profit/Loss</Typography>

            </Box>
        </Box >
    )
}
const PlaceBetComponentWeb = () => {
    return (
        <Box sx={{ background: "#0B4F26", flexDirection: 'row', display: 'flex', alignItems: 'center', paddingX: '.2vw', width: { laptop: "10vw" }, borderRadius: '5px', height: '32px', right: '8px', position: 'absolute' }} >
            <Box sx={{ background: "#FDF21A", borderRadius: '3px', width: "45%", height: '85%', display: "flex", alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: { laptop: '.5vw', }, fontWeight: 'bold', color: "#FF4D4D" }}>Total Bet</Typography>
                <Typography sx={{ fontSize: { laptop: '.5vw' }, fontWeight: 'bold', color: "#0B4F26" }}>250</Typography>

            </Box>
            <Box sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }} >
                <Typography sx={{ fontSize: { laptop: '.6vw' }, fontWeight: '500', color: "white" }}>Profit/Loss</Typography>
                <img
                    src={UD}
                    style={{ width: '12px', height: '12px', marginLeft: '5px' }}
                />
            </Box>
            {/* <DropdownMenu /> */}

        </Box >
    )
}
const CustomMenuItem = ({ }) => {
    return (
        <Box sx={{ width: '200px', background: 'white', height: '100px', borderRadius: '5px', border: '1px solid black', position: 'absolute' }}>

        </Box>
    )
}
const DropdownMenu = ({ anchorEl, open, handleClose }) => {
    return (
        <Menu
            id="basic-menu"
            anchorEl={0}
            open={true}
            onClose={() => { }}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            sx={{}}
        >

            <CustomMenuItem />

        </Menu >
    )
}
const SeasonMarket = ({ onClick }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <Box onClick={onClick} sx={{ display: 'flex', background: 'white', padding: .3, flexDirection: 'column', marginY: { mobile: '.7vh', laptop: '1vh' }, width: { mobile: "96%", laptop: '97%' }, marginX: "1vw", alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>
            <Box sx={{ display: 'flex', height: 38, flexDirection: 'row', width: '99.7%', alignSelf: 'center' }}>
                <Box sx={{ flex: 1, background: '#f1c550', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "12px" }, fontWeight: 'bold', marginLeft: '7px' }} >Session Market</Typography>
                </Box>
                <Box sx={{
                    flex: .1, background: '#262626'
                    // '#262626' 
                }}>
                    <div class="slanted"></div>

                </Box>
                <Box sx={{
                    flex: 1, background: '#262626',
                    // '#262626' ,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <SmallBoxSeason />
                    <Typography sx={{ color: 'white', width: '60px', fontSize: { laptop: '9px', tablet: '9px', mobile: "7px" }, fontWeight: '500', flexWrap: "wrap" }} >Maximum Bet 100000</Typography>
                    <img src={Info} style={{ width: '15px', height: '15px', marginRight: '5px', marginLeft: '5px' }} />
                </Box>
            </Box >
            <Box sx={{ width: "100%", height: "200px", overflowY: "auto" }}>
                {<Box sx={{ display: 'flex', background: '#319E5B', height: '25px', width: '99.7%', alignSelf: 'center' }} >
                    <Box sx={{ display: 'flex', background: "'#319E5B'", height: '25px', width: '40%', alignItems: 'center' }} >
                        <Typography sx={{ color: 'white', fontSize: { laptop: '11px', mobile: "9px" }, marginLeft: '7px' }} >MIN: 4000 MAX:4500</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', background: '#319E5B', height: '25px', width: { laptop: '60%', mobile: '80%' }, justifyContent: { laptop: 'center', mobile: 'flex-end' } }} >
                        <Box sx={{ background: "#00C0F9", width: { laptop: '16.5%', mobile: "25%" }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Typography sx={{ fontSize: '12px', color: 'black', fontWeight: '600' }} >Back</Typography>
                        </Box>
                        <Box sx={{ width: '.35%', display: 'flex' }} ></Box>

                        <Box sx={{ background: "#FF9292", width: { laptop: '16.5%', mobile: "25%" }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Typography sx={{ fontSize: '12px', color: 'black', fontWeight: '600' }} >Lay</Typography>
                        </Box>

                    </Box>
                </Box>}

                <SeasonMarketBox />
                <Divider />
                <SeasonMarketBox />
                <Divider />
                <SeasonMarketBox />
                <Divider />
                <SeasonMarketBox />
                <Divider />
                <SeasonMarketBox />
                <Divider />
                <SeasonMarketBox />
                <Divider />
            </Box>
        </Box>

    )
}
const BookMarketer = ({ onClick }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <Box onClick={onClick} sx={{ display: 'flex', backgroundColor: 'white', padding: .2, flexDirection: 'column', marginY: { mobile: '.7vh', laptop: '1vh' }, width: { mobile: "96%", laptop: '97%' }, marginX: '1vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>





            <Box sx={{ display: 'flex', height: 38, flexDirection: 'row', width: '99.7%', alignSelf: 'center' }}>
                <Box sx={{ flex: 1, background: '#f1c550', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "12px" }, fontWeight: 'bold', marginLeft: '7px' }} >Bookmaker Market</Typography>

                </Box>

                <Box sx={{
                    flex: .1, background: '#262626'
                    // '#262626' 
                }}>
                    <div class="slanted"></div>

                </Box>
                <Box sx={{
                    flex: 1, background: '#262626',
                    // '#262626' ,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <SmallBox color={"#FF4D4D"} />
                    <Typography sx={{ color: 'white', width: '60px', fontSize: { laptop: '9px', tablet: '9px', mobile: "7px" }, fontWeight: '500', flexWrap: "wrap" }} >Maximum Bet 100000</Typography>
                    <img src={Info} style={{ width: '15px', height: '15px', marginRight: '5px', marginLeft: '5px' }} />
                </Box>
            </Box >
            {
                <Box sx={{ display: 'flex', background: '#319E5B', height: '25px', width: '99.7%', alignSelf: 'center' }} >
                    <Box sx={{ display: 'flex', background: "'#319E5B'", height: '25px', width: '40%', alignItems: 'center' }} >
                        <Typography sx={{ color: 'white', fontSize: { laptop: '11px', mobile: "9px" }, marginLeft: '7px' }} >MIN: 4000 MAX:4500</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', background: '#319E5B', height: '25px', width: { laptop: '60%', mobile: '80%' }, justifyContent: { laptop: 'center', mobile: 'flex-end' } }} >
                        <Box sx={{ background: "#00C0F9", width: { laptop: '16.5%', mobile: "25%" }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Typography sx={{ fontSize: '12px', color: 'black', fontWeight: '600' }} >Back</Typography>
                        </Box>
                        <Box sx={{ width: '.35%', display: 'flex' }} ></Box>

                        <Box sx={{ background: "#FF9292", width: { laptop: '16.5%', mobile: "25%" }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Typography sx={{ fontSize: '12px', color: 'black', fontWeight: '600' }} >Lay</Typography>
                        </Box>

                    </Box>
                </Box>
            }
            <BoxComponent color={'#46e080'} name={'INDIA'} />
            <Divider />
            <BoxComponent color={'#FF4D4D'} name={'PAKISTAN'} />
        </Box >

    )
}
const MatchOdds = ({ onClick }) => {
    const [currentSelected, setCurrentSelected] = React.useState(0)
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Odds onClick={() => {
                if (currentSelected == 1) {
                    setCurrentSelected(0)
                } else {
                    setCurrentSelected(1)
                }


            }} />
            {currentSelected == 1 && <PlaceBet />}
            <BookMarketer onClick={onClick = () => {
                if (currentSelected == 2) {
                    setCurrentSelected(0)
                } else {
                    setCurrentSelected(2)
                }
            }} />
            {currentSelected == 2 && <PlaceBet />}
            <SeasonMarket onClick={onClick = () => {
                if (currentSelected == 3) {
                    setCurrentSelected(0)
                } else {
                    setCurrentSelected(3)
                }
            }} />
            {currentSelected == 3 && <PlaceBet />}
        </Box>
    )
}

export default MatchOdds