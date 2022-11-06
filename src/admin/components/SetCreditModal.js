import { Box, Typography, Modal, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDepoModalOpen } from "../store/depositModal";
import StyledImage from "../../components/StyledImage";
import { CancelDark } from "../../assets";
import { DeleteIcon, EyeIcon, EyeSlash, LockIcon, UnLockIcon } from "../assets";
import { useState } from "react";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "35vw",
    overflow: "hidden",
    background: "white",
    p: "3px",
    border: '2px solid white',
    borderRadius: "10px",
};

export default function DepositModal({ }) {
    const isModalOpen = useSelector(state => state.depositModal)?.isModalOpen
    const dispatch = useDispatch()
    const [showPass, setShowPass] = useState(false)
    return (
        <Modal
            open={isModalOpen}
            onClose={() => dispatch(setDepoModalOpen(false))}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus={true}
        >
            <Box sx={[style]}>
                <Box sx={[{ height: "45px", display: "flex", justifyContent: "space-between", alignItems: "center", px: "10px", borderRadius: "10px" }, (theme) => ({ backgroundImage: theme.palette.primary.headerGradient })]}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "text.white" }}>Deposit</Typography>
                    <StyledImage alt="cross button" onClick={() => {
                        dispatch(setDepoModalOpen(false))
                    }} src={CancelDark} sx={{ height: "22px", width: "22px" }} />
                </Box>
                <Box sx={{ background: "white", paddingX: "10px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                        <Typography sx={{ flex: 1, fontWeight: "600" }}>Betfair Expert</Typography>
                        <LabelAndValue containerStyle={{ flex: 1 }} label={"Old Balance"} value={"1,00,000,000,0"} />
                        <LabelAndValue containerStyle={{ flex: 1, marginLeft: "10px" }} label={"New Balance"} value={"1,00,000,000,0"} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
                        <Typography sx={{ flex: 1, fontWeight: "600" }}>CHD91101012301</Typography>
                        <LabelAndValue containerStyle={{ flex: 1 }} label={"Old Balance"} value={"1,00,000,000,0"} />
                        <LabelAndValue containerStyle={{ flex: 1, marginLeft: "10px" }} label={"New Balance"} value={"1,00,000,000,0"} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
                        <Typography sx={{ flex: 1, fontWeight: "600" }}>Profit/Loss</Typography>
                        <LabelAndValue valueStyle={{ color: "white" }} containerStyle={{ flex: 1, background: "#E32A2A" }} value={"-4,02,350,000"} />
                        <LabelAndValue valueStyle={{ color: "white" }} containerStyle={{ flex: 1, marginLeft: "10px", background: "#004A25" }} value={"1,00,000,000,0"} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
                        <Typography sx={{ flex: 1, fontWeight: "600" }}>Amount</Typography>
                        <Box sx={{ background: "#004A25", borderRadius: "px", flex: 2.25, height: "45px", borderRadius: "5px", paddingX: "10px" }}>
                            <TextField onChange={e => {

                            }} variant="standard" InputProps={{
                                placeholder: "Type Amount...",
                                disableUnderline: true,
                                style: { fontSize: "15px", height: "45px", fontWeight: "600", color: "white" }
                            }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px", "overflow": "hidden" }}>
                        <Typography sx={{ flex: 1, fontWeight: "600" }}>Remark</Typography>
                        <Box sx={{ borderRadius: "px", flex: 2.25, height: "45px", display: "flex", alignItems: "center", borderRadius: "5px", border: "2px solid #26262633", height: "80px", paddingX: "10px" }}>
                            <TextField onChange={e => {

                            }}
                                rows={4}
                                sx={{ width: "100%", height: "40px" }}
                                multiline={true} variant="standard" InputProps={{
                                    placeholder: "6 Over runs INDIA...",
                                    disableUnderline: true,
                                    style: { fontSize: "13px", height: "45px", fontWeight: "600" }
                                }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px", "overflow": "hidden" }}>
                        <Typography sx={{ flex: 1, fontWeight: "600" }}>Transaction Password</Typography>
                        <Box sx={{ borderRadius: "px", flex: 2.25, height: "45px", display: "flex", alignItems: "center", borderRadius: "5px", border: "2px solid #26262633", paddingX: "10px" }}>
                            <TextField onChange={e => {

                            }}
                                sx={{ width: "100%", height: "45px" }}
                                variant="standard" InputProps={{
                                    placeholder: "Donotopen|",
                                    disableUnderline: true,
                                    type: !showPass ? "password" : "text",
                                    style: { fontSize: "13px", height: "45px", fontWeight: "600" }
                                }} />
                            <Box onClick={() => {
                                setShowPass(!showPass)
                            }}>
                                <StyledImage src={showPass ? EyeIcon : EyeSlash} sx={{height:"14px",width:"20px"}} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginY: "30px" }}>
                        <BoxButton title={"Submit"} />
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

const LabelAndValue = ({ label, value, containerStyle, icon, ticon, labelStyle, valueStyle }) => {
    return (
        <Box display={"flex"} sx={[{ background: "#F8C851", height: "45px", border: "2px solid #0B4F2626", px: "10px", borderRadius: "5px", alignItems: "center", justifyContent: "space-between" }, containerStyle]}>
            <Box sx={{ flexDirection: "column" }}>
                {Boolean(label) && <Typography sx={[{ fontSize: "10px", color: "#303030" }, labelStyle]}>{label}</Typography>}
                <Typography sx={[{ fontWeight: "600", fontSize: "15px" }, valueStyle]}>{value}{ticon}</Typography>
            </Box>
            {icon}
        </Box>
    )
}

const BoxButton = ({ title, containerStyle, icon, onClick }) => {
    return (
        <Box onClick={onClick} sx={[{ background: "#0B4F26", display: "flex", justifyContent: "center", height: "45px", alignItems: "center", borderRadius: "5px", width: "34%" }, containerStyle]}>
            <Typography color="white" sx={{ fontSize: "14px" }}>{title}{icon}</Typography>
        </Box>
    )
}