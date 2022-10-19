import React from "react"
import { useTheme } from "@emotion/react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { Header, Info, Lock } from "../assets"
import './index.css'
import PlaceBet from "./PlaceBet"

const SeperateBox = ({ color, empty, value, value2, lock }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <Box sx={{ background: color, width: { mobile: '30%', laptop: '20%' }, height: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
            {!empty && !lock && <Box sx={{ alignItems: 'center', justifyContent: 'space-around' }} >
                <Typography sx={{ fontSize: '11px', color: color == 'white' ? 'white' : 'black', fontWeight: '700', textAlign: 'center' }} >{value}</Typography>
                <Typography sx={{ fontSize: '10px', marginTop: -.4, color: color == 'white' ? 'white' : 'black', textAlign: 'center' }} >{value2}</Typography>
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
const Odds = ({ onClick }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <Box onClick={onClick} sx={{ display: 'flex', flexDirection: 'column', marginY: { mobile: '.7vh', laptop: '1vh' }, width: { tablet: "100%", mobile: "100%", laptop: '95%' }, marginX: '1vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>





            <Box sx={{ display: 'flex', height: 38, flexDirection: 'row', width: '100%' }}>
                <Box sx={{ flex: 1.2, background: '#f1c550', alignItems: 'center', display: 'flex' }}>
                    <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "12px" }, fontWeight: 'bold', marginLeft: '7px' }} >Match Odds</Typography>
                </Box>

                <Box sx={{
                    flex: .3, background: '#262626'
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
                    <Typography sx={{ color: 'white', fontSize: { laptop: '13px', tablet: '12px', mobile: "10px" }, fontWeight: '500' }} >Maximum Bet 100000</Typography>
                    <img src={Info} style={{ width: '15px', height: '15px', marginRight: '5px', marginLeft: '5px' }} />
                </Box>
            </Box >
            <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'white', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px' }} >MIN: 4000 MAX:4500</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: { laptop: '60%', mobile: '80%' }, justifyContent: { laptop: 'center', mobile: 'flex-end' } }} >
                    <Box sx={{ background: "#00C0F9", width: { laptop: '16.5%', mobile: "24.7%" }, borderRight: '0px solid #319E5B', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >Back</Typography>
                    </Box>
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    <Box sx={{ background: "#FF9292", width: { laptop: '16.5%', mobile: "24.7%" }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >Lay</Typography>
                    </Box>

                </Box>
            </Box>
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "10px" }, marginLeft: '7px', fontWeight: '600' }} >INDIA</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                    {!matchesMobile && <SeperateBox color={"#CEEBFF"} empty={true} />}

                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    {!matchesMobile && <SeperateBox color={"#CEEBFF"} empty={true} />}
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"2.38"} value2={"1cr+"} color={matchesMobile ? "white" : "#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={matchesMobile ? "white" : "#F6D0CB"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#F9E3E0"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "10px" }, marginLeft: '7px', fontWeight: '600' }} >PAKISTAN</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                    {!matchesMobile && <SeperateBox color={"#CEEBFF"} empty={true} />}

                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    {!matchesMobile && <SeperateBox color={"#CEEBFF"} empty={true} />}
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"2.38"} value2={"1cr+"} color={matchesMobile ? "white" : "#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={matchesMobile ? "white" : "#F6D0CB"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#F9E3E0"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "10px" }, marginLeft: '7px', fontWeight: '600' }} >DRAW</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                    {!matchesMobile && <SeperateBox color={"#CEEBFF"} empty={true} />}

                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    {!matchesMobile && <SeperateBox color={"#CEEBFF"} empty={true} />}
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"2.38"} value2={"1cr+"} color={matchesMobile ? "white" : "#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={matchesMobile ? "white" : "#F6D0CB"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#F9E3E0"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>

        </Box>

    )
}
const SeasonMarket = ({ onClick }) => {
    return (
        <Box onClick={onClick} sx={{ display: 'flex', flexDirection: 'column', marginY: '1vh', width: {  mobile: "100%", laptop: '95%' }, marginX: '1vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>
            <Box sx={{ display: 'flex', height: 38, flexDirection: 'row', width: '100%' }}>
                <Box sx={{ flex: 1.2, background: '#f1c550', alignItems: 'center', display: 'flex' }}>
                    <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "12px" }, fontWeight: 'bold', marginLeft: '7px' }} >Session Market</Typography>
                </Box>
                <Box sx={{
                    flex: .3, background: '#262626'
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
                    <Typography sx={{ color: 'white', fontSize: { laptop: '13px', tablet: '12px', mobile: "10px" }, fontWeight: '500' }} >Maximum Bet 100000</Typography>
                    <img src={Info} style={{ width: '15px', height: '15px', marginRight: '5px', marginLeft: '5px' }} />
                </Box>
            </Box >
            <Box sx={{width:"100%",height:"200px",overflowY:"auto"}}>
            <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'white', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px' }} >MIN: 4000 MAX:4500</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center' }} >
                    <Box sx={{ background: "#00C0F9", width: '16.5%', borderRight: '2px solid #319E5B', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >YES</Typography>
                    </Box>
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    <Box sx={{ background: "#FF9292", width: '16.5%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >NO</Typography>
                    </Box>

                </Box>
            </Box>
           
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                        <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >6 Over runs INDIA W (INDIA vs PAKISTAN) Adv 0</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                        <SeperateBox color={"white"} />

                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                        <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    </Box>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                        <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >6 Over runs INDIA W (INDIA vs PAKISTAN) Adv 0</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                        <SeperateBox color={"white"} />

                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                        <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    </Box>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                        <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >6 Over runs Pakistan W (INDIA vs PAKISTAN) Adv 0</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                        <SeperateBox color={"white"} />

                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                        <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    </Box>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                        <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >15 Over runs INDIA W (INDIA vs PAKISTAN) Adv 0</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                        <SeperateBox color={"white"} />

                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                        <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    </Box>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                        <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >20 Over runs INDIA W (INDIA vs PAKISTAN) Adv 0</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                        <SeperateBox color={"white"} />

                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                        <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    </Box>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                        <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >6 Over runs INDIA W (INDIA vs PAKISTAN) Adv 0</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                        <SeperateBox color={"white"} />

                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                        <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                        <SeperateBox color={"white"} />
                        <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    </Box>
                </Box>
                <Divider />
            </Box>
        </Box>

    )
}
const BookMarketer = ({ onClick }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    return (
        <Box onClick={onClick} sx={{
            display: 'flex', flexDirection: 'column', marginY: {
                mobile: '.7vh', laptop: '1vh'
            }
            , width: {  mobile: "100%", laptop: '95%' }, marginX: '1vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', }
        }}>

            <Box sx={{ display: 'flex', height: 38, flexDirection: 'row', width: '100%' }}>
                <Box sx={{ flex: 1.2, background: '#f1c550', alignItems: 'center', display: 'flex' }}>
                    <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "12px" }, fontWeight: 'bold', marginLeft: '7px' }} >Bookmaker Market</Typography>
                </Box>

                <Box sx={{
                    flex: .3, background: '#262626'
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
                    <Typography sx={{ color: 'white', fontSize: { laptop: '13px', tablet: '12px', mobile: "10px" }, fontWeight: '500' }} >Maximum Bet 100000</Typography>
                    <img src={Info} style={{ width: '15px', height: '15px', marginRight: '5px', marginLeft: '5px' }} />
                </Box>
            </Box >
            <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'white', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px' }} >MIN: 4000 MAX:4500</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: { laptop: '60%', mobile: '80%' }, justifyContent: { laptop: 'center', mobile: 'flex-end' } }} >
                    <Box sx={{ background: "#00C0F9", width: { laptop: '16.5%', mobile: "24.7%" }, borderRight: '0px solid #319E5B', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >Back</Typography>
                    </Box>
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    <Box sx={{ background: "#FF9292", width: { laptop: '16.5%', mobile: "24.7%" }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >Lay</Typography>
                    </Box>

                </Box>
            </Box>
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "10px" }, marginLeft: '7px', fontWeight: '600' }} >INDIA</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                    {!matchesMobile && <SeperateBox color={"#CEEBFF"} empty={true} />}

                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    {!matchesMobile && <SeperateBox color={"#CEEBFF"} empty={true} />}
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"2.38"} value2={"1cr+"} color={matchesMobile ? "white" : "#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={matchesMobile ? "white" : "#F6D0CB"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#F9E3E0"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "10px" }, marginLeft: '7px', fontWeight: '600' }} >PAKISTAN</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                    {!matchesMobile && <SeperateBox color={"#CEEBFF"} empty={true} />}

                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    {!matchesMobile && <SeperateBox color={"#CEEBFF"} empty={true} />}
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"2.38"} value2={"1cr+"} color={matchesMobile ? "white" : "#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={matchesMobile ? "white" : "#F6D0CB"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#F9E3E0"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>

        </Box >
    )
}
const MatchOdds = ({ onClick }) => {
    const [currentSelected, setCurrentSelected] = React.useState(0)
    return (
        < >
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
        </>
    )
}

export default MatchOdds