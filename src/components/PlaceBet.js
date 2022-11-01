import { Input, Modal, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ArrowDown, CANCEL, CancelDark } from "../assets";
import '../components/index.css'
import StyledImage from "./StyledImage";
import { useSelector } from 'react-redux'
const PlaceBet = ({ open, handleClose, season, onSubmit, onCancel }) => {
    const theme = useTheme()
    const selectedColorBox = useSelector(state => state.selectedColorBox)?.value
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    const CustomButton = ({ color, title, onClick }) => {
        return (
            <Box onClick={onClick} sx={{ width: '150px', height: "35px", borderRadius: '10px', border: "2px solid white", alignItems: 'center', justifyContent: 'center', background: color, display: 'flex' }}>
                <Typography sx={{ color: 'white', fontWeight: '500', fontSize: '13px' }} >{title}</Typography>
            </Box>
        )
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', border: "2px solid white", borderRadius: "10px", overflow: "hidden", marginY: { mobile: '.7vh', laptop: '1vh' }, width: { mobile: "98%", laptop: '97%' }, marginLeft: { laptop: '1vw', mobile: "0px" }, alignSelf: { mobile: 'center', tablet: 'center', laptop: 'flex-start', } }} >
            <Box sx={{ background: selectedColorBox, width: "100%", 'overflow': "hidden" }} >
                <Box sx={[{ height: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", px: "10px" }, (theme) => ({
                    backgroundImage: `${theme.palette.primary.headerGradient}`
                })]}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "text.white" }}>Place Bet</Typography>
                    <StyledImage onClick={handleClose} src={CancelDark} sx={{ height: "20px", width: "20px" }} />
                </Box>
                <Box sx={{ display: "flex", marginTop: "2px", marginX: "2px" }}>
                    <TeamsOdssData title={season ? "Session" : "Team"} value={season ? "6 OVER RUNS INDIA" : "INDIA"} valueContainerStyle={{ background: "#F8C851" }} containerStyle={{ flex: 1 }} />
                    <TeamsOdssData title={"Odds"} value={"60.00"} containerStyle={{ marginLeft: "2px", flex: 1 }} />
                    <TeamsOdssData title={season ? "Yes/No" : "Back/Lay"} value={season ? "Yes" : "Back"} containerStyle={{ marginLeft: "2px", flex: 1 }} />
                    {!matchesMobile && <>
                        <TeamsOdssData title={"Stake"} value={"10,00,000"} containerStyle={{ marginLeft: "2px", flex: 1 }} />
                        <TeamsOdssData title={"Profit"} trendingUp={true} valueTextStyle={{ color: "white" }} value={"6,00,000"} valueContainerStyle={{ background: "#10DC61" }} containerStyle={{ marginLeft: "2px", flex: 1 }} />
                        <TeamsOdssData title={"Loss"} trendingDown={true} valueTextStyle={{ color: "white" }} value={"10,00,000"} valueContainerStyle={{ background: "#FF4949" }} containerStyle={{ marginLeft: "2px", flex: 1 }} />
                    </>
                    }
                </Box>
                {matchesMobile && <Box sx={{ display: "flex", marginTop: "2px", marginX: "2px" }}>
                    <TeamsOdssData title={"Stake"} value={"10,00,000"} containerStyle={{ marginLeft: "2px", flex: 1 }} />
                    <TeamsOdssData title={"Profit"} trendingUp={true} valueTextStyle={{ color: "white" }} value={"6,00,000"} valueContainerStyle={{ background: "#10DC61" }} containerStyle={{ marginLeft: "2px", flex: 1 }} />
                    <TeamsOdssData title={"Loss"} trendingDown={true} valueTextStyle={{ color: "white" }} value={"10,00,000"} valueContainerStyle={{ background: "#FF4949" }} containerStyle={{ marginLeft: "2px", flex: 1 }} />

                </Box>}
                {!matchesMobile && <><Box sx={{ display: "flex", marginTop: "15px", marginX: "2px" }}>
                    <NumberData containerStyle={{ flex: 1 }} value={"1000"} />
                    <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"2000"} />
                    <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"3000"} />
                    <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"5000"} />
                    <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"10,000"} />
                </Box>
                    <Box sx={{ display: "flex", marginTop: "2px", marginX: "2px" }}>
                        <NumberData containerStyle={{ flex: 1 }} value={"20,000"} />
                        <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"50,000"} />
                        <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"1,00,000"} />
                        <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"2,00,000"} />
                        <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"5,00,000"} />
                    </Box></>}
                {matchesMobile && <><Box sx={{ display: "flex", marginTop: "15px", marginX: "2px" }}>
                    <NumberData containerStyle={{ flex: 1 }} value={"1000"} />
                    <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"2000"} />
                    <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"3000"} />
                </Box>
                    <Box sx={{ display: "flex", marginTop: "2px", marginX: "2px" }}>

                        <NumberData containerStyle={{ flex: 1 }} value={"5000"} />
                        <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"10,000"} />
                        <NumberData containerStyle={{ flex: 1, marginLeft: "2px", }} value={"20,000"} />
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "2px", marginX: "2px" }}>
                        <NumberData containerStyle={{ flex: 1 }} value={"50,000"} />
                        <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"1,00,000"} />
                        <NumberData containerStyle={{ marginLeft: "2px", flex: 1 }} value={"5,00,000"} />
                    </Box>
                </>}
                <Box sx={{ display: 'flex', flex: 1, paddingY: '2vh', justifyContent: 'space-evenly' }}>
                    <CustomButton onClick={() => { handleClose(); onCancel(); }} title={'Reset'} color={'#FF4949'} />
                    <CustomButton onClick={() => { handleClose(); onSubmit(); }} title={'Submit'} color={'#262626'} />
                </Box>
            </Box>
        </Box>
    )
}

const TeamsOdssData = ({ title, value, containerStyle, valueContainerStyle, valueTextStyle, trendingUp, trendingDown }) => {
    return (
        <Box sx={[{ display: "flex", flexDirection: "column", }, containerStyle]}>
            <Box sx={{ background: "#262626", border: "2px solid #C7B6B6", display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                <Typography sx={{ color: "white", fontSize: "11px", fontWeight: "600" }}>{title}</Typography>
            </Box>
            <Box sx={[{ background: "white", border: "2px solid #C7B6B6", display: "flex", justifyContent: "center", alignItems: "center", height: "40px", marginTop: "2px" }, valueContainerStyle]}>
                <Typography sx={[{ color: "#262626", fontSize: "13px", fontWeight: "600" }, valueTextStyle]}>{value}</Typography>
                {trendingUp && <StyledImage src="https://fontawesomeicons.com/images/svg/trending-up-sharp.svg" sx={{ height: "20px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "20px" }} />}
                {trendingDown && <StyledImage src="https://fontawesomeicons.com/images/svg/trending-down-sharp.svg" sx={{ height: "20px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "20px" }} />}

            </Box>
        </Box>
    )
}

const NumberData = ({ value, containerStyle }) => {
    return (
        <Box sx={[{ border: "4px solid #4F9378", display: "flex", borderRadius: "5px", justifyContent: "center", alignItems: "center", height: "40px", minWidth: "18%", background: "#319E5B" }, containerStyle]}>
            <Typography sx={{ color: "white", fontSize: "13px", fontWeight: "500" }}>{value}</Typography>
        </Box>
    )
}

export default PlaceBet;