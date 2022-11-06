import { Box, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import SearchInput from "../../components/SearchInput"
import StyledImage from "../../components/StyledImage"
import { DownGIcon, DownIcon, Excel, LockIcon, Pdf, UnLockIcon } from "../assets"
import { setModalOpen } from "../store/userdetail"

const AccountList = () => {
    return (
        <Box sx={[{ marginX: "0.5%", minHeight: "200px", borderRadius: "10px", overflow: "hidden", border: "2px solid white" }, (theme) => ({
            backgroundImage: `${theme.palette.primary.headerGradient}`
        })]}>
            <ListH />
            <ListHeaderT />
            <ListSubHeaderT />
            <Row containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
            <Row containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row containerStyle={{ background: "#FFE094", borderBottom: "0px" }} profit={false} fContainerStyle={{ background: "#F8C851" }} fTextStyle={{ color: "#0B4F26" }} />
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
                <Typography sx={{ color: "white", fontSize: "12px" }}>User Details</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Credit Referance</Typography>
            </Box>
            <Box sx={{ width: "9%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Balance</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Client Profit/Loss</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Exposure</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Available Balance</Typography>
            </Box>
            <Box sx={{ width: "5%", display: "flex", justifyContent: "center", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Bet Lock</Typography>
            </Box>
            <Box sx={{ width: "5%", display: "flex", justifyContent: "center", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>User Lock</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Exposure Limit</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Account Type</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Casino Total</Typography>
            </Box>
        </Box>
    )
}


const ListSubHeaderT = () => {
    return (
        <Box sx={{ display: "flex", height: "45px", background: "#0B4F26", alignItems: "center", borderBottom: "2px solid white", overflow: "hidden" }}>
            <Box sx={{ width: "11%", display: "flex", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}></Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px", fontWeight: "600" }}>1,00,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "9%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px", fontWeight: "600" }}>1,00,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "11%", display: "flex", paddingLeft: "10px", background: "#27AC1E", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px", fontWeight: "600" }}>4,02,000,000,0</Typography>
                <StyledImage src="https://fontawesomeicons.com/images/svg/trending-up-sharp.svg" sx={{ height: "15px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "15px" }} />
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px", fontWeight: "600" }}>1,00,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px", fontWeight: "600" }}>1,00,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "5%", display: "flex", justifyContent: "center", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
            </Box>
            <Box sx={{ width: "5%", display: "flex", justifyContent: "center", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
            </Box>
            <Box sx={{ width: "10%", display: "flex", justifyContent: "center", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
            </Box>
            <Box sx={{ width: "10%", display: "flex", justifyContent: "center", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
            </Box>
            <Box sx={{ width: "10%", display: "flex", justifyContent: "center", alignItems: "center", height: "45px" }}>
            </Box>
        </Box>
    )
}

const Row = ({ containerStyle, fContainerStyle, fTextStyle, profit }) => {
    const dispatch = useDispatch()
    return (
        <Box sx={[{ display: "flex", height: "45px", background: "#0B4F26", alignItems: "center", overflow: "hidden", borderBottom: "2px solid white" }, containerStyle]}>
            <Box sx={[{ width: "11%", display: "flex", paddingX: "10px", justifyContent: "space-between", alignItems: "center", height: "45px", borderRight: "2px solid white" }, fContainerStyle]}>
                <Typography sx={[{ fontSize: "12px", fontWeight: "600" }, fTextStyle]}>CHD9101012301</Typography>
                <StyledImage onClick={() => {
                    dispatch(setModalOpen(true))
                }} src={profit ? DownIcon : DownGIcon} style={{ height: "10px", width: "15px" }} />
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
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>1,00,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>1,00,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "5%", display: "flex", justifyContent: "center", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <StyledImage src={UnLockIcon} sx={{ height: "20px", width: "20px", fill: "#27AC1E" }} />
            </Box>
            <Box sx={{ width: "5%", display: "flex", justifyContent: "center", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <StyledImage src={LockIcon} sx={{ height: "20px", width: "20px", fill: "#27AC1E" }} />
            </Box>
            <Box sx={{ width: "10%", display: "flex", justifyContent: "center", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>1,00,000,000,0</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px", borderRight: "2px solid white" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>SUPER MASTER</Typography>
            </Box>
            <Box sx={{ width: "10%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "45px" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>0</Typography>
            </Box>
        </Box>
    )
}
export default AccountList