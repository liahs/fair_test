import { Box, Typography } from "@mui/material"
import SearchInput from "../../components/SearchInput"
import StyledImage from "../../components/StyledImage"
import { Excel, LockIcon, Pdf, UnLockIcon } from "../assets"

const AccountStatementList = () => {
    return (
        <Box sx={[{ marginX: "0.5%", minHeight: "200px", borderRadius: "10px", border: "2px solid white" }, (theme) => ({
            backgroundImage: `${theme.palette.primary.headerGradient}`
        })]}>
            <ListH />
            <ListHeaderT />
            <Row containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />

        </Box>
    )
}

const ListH = () => {
    return (<Box display={"flex"} sx={{ justifyContent: "space-between", px: "10px", py: "10px" }}>
        <Box display={"flex"} alignItems="center">
            <Box sx={{ background: "white", height: "30px", borderRadius: "5px", width: "45px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <StyledImage src={Excel} sx={{ height: "25px" }} />
            </Box>
            <Box sx={{ background: "white", marginLeft: "10px", height: "30px", borderRadius: "5px", width: "45px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <StyledImage src={Pdf} sx={{ height: "25px" }} />
            </Box>
        </Box>
        <SearchInput placeholder={"Search User..."} />
    </Box>)
}

const ListHeaderT = () => {
    return (
        <Box sx={{ display: "flex", height: "35px", background: "#262626", alignItems: "center", borderTop: "2px solid white", borderBottom: "2px solid white" }}>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Date</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Credit</Typography>
            </Box>
            <Box sx={{ width: "9%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Debit</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Closing</Typography>
            </Box>
            <Box sx={{ width: "40%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Description</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>From</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", justifyContent: "center", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>To</Typography>
            </Box>
        </Box>
    )
}




const Row = ({ containerStyle, fContainerStyle, fTextStyle, profit }) => {
    return (
        <Box sx={[{ display: "flex", height: "45px", background: "#0B4F26", alignItems: "center", overflow: "hidden", borderBottom: "2px solid white" }, containerStyle]}>
            <Box sx={[{ width: "11%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }, fContainerStyle]}>
                <Typography sx={[{ fontSize: "12px", fontWeight: "600" }, fTextStyle]}>CHD9101012301</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>1,00,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "9%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>1,00,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", background: profit ? "#27AC1E" : "#E32A2A", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "white" }}>4,02,000,000,0</Typography>
                <StyledImage src={profit ? "https://fontawesomeicons.com/images/svg/trending-up-sharp.svg" : "https://fontawesomeicons.com/images/svg/trending-down-sharp.svg"} sx={{ height: "15px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "15px" }} />
            </Box>
            <Box sx={{ width: "40%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>1,00,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>1,00,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", justifyContent: "center", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <StyledImage src={UnLockIcon} sx={{ height: "20px", width: "20px", fill: "#27AC1E" }} />
            </Box>


        </Box>
    )
}
export default AccountStatementList;