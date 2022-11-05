import { Box, Typography } from "@mui/material";
import { useState } from "react";
import StyledImage from "../../components/StyledImage";
import { DropDown } from "../assets";
export default function HomeSlide() {
    const [show, setShow] = useState(false)
    return (<Box sx={{ position: "relative" }}>
        <Box sx={{ background: "#FFE094", minHeight: "30px", padding: "20px", borderBottomLeftRadius: "10px", width: "99vw", marginX: "auto", borderBottomRightRadius: "10px" }}>
            {show && <><Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <DataShow title={"Upper Level Credit Referance"} value="2,07,000,000" containerStyle={{ flex: 1 }} />
                <DataShow title={"Down level Occupy Balance"} value="1,00,000,000,00" containerStyle={{ flex: 1, marginX: "20px" }} />
                <DataShow title={"Down Level Credit Referance"} value="1,00,000,000,00" containerStyle={{ flex: 1 }} />
            </Box>
                <Box sx={{ display: "flex", marginTop: "20px", justifyContent: "space-between" }}>
                    <DataShow title={"Total Master Balance"} value="2,05,067,211" containerStyle={{ flex: 1 }} />
                    <DataShow title={"Upper Level"} value="1,00,000,000,00" containerStyle={{ flex: 1, marginX: "20px" }} />
                    <DataShow title={"Down Level Profit/Loss"} value="1,00,000,000,00" containerStyle={{ flex: 1 }} />
                </Box>
                <Box sx={{ display: "flex", marginTop: "20px", justifyContent: "space-between", marginBottom: "25px" }}>
                    <DataShow title={"Available Balance"} value="-2,35,929,480" containerStyle={{ flex: 1 }} valueContainerStyle={{ background: "#FF4848" }} />
                    <DataShow title={"Available Balance With Profit/Loss"} value="1,00,000,000,00" containerStyle={{ flex: 1, marginX: "20px" }} />
                    <DataShow title={"My Profit/Loss"} value="1,00,000,000,00" containerStyle={{ flex: 1 }} />
                </Box>
            </>}
        </Box>
        <Box onClick={() => {
            setShow(!show)
        }} sx={{ background: "#ffe094", justifyContent: "center", alignItems: "center", height: "40px", width: "40px", display: "flex", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginX: "auto", marginTop: "-25px", borderRadius: "25px" }}>
            <StyledImage src={DropDown} sx={{ height: "25px", width: "25px", transform: show?"rotate(0deg)":"rotate(180deg);" }} />
        </Box>
    </Box>
    )
}

const DataShow = ({ title, value, containerStyle, valueContainerStyle }) => {
    return (
        <Box sx={[{ display: "flex", height: "38px", backgroundColor: "white", alignItems: "center" }, containerStyle]}>
            <Box sx={{ flex: 1, display: "flex", alignItems: "center", paddingLeft: "10px" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>{title}</Typography>
            </Box>
            <Box sx={[{ flex: 0.5, display: "flex", alignItems: "center", justifyContent: "center", height: "35px", marginRight: "2px", background: "#0B4F26" }, valueContainerStyle]}>
                <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "600" }}>{value}</Typography>
            </Box>
        </Box>
    )
}