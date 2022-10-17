import { Box, Typography } from "@mui/material"
import { display, width } from "@mui/system"
import { Header, Info, Lock, TEAMLOGO, TEAMLOGO1 } from "../assets"
import './index.css'
const SeperateBox = ({ color, empty, value, value2, lock }) => {
    return (
        <Box sx={{ background: color, width: '20%', height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
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
        <Box sx={{ width: '100%', background: 'rgba(211,211,211)', height: '1px' }} ></Box>

    )
}
const Odds = ({ upcoming, onClick }) => {
    return (
        <Box onClick={onClick} sx={{ display: 'flex', position: 'relative', flexDirection: 'column', marginY: '1.5vh', width: { table: "55%", mobile: "90%", laptop: '95%' }, marginX: '1vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }}>



            {!upcoming && <Box sx={{ width: '50px', height: '15px', justifyContent: 'center', display: 'flex', alignItems: 'center', background: '#46CF4D', position: 'absolute', marginTop: -1, borderRadius: '3px', marginLeft: 1 }} >
                <Typography sx={{ fontStyle: 'italic', fontSize: { laptop: '10px', mobile: "8px" }, fontWeight: '600', color: 'white' }} >LIVE</Typography>
            </Box>}
            {upcoming && <Box sx={{ width: '70px', height: '15px', justifyContent: 'center', display: 'flex', alignItems: 'center', background: '#129FFE', position: 'absolute', marginTop: -1, borderRadius: '3px', marginLeft: 1 }} >
                <Typography sx={{ fontStyle: 'italic', fontSize: { laptop: '10px', mobile: "8px" }, fontWeight: '600', color: 'white' }} >UPCOMING</Typography>
            </Box>}

            <Box sx={{ display: 'flex', height: 40, flexDirection: 'row', width: '100%' }}>
                <Box sx={{ flex: 1.2, background: '#f1c550', alignItems: 'center', display: 'flex' }}>
                    <Typography sx={{ fontSize: { laptop: '13px', tablet: '12px', mobile: "10px" }, fontWeight: 'bold', marginLeft: '7px' }} >Team A vs Team B / <span style={{ fontWeight: '500' }} >Today at 9:30 PM</span></Typography>
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


                </Box>
            </Box >
            {<Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: "'#319E5B'", height: '20px', width: '40%', alignItems: 'center' }} >
                    <Typography sx={{ color: 'white', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px' }} >MIN: 4000 MAX:4500</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: '#319E5B', height: '20px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center' }} >
                    <Box sx={{ background: "#00C0F9", width: '16.5%', borderRight: '2px solid #319E5B', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >Back</Typography>
                    </Box>
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    <Box sx={{ background: "#FF9292", width: '16.5%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography sx={{ fontSize: '10px', color: 'white' }} >Lay</Typography>
                    </Box>

                </Box>
            </Box>}
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <img src={TEAMLOGO} style={{ width: '25px', height: '25px', marginLeft: '10px' }} />
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >Team A</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox value={"1.71"} value2={" 1cr+"} color={"#B3E0FF"} />

                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.71"} value2={" 1cr+"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"1.71"} value2={" 1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#F9E3E0"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>

            <Divider />
            <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '100%' }} >
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: '40%', alignItems: 'center' }} >
                    <img src={TEAMLOGO1} style={{ width: '25px', height: '25px', marginLeft: '10px' }} />
                    <Typography sx={{ color: 'black', fontSize: { laptop: '11px', tablet: '10px', mobile: "8px" }, marginLeft: '7px', fontWeight: '600' }} >Team B</Typography>
                </Box>
                <Box sx={{ display: 'flex', background: 'white', height: '38px', width: { laptop: '60%', mobile: '80%' }, justifyContent: 'center', alignItems: 'center' }} >
                    <SeperateBox value={"1.71"} value2={" 1cr+"} color={"#B3E0FF"} />

                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.71"} value2={" 1cr+"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                    <SeperateBox value={"1.71"} value2={" 1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#F6D0CB"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#B3E0FF"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>
                    <SeperateBox value={"1.72"} value2={" 1cr+"} color={"#F9E3E0"} />
                    <Box sx={{ width: '.45%', display: 'flex', background: 'pink' }} ></Box>

                </Box>
            </Box>
            <Divider />

        </Box>

    )
}


const MatchesComponent = ({ onClick }) => {

    return (
        < >
            <Odds onClick={onClick} />
            <Odds onClick={onClick} upcoming={true} />

            <Odds onClick={onClick} />

        </>
    )
}

export default MatchesComponent;