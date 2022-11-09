import { Box, Typography } from "@mui/material"
import SearchInput from "../../components/SearchInput"
import StyledImage from "../../components/StyledImage"
import { Excel, LockIcon, Pdf, UnLockIcon } from "../assets"
import SmallDropDown from "./smallDropDown"

const BetsList = () => {
    return (
        <Box sx={[{ marginX: "0.5%", minHeight: "200px", borderRadius: "10px", border: "2px solid white" }, (theme) => ({
            backgroundImage: `${theme.palette.primary.headerGradient}`
        })]}>
            <ListH />
            <ListHeaderT />
            {/* <Row containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} /> */}

        </Box>
    )
}

const ListH = () => {
    return (<Box display={"flex"} sx={{ justifyContent: "space-between", px: "10px", py: "10px" }}>
        <Box display={"flex"} alignItems="center">
            <Typography sx={{ fontSize: '10px', color: 'white', fontWeight: '500' }}>Show</Typography>
            <SmallDropDown />
            <Typography sx={{ fontSize: '10px', color: 'white', fontWeight: '500' }}>Entries</Typography>

        </Box>
        <SearchInput placeholder={"Search User..."} />
    </Box>)
}

const ListHeaderT = () => {
    return (
        <Box sx={{ display: "flex", height: "35px", background: "#262626", alignItems: "center", borderTop: "2px solid white", borderBottom: "2px solid white" }}>
            <Box sx={{ width: "12%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Event Type</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Event Name</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Username</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Runner Name</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Bet Type</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>User Rate</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", justifyContent: "center", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Amount</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Place Date</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", justifyContent: "center", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Match Date</Typography>
            </Box>
        </Box>
    )
}

const Row = ({ containerStyle, fContainerStyle, fTextStyle, profit }) => {
    return (
        <Box sx={[{ display: "flex", height: "45px", background: "#0B4F26", alignItems: "center", overflow: "hidden", borderBottom: "2px solid white" }, containerStyle]}>
            <Box sx={[{ width: "11%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }, fContainerStyle]}>
                <Typography sx={[{ fontSize: "12px", fontWeight: "600" }, fTextStyle]}>03-11-2022</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", background: "#E32A2A", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "white" }}>4,02,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", background: "#27AC1E", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "white" }}>4,02,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>1,00,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "40%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white", justifyContent: 'center' }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>2022-10-26</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", justifyContent: "center", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>2022-11-02</Typography>

            </Box>


        </Box>
    )
}
export default BetsList;