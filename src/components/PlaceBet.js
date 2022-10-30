import { Input, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ArrowDown, CANCEL, CancelDark } from "../assets";
import '../components/index.css'
import StyledImage from "./StyledImage";
const PlaceBet = ({ open, handleClose }) => {


    const CustomButton = ({ color, title, onClick }) => {
        return (
            <Box onClick={onClick} sx={{ width: '130px', height: "35px", borderRadius: '10px', border: "2px solid white", alignItems: 'center', justifyContent: 'center', background: color, display: 'flex' }}>
                <Typography sx={{ color: 'white', fontWeight: '500', fontSize: '13px' }} >{title}</Typography>
            </Box>
        )
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', border: "2px solid white", borderRadius: "10px", overflow: "hidden", marginY: { mobile: '.7vh', laptop: '1vh' }, width: { tablet: "100%", mobile: "100%", laptop: '97%' }, marginLeft: '1vw', alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }} >
            <Box sx={{ background: 'yellow', width: "100%", 'overflow': "hidden" }} >
                <Box sx={[{ height: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", px: "10px" }, (theme) => ({
                    backgroundImage: `${theme.palette.primary.headerGradient}`
                })]}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "text.white" }}>Place Bet</Typography>
                    <StyledImage src={CancelDark} sx={{ height: "20px", width: "20px" }} />
                </Box>
                <Box sx={{ display: "flex", marginTop: "2px", marginX: "2px" }}>
                    <TeamsOdssData title={"Team"} value={"INDIA"} containerStyle={{ flex:1 }} />
                    <TeamsOdssData title={"Odds"} value={"INDIA"} containerStyle={{ marginLeft: "2px", flex:1}} />
                    <TeamsOdssData title={"Stake"} value={"INDIA"} containerStyle={{ marginLeft: "2px",flex:1 }} />
                    <TeamsOdssData title={"Profit"} value={"INDIA"} containerStyle={{ marginLeft: "2px",flex:1 }} />
                    <TeamsOdssData title={"Loss"} value={"INDIA"} containerStyle={{ marginLeft: "2px", flex:1}} />
                </Box>
                <Box sx={{ display: "flex", marginTop: "15px", marginX: "2px" }}>
                    <NumberData containerStyle={{flex:1}}  value={"1000"}/>
                    <NumberData containerStyle={{marginLeft: "2px",flex:1}}  value={"2000"}/>
                    <NumberData containerStyle={{marginLeft: "2px",flex:1}}   value={"3000"}/>
                    <NumberData containerStyle={{marginLeft: "2px",flex:1}}  value={"5000"}/>
                    <NumberData containerStyle={{marginLeft: "2px",flex:1}}  value={"10,000"}/>
                </Box>
                <Box sx={{ display: "flex", marginTop: "2px", marginX: "2px" }}>
                    <NumberData containerStyle={{flex:1}}  value={"20,000"}/>
                    <NumberData containerStyle={{marginLeft: "2px",flex:1}}  value={"50,000"}/>
                    <NumberData containerStyle={{marginLeft: "2px",flex:1}}   value={"1,00,000"}/>
                    <NumberData containerStyle={{marginLeft: "2px",flex:1}}  value={"2,00,000"}/>
                    <NumberData containerStyle={{marginLeft: "2px",flex:1}}  value={"5,00,000"}/>
                </Box>
                <Box sx={{ display: 'flex', flex: 1, paddingY: '2vh', justifyContent: 'space-evenly' }}>
                    <CustomButton onClick={handleClose} title={'Reset'} color={'#FF4949'} />
                    <CustomButton onClick={handleClose} title={'Submit'} color={'#262626'} />
                </Box>
            </Box>
        </Box>
    )
}

const TeamsOdssData = ({ title, value, containerStyle }) => {
    return (
        <Box sx={[{ display: "flex", flexDirection: "column", minWidth: "18%" ,}, containerStyle]}>
            <Box sx={{ background: "#262626", border: "2px solid #C7B6B6", display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                <Typography style={{ color: "white", fontSize: "11px", fontWeight: "600" }}>{title}</Typography>
            </Box>
            <Box sx={{ background: "white", border: "2px solid #C7B6B6", display: "flex", justifyContent: "center", alignItems: "center", height: "40px", marginTop: "2px" }}>
                <Typography style={{ color: "#262626", fontSize: "13px", fontWeight: "600" }}>{value}</Typography>
            </Box>
        </Box>
    )
}

const NumberData = ({ value ,containerStyle}) => {
    return (
        <Box sx={[{ border: "4px solid #4F9378", display: "flex",borderRadius:"5px", justifyContent: "center", alignItems: "center", height: "40px", minWidth: "18%", background: "#319E5B" },containerStyle]}>
            <Typography sx={{ color: "white", fontSize: "13px", fontWeight: "500" }}>{value}</Typography>
        </Box>
    )
}

export default PlaceBet;