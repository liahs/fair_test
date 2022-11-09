import { Box, Typography } from "@mui/material"
import SearchInput from "../../components/SearchInput"
import StyledImage from "../../components/StyledImage"
import { ARROWDOWN, ARROWUP, Excel, LockIcon, Pdf, UnLockIcon } from "../assets"
import SmallDropDown from "./smallDropDown"

const ProfitLossList = () => {
    return (
        <Box sx={[{ marginX: "0.5%", minHeight: "200px", border: "2px solid white" }, (theme) => ({
            backgroundImage: `${theme.palette.primary.headerGradient}`
        })]}>
            {/* <ListH /> */}
            <ListHeaderT />
            <Row index={0} containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row index={1} containerStyle={{ background: "#ECECEC" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
            <Row index={2} containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row index={3} containerStyle={{ background: "#ECECEC" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
            <Row index={4} containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row index={5} containerStyle={{ background: "#ECECEC" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
            <Row index={6} containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row index={7} containerStyle={{ background: "#ECECEC" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />

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
        <Box sx={{ display: "flex", height: "35px", background: "#262626", alignItems: "center", borderTop: "0px solid white", borderBottom: "2px solid white" }}>
            <Box sx={{ width: "33%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Game Name</Typography>
            </Box>
            <Box sx={{ width: "33%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Game Type</Typography>
            </Box>
            <Box sx={{ width: "34%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "0px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Profit & Loss</Typography>
            </Box>

        </Box>
    )
}




const Row = ({ containerStyle, fContainerStyle, fTextStyle, profit, index }) => {
    return (
        <Box sx={[{ display: "flex", height: "45px", background: "#0B4F26", alignItems: "center", overflow: "hidden", borderBottom: "2px solid white" }, containerStyle]}>
            <Box sx={{ width: "33%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>{index % 2 == 0 ? "Cricket" : "Footbal"}</Typography>
            </Box>

            <Box sx={{ width: "33%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>{index % 2 == 0 ? "Session" : "Match"}</Typography>
            </Box>
            <Box sx={{ width: "34%", display: "flex", paddingLeft: "10px", background: index % 2 == 0 ? "#27AC1E" : "#E32A2A", alignItems: "center", height: "45px", borderRight: "0px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "white" }}>4,02,000,000,0</Typography>
                {index % 2 == 0 ? <img src={ARROWUP} style={{ marginLeft: '5px', width: '20px', height: '10px' }} /> :
                    <img src={ARROWDOWN} style={{ marginLeft: '5px', width: '20px', height: '10px' }} />
                }

            </Box>


        </Box>
    )
}
export default ProfitLossList;