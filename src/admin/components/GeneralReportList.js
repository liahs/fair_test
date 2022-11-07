import { Box, Typography } from "@mui/material"
import SearchInput from "../../components/SearchInput"
import StyledImage from "../../components/StyledImage"
import { Excel, LockIcon, Pdf, UnLockIcon } from "../assets"
import SmallDropDown from "./smallDropDown"

const GeneralReportList = () => {
    return (
        <Box sx={[{ marginX: "0.5%", minHeight: "200px", borderRadius: "2px", border: "2px solid white" }, (theme) => ({
            backgroundImage: `${theme.palette.primary.headerGradient}`
        })]}>
            <ListH />
            <ListHeaderT />
            <Row style={{ background: '#FFE094' }} containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row style={{ background: '#ECECEC' }} containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row style={{ background: '#FFE094' }} containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row style={{ background: '#ECECEC' }} containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row style={{ background: '#FFE094' }} containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row style={{ background: '#ECECEC' }} containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row style={{ background: '#FFE094' }} containerStyle={{ background: "#FFE094" }} profit={true} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <Row style={{ background: '#ECECEC' }} containerStyle={{ background: "#FFE094" }} profit={false} fContainerStyle={{ background: "#0B4F26" }} fTextStyle={{ color: "white" }} />
            <RowLast />
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
            <Box sx={{ width: "4%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Sr.No.</Typography>
            </Box>
            <Box sx={{ width: "23%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Name</Typography>
            </Box>
            <Box sx={{ width: "23%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Amount</Typography>
            </Box>
            <Box sx={{ width: "4%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Sr.No.</Typography>
            </Box>
            <Box sx={{ width: "23%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Name</Typography>
            </Box>
            <Box sx={{ width: "23%", display: "flex", paddingLeft: "10px", alignItems: "center", height: "35px", borderRight: "2px solid white" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>Amount</Typography>
            </Box>
        </Box>
    )
}

const RowLast = ({ containerStyle, fContainerStyle, fTextStyle, profit, style }) => {
    return (
        <Box sx={[{ display: "flex", height: "45px", background: "#0B4F26", alignItems: "center", overflow: "hidden", borderBottom: "2px solid white" }, containerStyle]}>
            <Box sx={[{ width: "54.45%", display: "flex", alignItems: "center", height: "45px", borderRight: "2px solid white", justifyContent: 'center', background: '#303030' }]}>
                <Typography sx={[{ fontSize: "12px", fontWeight: "600", textAlign: 'center', color: 'white' }, fTextStyle]}>General Total</Typography>
            </Box>
            <Box sx={[{ width: "45.65%", display: "flex", paddingLeft: "10px", background: "#303030", alignItems: "center", height: "45px", borderRight: "2px solid white" }, style]}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "black", color: 'white' }}>100,000,000</Typography>
            </Box>
            <Box sx={[{ width: "54.45%", display: "flex", alignItems: "center", height: "45px", borderRight: "2px solid white", justifyContent: 'center', background: '#303030' }]}>
                <Typography sx={[{ fontSize: "12px", fontWeight: "600", textAlign: 'center', color: 'white' }, fTextStyle]}>General Total</Typography>
            </Box>
            <Box sx={[{ width: "45.65%", display: "flex", paddingLeft: "10px", background: "#303030", alignItems: "center", height: "45px", borderRight: "2px solid white" }, style]}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "black", color: 'white' }}>100,000,000</Typography>
            </Box>
        </Box>
    )
}


const Row = ({ containerStyle, fContainerStyle, fTextStyle, profit, style }) => {
    return (
        <Box sx={[{ display: "flex", height: "45px", background: "#0B4F26", alignItems: "center", overflow: "hidden", borderBottom: "2px solid white" }, containerStyle]}>
            <Box sx={[{ width: "4%", display: "flex", alignItems: "center", height: "45px", borderRight: "2px solid white", justifyContent: 'center' }, fContainerStyle]}>
                <Typography sx={[{ fontSize: "12px", fontWeight: "600", textAlign: 'center' }, fTextStyle]}>01</Typography>
            </Box>
            <Box sx={[{ width: "23%", display: "flex", paddingLeft: "10px", background: "#FFE094", alignItems: "center", height: "45px", borderRight: "2px solid white" }, style]}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "black" }}>John Doe</Typography>
            </Box>
            <Box sx={[{ width: "23%", display: "flex", paddingLeft: "10px", background: "#FFE094", alignItems: "center", height: "45px", borderRight: "2px solid white" }, style]}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "black" }}>100,000,000</Typography>
            </Box>
            <Box sx={[{ width: "4%", display: "flex", alignItems: "center", height: "45px", borderRight: "2px solid white", justifyContent: 'center' }, fContainerStyle]}>
                <Typography sx={[{ fontSize: "12px", fontWeight: "600", textAlign: 'center' }, fTextStyle]}>01</Typography>
            </Box>
            <Box sx={[{ width: "23%", display: "flex", paddingLeft: "10px", background: "#FFE094", alignItems: "center", height: "45px", borderRight: "2px solid white" }, style]}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "black" }}>John Doe</Typography>
            </Box>
            <Box sx={[{ width: "23%", display: "flex", paddingLeft: "10px", background: "#FFE094", alignItems: "center", height: "45px", borderRight: "2px solid white" }, style]}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "black" }}>100,000,000</Typography>
            </Box>



        </Box>
    )
}
export default GeneralReportList;