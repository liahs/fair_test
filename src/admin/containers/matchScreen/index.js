import React from "react"
import { useTheme } from "@emotion/react"
import { Typography, useMediaQuery, Box, Menu, MenuItem } from "@mui/material"
import { BallStart, Header, INDIA, Info, Lock, Logout, PAKISTAN, TIME, UD } from "../../../assets/index"
import "../../../components/index.css"
import { useDispatch, useSelector } from 'react-redux'
import { setColorValue } from "../../../store/selectedColorBox"
import { useState } from "react"
import { StyledImage } from "../../../components"
import { Popover } from 'react-tiny-popover'
import { BACKIMAGE, LOCKED, LOCKOPEN } from "../../assets"
import LiveMatchComponent from "../../components/LiveMatchComponent"
import LiveMatchAdmin from "../../components/LiveMatchAdmin"
import AllBets from "../../components/AllBets"

const SeperateBox = ({ color, empty, value, value2, lock, session, back }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    const dispatch = useDispatch()
    // const anchor=useSelector(state=>state.betplace)?.anchor
    const [anchor, setAnchor] = React.useState(null)
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const [canceled, setCanceled] = React.useState(false)
    return (
        <>
            <Popover
                isOpen={isPopoverOpen}
                align={matchesMobile ? "end" : "center"}
                positions={['bottom']} // preferred positions by priority
                onClickOutside={() => setIsPopoverOpen(false)}
            // content={<PlaceBet onSubmit={() => {
            //     setVisible(true)
            //     setCanceled(false)
            // }}
            //     onCancel={() => {
            //         setVisible(true)
            //         setCanceled(true)
            //     }}

            //     handleClose={() => {
            //         setIsPopoverOpen(false)
            //     }}
            //     season={session}
            //     back={back}
            // />}
            >
                <Box onClick={e => {
                    if (lock || color == "white") {
                        return null
                    }
                    setIsPopoverOpen(!isPopoverOpen)
                    dispatch(setColorValue(color))
                }} sx={{ background: lock ? "#FDF21A" : color, border: color != 'white' ? '1px solid #2626264D' : '0px solid white', width: { mobile: '30%', laptop: '20%' }, height: '94%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    {!empty && !lock && <Box sx={{ alignItems: 'center', justifyContent: 'space-around' }} >
                        <Typography sx={{ fontSize: '13px', color: color == 'white' ? 'white' : 'black', fontWeight: '700', textAlign: 'center' }} >{value}</Typography>
                        <Typography sx={{ fontSize: '8px', marginTop: -.4, color: color == 'white' ? 'white' : 'black', textAlign: 'center' }} >{value2}</Typography>
                    </Box>}
                    {lock &&
                        <img
                            src={Lock}
                            style={{ width: '10px', height: '15px' }}
                        />

                    }
                </Box>
            </Popover>
        </>
    )
}

const MatchScreen = ({ }) => {
    const [data, setData] = useState([])

    const Divider = () => {
        return (
            <Box sx={{ width: '100%', background: 'rgba(211,211,211)', height: '1.5px' }} ></Box>
        )
    }
    const BoxComponent = ({ name, color, align }) => {
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
                    {!matchesMobile && <SeperateBox align={align} value={"1.71"} value2={" $23000"} color={matchesMobile ? "white" : "#B3E0FF"} />}
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    {!matchesMobile && <SeperateBox align={align} value={"1.71"} value2={" $23000"} color={matchesMobile ? "white" : "#B3E0FF"} />}
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox align={align} value={"1.71"} value2={" $23000"} color={matchesMobile ? "white" : "#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox align={align} value={"1.72"} value2={" $23000"} color={matchesMobile ? "white" : "#FFB5B5"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox back={true} align={align} value={"1.72"} value2={" $23000"} color={"#FFB5B5"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox align={align} value={"1.72"} value2={" $23000"} color={"#FFB5B5"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                </Box>
            </Box>
        )
    }
    const SmallBox = ({ color }) => {
        return (
            <Box sx={{ width: { laptop: '70px', mobile: '17vw' }, display: 'flex', marginRight: '10px', justifyContent: 'center', alignItems: 'center', height: '30px', background: 'white', borderRadius: '3px' }}>
                <Typography sx={{ fontSize: { laptop: '12px', mobile: '10px' }, fontWeight: 'bold', color: color ? color : '#46e080' }} >+Book.60</Typography>
            </Box>
        )
    }
    const SmallBoxSeason = ({ color }) => {
        return (
            <Box sx={{ width: { laptop: '70px', mobile: '17vw' }, flexDirection: 'column', position: 'absolute', display: 'flex', marginRight: '10px', justifyContent: 'center', alignItems: 'center', height: '30px', background: 'white', borderRadius: '3px' }}>
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
                width: '80px',
                borderRadius: "5px", justifyContent: 'center', position: matchesMobile ? 'absolute' : 'relative', right: matchesMobile ? '-90%' : '20px', alignItems: 'center', display: 'flex', height: '25px', borderRadius: '7px'
            }}>
                <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color: color }} >+600,000,000</Typography>

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
    const Odds = ({ }) => {
        const theme = useTheme()
        const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
        return (
            <Box key="odds" sx={{ display: 'flex', backgroundColor: 'white', padding: .2, flexDirection: 'column', marginY: { laptop: '.5vh' }, width: { laptop: '99%' }, marginX: '.5vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>





                <Box sx={{ display: 'flex', height: 38, flexDirection: 'row', width: '99.7%', alignSelf: 'center' }}>
                    <Box sx={{ flex: 1, background: '#f1c550', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "12px" }, fontWeight: 'bold', marginLeft: '7px' }} >Match Odds</Typography>
                        <img src={LOCKOPEN} style={{ width: '14px', height: '20px' }} />

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
    const SeasonMarketBox = ({ index }) => {
        const theme = useTheme()
        const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
        return (
            <div>
                <Box onClick={() => {
                    if (data.includes(index)) {
                        let x = [...data]
                        x.splice(x.indexOf(index), 1)
                        setData([...x])
                    }
                    else {
                        if (data.length < 4) {
                            let x = [...data]
                            setData([...x, index])
                        }
                    }
                }} sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                        <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >6 Over runs INDIA W (INDIA vs PAKISTAN) Adv 0</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', position: 'relative', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                        <SeperateBox color={"white"} />
                        {/* {matchesMobile && <PlaceBetComponent />} */}
                        {false && <>
                            <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                            <SeperateBox color={"white"} />
                            <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                            <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                            <SeperateBox color={"white"} /></>}
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />


                        <SeperateBox session={true} back={true} value={"37"} value2={"100"} lock={index == 2} color={"#F6D0CB"} />

                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox session={true} value={"39"} value2={"100"} lock={index == 2} color={"#B3E0FF"} />


                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        {!matchesMobile && <>
                            <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                            <SeperateBox color={"white"} />
                            <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                            <SeperateBox color={"white"} />
                        </>}
                        {
                            index == 1 &&
                            <Box sx={{
                                width: '33.5%', marginLeft: '-2px', display: 'flex', position: 'absolute', height: '100%', background: 'rgba(0,0,0,1)', justifyContent: 'center ', alignItems: 'center'
                            }}>
                                <img src={BallStart} style={{ width: '60px', height: '17px' }} />
                            </Box>
                        }
                        {<PlaceBetComponentWeb />}
                    </Box>

                </Box>
                <Divider></Divider>
            </div>
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
                <Box
                    // onClick={e => handleClick(e)}
                    sx={{ background: "#0B4F26", flexDirection: 'row', display: 'flex', alignItems: 'center', paddingX: '.2vw', width: "10vw", borderRadius: '5px', height: '32px', right: '8px', position: 'absolute' }} >
                    <Box sx={{ background: "#FDF21A", borderRadius: '3px', width: "45%", height: '85%', display: "flex", alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: '.5vw', fontWeight: 'bold', color: "#FF4D4D" }}>Total Bet</Typography>
                        <Typography sx={{ fontSize: '.5vw', fontWeight: 'bold', color: "#0B4F26" }}>250</Typography>
                    </Box>
                    <Box sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }} >
                        <Typography sx={{ fontSize: '.6vw', fontWeight: '500', color: "white" }}>Profit/Loss</Typography>
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


    const SessionMarket = ({ }) => {
        const theme = useTheme()
        const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
        return (
            <Box sx={{ display: 'flex', background: 'white', padding: .3, flexDirection: 'column', marginY: { laptop: '.25vh' }, width: { laptop: '99%' }, marginX: ".5vw", alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>
                <Box sx={{ display: 'flex', height: 38, flexDirection: 'row', width: '99.7%', alignSelf: 'center' }}>
                    <Box sx={{ flex: 1, background: '#f1c550', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "12px" }, fontWeight: 'bold', marginLeft: '7px' }} >Session Odds</Typography>
                        <img src={LOCKED} style={{ width: '14px', height: '20px' }} />
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


                    </Box>
                </Box >
                <Box sx={{ width: "100%", alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                    {<Box sx={{ display: 'flex', background: '#319E5B', height: '25px', width: '99.7%', alignSelf: 'center' }} >
                        <Box sx={{ display: 'flex', background: "'#319E5B'", height: '25px', width: '40%', alignItems: 'center' }} >
                            <Typography sx={{ color: 'white', fontSize: { laptop: '11px', mobile: "9px" }, marginLeft: '7px' }} >MIN: 4000 MAX:4500</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', background: '#319E5B', height: '25px', width: { laptop: '60%', mobile: '80%' }, justifyContent: { laptop: 'center', mobile: 'flex-end' } }} >

                            <Box sx={{ background: "#FF9292", width: { laptop: '16.5%', mobile: "25%" }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Typography sx={{ fontSize: '12px', color: 'black', fontWeight: '600' }} >BACK</Typography>
                            </Box>
                            <Box sx={{ width: '.35%', display: 'flex' }} ></Box>
                            <Box sx={{ background: "#00C0F9", width: { laptop: '16.5%', mobile: "25%" }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Typography sx={{ fontSize: '12px', color: 'black', fontWeight: '600' }} >LAY</Typography>
                            </Box>

                            {/* <Box sx={{background:'#FF9292',width:{laptop:"16.5%",mobile:"25%"},height:'100%',display:'flex',justifyContent:"center",alignItems:"center"}}>
                                </Box> */}

                        </Box>
                    </Box>}

                    <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', height: '200px', width: '100%' }}>
                        <SeasonMarketBox index={1} />
                        <Divider />

                        <SeasonMarketBox index={2} />
                        <Divider />
                        <SeasonMarketBox index={3} />
                        <Divider />
                        <SeasonMarketBox index={4} />
                        <Divider />
                        <SeasonMarketBox index={5} />
                        <Divider />
                        <SeasonMarketBox index={6} />
                        <Divider />
                        <SeasonMarketBox index={7} />
                        <Divider />
                    </Box>
                </Box >
            </Box >

        )
    }
    const BookMarketer = ({ }) => {
        const theme = useTheme()
        const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
        return (
            <Box sx={{ display: 'flex', backgroundColor: 'white', padding: .2, flexDirection: 'column', marginY: { laptop: '.25vh' }, width: { laptop: '99%' }, marginX: '.5vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>
                <Box sx={{ display: 'flex', height: 38, flexDirection: 'row', width: '99.7%', alignSelf: 'center' }}>
                    <Box sx={{ flex: 1, background: '#f1c550', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "12px" }, fontWeight: 'bold', marginLeft: '7px' }} >Bookmaker Market</Typography>
                        <img src={LOCKED} style={{ width: '14px', height: '20px' }} />

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

                    </Box>
                </Box >
                <Divider />
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


                    <BoxComponent color={'#46e080'} name={'INDIA'} />
                    <Divider />
                    <BoxComponent color={'#FF4D4D'} name={'PAKISTAN'} align="end" />
                    {!matchesMobile && <Box sx={{ background: 'rgba(0,0,0,.5)', width: '100%', height: '105px', position: 'absolute', top: '-24px', alignItems: 'center', justifyContent: 'center', display: 'flex' }} >
                        <img src={LOCKED} style={{ width: '35px', height: '40px' }} />

                        <Typography sx={{ color: 'white', fontWeight: '600', marginLeft: '10px' }}>Locked</Typography>
                    </Box>}
                </Box>


            </Box >

        )
    }
    const RunsBox = () => {
        return (
            <Box sx={{ minHeight: "100px", flexDirection: "column", borderRadius: '10px', backgroundColor: "white", display: "flex", width: '25%', marginX: '.5vw', border: '3px solid #0B4F26' }}>
                <Box sx={{ display: "flex", height: "25px", background: '#0B4F26', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '8px', color: 'white', fontWeight: '600' }}>6 Over runs INDIA</Typography>
                </Box>
                <Box sx={{ display: "flex", height: "25px" }}>
                    <Box sx={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>Runs</Typography>
                    </Box>
                    <Box sx={{ width: "80%", display: "flex", borderLeft: "1px solid #306A47", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>Amount</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", height: "25px", borderTop: "1px solid #306A47" }}>
                    <Box sx={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>40</Typography>
                    </Box>
                    <Box sx={{ width: '80%', display: "flex", borderLeft: "1px solid #306A47", background: "#10DC61", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "500", fontSize: "12px", color: "white" }}>4,02,350</Typography>
                        <StyledImage src="https://fontawesomeicons.com/images/svg/trending-up-sharp.svg" sx={{ height: "15px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "15px" }} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", height: "25px", borderTop: "1px solid #306A47" }}>
                    <Box sx={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>41</Typography>
                    </Box>
                    <Box sx={{ width: "80%", display: "flex", borderLeft: "1px solid #306A47", background: "#10DC61", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "500", fontSize: "12px", color: "white" }}>4,02,350</Typography>
                        <StyledImage src="https://fontawesomeicons.com/images/svg/trending-up-sharp.svg" sx={{ height: "15px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "15px" }} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", height: "25px", borderTop: "1px solid #306A47" }}>
                    <Box sx={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>42</Typography>
                    </Box>
                    <Box sx={{ width: "80%", display: "flex", borderLeft: "1px solid #306A47", background: "#F8C851", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "500", fontSize: "12px", color: "white" }}>4,02,350</Typography>
                        <StyledImage src="https://fontawesomeicons.com/images/svg/trending-up-sharp.svg" sx={{ height: "15px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "15px" }} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", height: "25px", borderTop: "1px solid #306A47" }}>
                    <Box sx={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>43</Typography>
                    </Box>
                    <Box sx={{ width: "80%", display: "flex", borderLeft: "1px solid #306A47", background: "#F8C851", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "500", fontSize: "12px", color: "white" }}>4,02,350</Typography>
                        <StyledImage src="https://fontawesomeicons.com/images/svg/trending-up-sharp.svg" sx={{ height: "15px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "15px" }} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", height: "25px", borderTop: "1px solid #306A47" }}>
                    <Box sx={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "bold", fontSize: "12px" }}>44</Typography>
                    </Box>
                    <Box sx={{ width: "80%", display: "flex", borderLeft: "1px solid #306A47", background: "#DC3545", justifyContent: "center", alignItems: "center", borderBottomRightRadius: "7px" }}>
                        <Typography sx={{ color: "#306A47", fontWeight: "500", fontSize: "12px", color: "white" }}>4,02,350</Typography>
                        <StyledImage src="https://fontawesomeicons.com/images/svg/trending-down-sharp.svg" sx={{ height: "15px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "15px" }} />
                    </Box>
                </Box>
            </Box>
        )
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', backgroundImage: `url(${BACKIMAGE})`, width: '100%', height: '100%' }}>
            <Box sx={{ width: '60%', flexDirection: 'column', display: 'flex' }}>
                <Odds />
                <BookMarketer />
                <SessionMarket />

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around", marginTop: '.25vw' }}>
                    {
                        data.map(() => {
                            return <RunsBox />

                        })
                    }
                </Box>
            </Box>
            <Box sx={{ width: '39.5%', flexDirection: 'column', display: 'flex' }}>
                <LiveMatchComponent />
                <LiveMatchAdmin />
                <AllBets />
            </Box>
        </Box>
    )
}

export default MatchScreen;