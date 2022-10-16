import { Box, Typography } from "@mui/material"
import { display, width } from "@mui/system"
import { Header, Info, Lock } from "../assets"
import './index.css'
const SeperateBox = ({ color, empty, value, value2, lock }) => {
    return (
        <Box sx={{ background: color, width: '20%', height: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
            {!empty && !lock && <Box sx={{ alignItems: 'center', justifyContent: 'space-around' }} >
                <Typography sx={{ fontSize: '11px', color: 'black', fontWeight: '700', textAlign: 'center' }} >{value}</Typography>
                <Typography sx={{ fontSize: '10px', marginTop: -.4, color: 'black', textAlign: 'center' }} >{value2}</Typography>
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
        <Box sx={{ width: '100%', color: 'grey', height: '.5px' }} ></Box>
    )
}
const Odds = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', marginY: '1vh', width: { table: "55%", mobile: "80%", laptop: '67%' }, marginX: '1vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>





            <Box sx={{ display: 'flex', height: 40, flexDirection: 'row', width: '100%' }}>
                <Box sx={{ flex: 1.2, background: '#f1c550', alignItems: 'center', display: 'flex' }}>
                    <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "10px" }, fontWeight: 'bold', marginLeft: '7px' }} >Match Odds</Typography>
                </Box>

                <Box sx={{
                    flex: .5, background: '#262626'
                    // '#262626' 
                }}>
                    <div class="slanted"></div>

                </Box>
                <Box sx={{
                    flex: 1, background: '#262626',
                    // '#262626' ,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{ color: 'white', fontSize: { laptop: '13px', tablet: '12px', mobile: "10px" }, fontWeight: '500' }} >Maximum Bet 100000</Typography>
                    <img src={Info} style={{ width: '15px', height: '15px', marginRight: '5px', marginLeft: '2px' }} />
                </Box>
            </Box >
            <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'white', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px' }} >MIN: 4000 MAX:4500</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '60%', justifyContent: 'center' }} >
                    <Box sx={{ background: "#00C0F9", width: '16.5%', borderRight: '2px solid #319E5B', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >Back</Typography>
                    </Box>
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <Box sx={{ background: "#FF9292", width: '16.5%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >Lay</Typography>
                    </Box>

                </Box>
            </Box>
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >INDIA</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '60%', justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox value={"1.71"} value2={" 1cr+"} color={"#FDF21A"} />

                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.71"} value2={" 1cr+"} color={"#FDF21A"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"1.71"} value2={" 1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#F7D9D5"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#F9E3E0"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >PAKISTAN</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '60%', justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#B3E0FF"} />

                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#FDF21A"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.04"} value2={"76450"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.04"} value2={"76450"} color={"#F7D9D5"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.04"} value2={"76450"} color={"#F9E3E0"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >DRAW</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '60%', justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox color={"#CEEBFF"} empty={true} />

                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"#CEEBFF"} empty={true} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#F7D9D5"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"2.38"} value2={"1cr+"} color={"#F9E3E0"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>

        </Box>

    )
}
const SeasonMarket = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', marginY: '1vh', width: { table: "55%", mobile: "80%", laptop: '67%' }, marginX: '1vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>





            <Box sx={{ display: 'flex', height: 40, flexDirection: 'row', width: '100%' }}>
                <Box sx={{ flex: 1.2, background: '#f1c550', alignItems: 'center', display: 'flex' }}>
                    <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "10px" }, fontWeight: 'bold', marginLeft: '7px' }} >Season Market</Typography>
                </Box>

                <Box sx={{
                    flex: .5, background: '#262626'
                    // '#262626' 
                }}>
                    <div class="slanted"></div>

                </Box>
                <Box sx={{
                    flex: 1, background: '#262626',
                    // '#262626' ,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{ color: 'white', fontSize: { laptop: '13px', tablet: '12px', mobile: "10px" }, fontWeight: '500' }} >Maximum Bet 100000</Typography>
                    <img src={Info} style={{ width: '15px', height: '15px', marginRight: '5px', marginLeft: '2px' }} />
                </Box>
            </Box >
            <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'white', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px' }} >MIN: 4000 MAX:4500</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '60%', justifyContent: 'center' }} >
                    <Box sx={{ background: "#00C0F9", width: '16.5%', borderRight: '2px solid #319E5B', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >YES</Typography>
                    </Box>
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <Box sx={{ background: "#FF9292", width: '16.5%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >NO</Typography>
                    </Box>

                </Box>
            </Box>
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >6 Over runs INDIA W (INDIA vs PAKISTAN) Adv 0</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '60%', justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox color={"white"} />

                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >6 Over runs INDIA W (INDIA vs PAKISTAN) Adv 0</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '60%', justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox color={"white"} />

                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >6 Over runs Pakistan W (INDIA vs PAKISTAN) Adv 0</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '60%', justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox color={"white"} />

                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >15 Over runs INDIA W (INDIA vs PAKISTAN) Adv 0</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '60%', justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox color={"white"} />

                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >20 Over runs INDIA W (INDIA vs PAKISTAN) Adv 0</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '60%', justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox color={"white"} />

                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >6 Over runs INDIA W (INDIA vs PAKISTAN) Adv 0</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '60%', justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox color={"white"} />

                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"39"} value2={"100"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"37"} value2={"100"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox color={"white"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>
            <Divider />

        </Box>

    )
}
const BookMarketer = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', marginY: '1vh', width: { table: "55%", mobile: "80%", laptop: '67%' }, marginX: '1vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>

            <Box sx={{ display: 'flex', height: 40, flexDirection: 'row', width: '100%' }}>
                <Box sx={{ flex: 1.2, background: '#f1c550', alignItems: 'center', display: 'flex' }}>
                    <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "10px" }, fontWeight: 'bold', marginLeft: '7px' }} >Bookmaker Market</Typography>
                </Box>

                <Box sx={{
                    flex: .5, background: '#262626'
                    // '#262626' 
                }}>
                    <div class="slanted"></div>

                </Box>
                <Box sx={{
                    flex: 1, background: '#262626',
                    // '#262626' ,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{ color: 'white', fontSize: { laptop: '13px', tablet: '12px', mobile: "10px" }, fontWeight: '500' }} >Maximum Bet 100000</Typography>
                    <img src={Info} style={{ width: '15px', height: '15px', marginRight: '5px', marginLeft: '2px' }} />
                </Box>
            </Box >
            <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'white', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px' }} >MIN: 4000 MAX:4500</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '60%', justifyContent: 'center' }} >
                    <Box sx={{ background: "#00C0F9", width: '16.5%', borderRight: '2px solid #319E5B', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >Back</Typography>
                    </Box>
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <Box sx={{ background: "#FF9292", width: '16.5%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >Lay</Typography>
                    </Box>

                </Box>
            </Box>
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >INDIA</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '60%', justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox value={"1.71"} value2={" 1cr+"} color={"#FDF21A"} />

                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.71"} value2={" 1cr+"} color={"#FDF21A"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"1.71"} value2={" 1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#F7D9D5"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#F9E3E0"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >PAKISTAN</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '60%', justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox lock value={"2.38"} value2={"1cr+"} color={"#FDF21A"} />

                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox lock value={"2.38"} value2={"1cr+"} color={"#FDF21A"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox lock value={"2.38"} value2={"1cr+"} color={"#FDF21A"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox lock value={"2.04"} value2={"76450"} color={"#FDF21A"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox lock value={"2.04"} value2={"76450"} color={"#FDF21A"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox lock value={"2.04"} value2={"76450"} color={"#FDF21A"} />
                    <Box sx={{ width: '.25%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>

        </Box>
    )
}
const MatchOdds = ({ }) => {

    return (
        < >
            <Odds />
            <BookMarketer />
            <SeasonMarket />
        </>
    )
}

export default MatchOdds