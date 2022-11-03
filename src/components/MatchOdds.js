import React from "react"
import { useTheme } from "@emotion/react"
import { Typography, useMediaQuery, Box, Menu, MenuItem } from "@mui/material"
import { BallStart, Header, INDIA, Info, Lock, Logout, PAKISTAN, TIME, UD } from "../assets"
import './index.css'
import PlaceBet from "./PlaceBet"
import { useDispatch } from 'react-redux'
import { setColorValue } from "../store/selectedColorBox"
import { useState } from "react"
import StyledImage from "./StyledImage"
import BetPlaced from "./BetPlaced"

const SeperateBox = ({ color, empty, value, value2, lock, onClick }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    const dispatch = useDispatch()
    return (
        <Box onClick={e => {
            onClick()
            dispatch(setColorValue(color))
        }} sx={{ background: lock ? "#FDF21A" : color, border: color != 'white' ? '1px solid #2626264D' : '0px solid white', width: { mobile: '30%', laptop: '20%' }, height: '94%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
            {!empty && !lock && <Box sx={{ alignItems: 'center', justifyContent: 'space-around' }} >
                <Typography sx={{ fontSize: '13px', color: color == 'white' ? 'white' : 'black', fontWeight: '700', textAlign: 'center' }} >{value}</Typography>
                <Typography sx={{ fontSize: '12px', marginTop: -.4, color: color == 'white' ? 'white' : 'black', textAlign: 'center' }} >{value2}</Typography>
            </Box>}
            {lock &&
                <img
                    src={Lock}
                    style={{ width: '10px', height: '15px', color: 'red' }}
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
const BoxComponent = ({ name, color, onClick }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <Box sx={{ display: 'flex', background: 'white', height: '40px', width: '100%', alignItems: 'center', justifyContent: 'space-between' }} >
            <Box sx={{ display: 'flex', background: 'white', position: 'relative', height: '40px', width: '40%', alignItems: 'center', }} >
                <Box sx={{ flexDirection: 'row', display: 'flex', width: '100%', alignItems: 'center' }}>
                    {
                        name != "DRAW" ? <img src={name == "INDIA" ? INDIA : PAKISTAN} style={{ width: "22px", height: '25px', marginLeft: '10px', backgroundSize: "contains" }} />
                            :
                            <Box sx={{ width: '22px', height: '25px', marginLeft: '10px', }}>
                            </Box>
                    }
                    <Typography sx={{ color: 'black', fontSize: { laptop: '14px', mobile: "13px" }, fontWeight: '600', marginLeft: '10px' }} >{name}</Typography>
                </Box>
                <MoneyBox color={color} />
            </Box>
            <Box sx={{ display: 'flex', background: 'white', height: '40px', width: { laptop: '60%', mobile: '80%' }, justifyContent: { mobile: 'flex-end', laptop: 'center' }, alignItems: 'center' }} >
                {!matchesMobile && <SeperateBox onClick={onClick} value={"1.71"} value2={" 1cr+"} color={matchesMobile ? "white" : "#B3E0FF"} />}
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                {!matchesMobile && <SeperateBox onClick={onClick} value={"1.71"} value2={" 1cr+"} color={matchesMobile ? "white" : "#FFB5B5"} />}
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                <SeperateBox onClick={onClick} value={"1.71"} value2={" 1cr+"} color={matchesMobile ? "white" : "#B3E0FF"} />
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                <SeperateBox onClick={onClick} value={"1.72"} value2={" 1cr+"} color={matchesMobile ? "white" : "#FFB5B5"} />
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                <SeperateBox onClick={onClick} value={"1.72"} value2={" 1cr+"} color={"#B3E0FF"} />
                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                <SeperateBox onClick={onClick} value={"1.72"} value2={" 1cr+"} color={"#FFB5B5"} />
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
            <Typography sx={{ fontSize: '8px', fontWeight: 'bold', color: '#FF4D4D' }} >Session Bet</Typography>
            <Typography sx={{ fontSize: '8px', fontWeight: 'bold', color: '#46e080' }} >999</Typography>

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
        <Box sx={{ display: 'flex', backgroundColor: 'white', padding: .2, flexDirection: 'column', marginY: { mobile: '.7vh', laptop: '1vh' }, width: { mobile: "98%", laptop: '97%' }, marginX: '1vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>





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
            <BoxComponent onClick={onClick} color={'#46e080'} name={'INDIA'} />
            <Divider />
            <BoxComponent onClick={onClick} color={'#FF4D4D'} name={'PAKISTAN'} />
            <Divider />
            <BoxComponent onClick={onClick} color={'#F8C851'} name={"DRAW"} />
        </Box >

    )
}
const SeasonMarketBox = ({ onClick, index }) => {
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
                {/* <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', width: '100%' }}> */}
                <SeperateBox onClick={onClick} value={"37"} lock={index == 2} value2={"100"} color={"#F6D0CB"} />

                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                <SeperateBox onClick={onClick} value={"39"} lock={index == 2} value2={"100"} color={"#B3E0FF"} />


                {/* </Box> */}

                <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                {!matchesMobile && <>
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                </>}
                {!matchesMobile && <PlaceBetComponentWeb />}
                {!matchesMobile && index == 1 && <Box sx={{ background: 'rgba(0,0,0,.9)', width: '33.5%', marginLeft: -'3%', height: '40px', position: 'absolute', top: '.1px', alignItems: 'center', justifyContent: 'center', display: 'flex' }} >
                    <img src={BallStart} style={{ width: '55px', height: "15px" }} />
                </Box>}
            </Box>
        </Box>
    )
}
const PlaceBetComponent = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(0);
    };
    return (
        <>
            <Box onClick={e => handleClick(e)} sx={{ background: "#0B4F26", flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', width: { laptop: "90px", mobile: '80px' }, borderRadius: '5px', height: '35px', left: '35px', position: 'absolute' }} >
                <Box sx={{ background: "#FDF21A", borderRadius: '3px', width: "90%", height: '45%', display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ fontSize: { laptop: '10px', mobile: "8px" }, fontWeight: 'bold', color: "#FF4D4D" }}>Total Bet : <span style={{ color: "#0B4F26" }} >250</span></Typography>
                </Box>
                <Box >
                    <Typography sx={{ fontSize: { laptop: '10px', mobile: "8px" }, fontWeight: '500', color: "white" }}>Profit/Loss</Typography>

                </Box>
            </Box >
            <DropdownMenu open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={handleClose} />

        </>
    )
}
const PlaceBetComponentWeb = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box onClick={e => handleClick(e)} sx={{ background: "#0B4F26", flexDirection: 'row', display: 'flex', alignItems: 'center', paddingX: '.2vw', width: { laptop: "10vw" }, borderRadius: '5px', height: '32px', right: '8px', position: 'absolute' }} >
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
            </Box >
            <DropdownMenu open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={handleClose} />

        </>
    )
}



const menutItems = [{ title: "Account Statement" }, { title: "Profile Loss Report" }, { title: "Bet History" }, { title: "Unsetteled Bet" }, { title: "Casino Report History" }, { title: "Set Button Values" }, { title: "Security Auth Verfication" }, { title: "Change Password" }]
const DropdownMenu = ({ anchorEl, open, handleClose }) => {
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
                sx: {
                    paddingY: "0px"
                }
            }}
            PaperProps={
                {
                    sx: {
                        borderRadius: "5px",
                        border: "1px solid #306A47",

                    }
                }
            }
        >
            <Box sx={{ minHeight: "100px", flexDirection: "column", backgroundColor: "white", display: "flex" }}>
                <Box sx={{ display: "flex", height: "25px" }}>
                    <Box sx={{ width: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>Runs</Typography>
                    </Box>
                    <Box sx={{ width: "90px", display: "flex", borderLeft: "1px solid #306A47", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>Amount</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", height: "25px", borderTop: "1px solid #306A47" }}>
                    <Box sx={{ width: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>40</Typography>
                    </Box>
                    <Box sx={{ width: "90px", display: "flex", borderLeft: "1px solid #306A47", background: "#10DC61", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "500", fontSize: "12px", color: "white" }}>4,02,350</Typography>
                        <StyledImage src="https://fontawesomeicons.com/images/svg/trending-up-sharp.svg" sx={{ height: "15px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "15px" }} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", height: "25px", borderTop: "1px solid #306A47" }}>
                    <Box sx={{ width: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>41</Typography>
                    </Box>
                    <Box sx={{ width: "90px", display: "flex", borderLeft: "1px solid #306A47", background: "#10DC61", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "500", fontSize: "12px", color: "white" }}>4,02,350</Typography>
                        <StyledImage src="https://fontawesomeicons.com/images/svg/trending-up-sharp.svg" sx={{ height: "15px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "15px" }} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", height: "25px", borderTop: "1px solid #306A47" }}>
                    <Box sx={{ width: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>42</Typography>
                    </Box>
                    <Box sx={{ width: "90px", display: "flex", borderLeft: "1px solid #306A47", background: "#F8C851", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "500", fontSize: "12px", color: "white" }}>4,02,350</Typography>
                        <StyledImage src="https://fontawesomeicons.com/images/svg/trending-up-sharp.svg" sx={{ height: "15px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "15px" }} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", height: "25px", borderTop: "1px solid #306A47" }}>
                    <Box sx={{ width: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>43</Typography>
                    </Box>
                    <Box sx={{ width: "90px", display: "flex", borderLeft: "1px solid #306A47", background: "#F8C851", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "500", fontSize: "12px", color: "white" }}>4,02,350</Typography>
                        <StyledImage src="https://fontawesomeicons.com/images/svg/trending-up-sharp.svg" sx={{ height: "15px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "15px" }} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", height: "25px", borderTop: "1px solid #306A47" }}>
                    <Box sx={{ width: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>44</Typography>
                    </Box>
                    <Box sx={{ width: "90px", display: "flex", borderLeft: "1px solid #306A47", background: "#DC3545", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "500", fontSize: "12px", color: "white" }}>4,02,350</Typography>
                        <StyledImage src="https://fontawesomeicons.com/images/svg/trending-down-sharp.svg" sx={{ height: "15px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "15px" }} />
                    </Box>
                </Box>
            </Box>
        </Menu>
    )
}
const CustomMenuItem = ({ }) => {
    return (
        <Box sx={{ width: '200px', background: 'white', height: '100px', borderRadius: '5px', border: '1px solid black', position: 'absolute' }}>

        </Box>
    )
}

const SeasonMarket = ({ onClick }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <Box sx={{ display: 'flex', background: 'white', padding: .3, flexDirection: 'column', marginY: { mobile: '.7vh', laptop: '1vh' }, width: { mobile: "98%", laptop: '97%' }, marginX: "1vw", alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>
            <Box sx={{ display: 'flex', height: 38, flexDirection: 'row', width: '99.7%', alignSelf: 'center' }}>
                <Box sx={{ flex: 1, background: '#f1c550', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "12px" }, fontWeight: 'bold', marginLeft: '7px' }} >Session Odds</Typography>
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
            <Box sx={{ width: "100%" }}>
                {<Box sx={{ display: 'flex', background: '#319E5B', height: '25px', width: '99.7%', alignSelf: 'center' }} >
                    <Box sx={{ display: 'flex', background: "'#319E5B'", height: '25px', width: '40%', alignItems: 'center' }} >
                        <Typography sx={{ color: 'white', fontSize: { laptop: '11px', mobile: "9px" }, marginLeft: '7px' }} >MIN: 4000 MAX:4500</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', background: '#319E5B', height: '25px', width: { laptop: '60%', mobile: '80%' }, justifyContent: { laptop: 'center', mobile: 'flex-end' } }} >

                        <Box sx={{ background: "#FF9292", width: { laptop: '16.5%', mobile: "25%" }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Typography sx={{ fontSize: '12px', color: 'black', fontWeight: '600' }} >NO</Typography>
                        </Box>
                        <Box sx={{ width: '.35%', display: 'flex' }} ></Box>
                        <Box sx={{ background: "#00C0F9", width: { laptop: '16.5%', mobile: "25%" }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Typography sx={{ fontSize: '12px', color: 'black', fontWeight: '600' }} >YES</Typography>
                        </Box>

                        {/* <Box sx={{background:'#FF9292',width:{laptop:"16.5%",mobile:"25%"},height:'100%',display:'flex',justifyContent:"center",alignItems:"center"}}>
                            </Box> */}

                    </Box>
                </Box>}

                <SeasonMarketBox index={1} onClick={onClick} />
                <Divider />
                <SeasonMarketBox onClick={onClick} />
                <Divider />
                <SeasonMarketBox index={2} onClick={onClick} />
                <Divider />
                <SeasonMarketBox onClick={onClick} />
                <Divider />
                <SeasonMarketBox onClick={onClick} />
                <Divider />
                <SeasonMarketBox onClick={onClick} />
                <Divider />
            </Box>
        </Box>

    )
}
const BookMarketer = ({ onClick }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <Box sx={{ display: 'flex', backgroundColor: 'white', padding: .2, flexDirection: 'column', marginY: { mobile: '.7vh', laptop: '1vh' }, width: { mobile: "98%", laptop: '97%' }, marginX: '1vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>





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
            <Box sx={{ position: 'relative' }}>
                <BoxComponent onClick={onClick} color={'#46e080'} name={'INDIA'} />
                <Divider />
                <BoxComponent onClick={onClick} color={'#FF4D4D'} name={'PAKISTAN'} />
                {!matchesMobile && <Box sx={{ background: 'rgba(0,0,0,.9)', width: '60%', marginLeft: '40%', height: '82px', position: 'absolute', top: '.1px', alignItems: 'center', justifyContent: 'center', display: 'flex' }} >
                    <img src={BallStart} style={{ width: '113px', height: "32px" }} />
                </Box>}
            </Box>

        </Box >

    )
}
const MatchOdds = ({ onClick }) => {
    const [currentSelected, setCurrentSelected] = React.useState(0)
    const [visible, setVisible] = React.useState(false)
    const [canceled, setCanceled] = React.useState(false)
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Odds onClick={() => {
                if (currentSelected == 1) {
                    setCurrentSelected(0)
                } else {
                    setCurrentSelected(1)
                }


            }} />
            {currentSelected == 1 && <PlaceBet
                onCancel={() => {
                    setCanceled(true)
                    setVisible(true)
                }}
                onSubmit={() => {
                    setVisible(true)
                }} handleClose={() => {
                    setCurrentSelected(0)
                }} />}
            <BookMarketer onClick={onClick = () => {
                if (currentSelected == 2) {
                    setCurrentSelected(0)
                } else {
                    setCurrentSelected(2)
                }
            }} />
            {currentSelected == 2 && <PlaceBet onSubmit={() => {
                setVisible(true)
            }}
                onCancel={() => {
                    setCanceled(true)
                    setVisible(true)
                }}
                handleClose={() => {
                    setCanceled(false)
                    setCurrentSelected(0)
                }} />}
            <SeasonMarket onClick={onClick = () => {
                if (currentSelected == 3) {
                    setCurrentSelected(0)
                } else {
                    setCurrentSelected(3)
                }
            }} />
            {currentSelected == 3 && <PlaceBet
                onCancel={() => {
                    setCanceled(true)
                    setVisible(true)
                }}
                onSubmit={() => {
                    setVisible(true)
                }} season={true} handleClose={() => {
                    setCurrentSelected(0)
                }} />}
            <BetPlaced not={canceled} visible={visible} setVisible={setVisible} />
        </Box>
    )
}

export default MatchOdds