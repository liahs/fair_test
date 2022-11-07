import { Box, Typography, Modal, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import StyledImage from "../../components/StyledImage";
import { CancelDark } from "../../assets";
import { EyeIcon, EyeSlash } from "../assets";
import { useState } from "react";
import { setWithdrawModalOpen } from "../store/withdrawModal";
import { setCmModalOpen } from "../store/changePasswordModal";
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

export default function ChangePasswordModal({ }) {
    const isModalOpen = useSelector(state => state.changePasswordModal)?.isModalOpen
    const dispatch = useDispatch()
    const [showPass, setShowPass] = useState(false)
    const [showPass1, setShowPass1] = useState(false)
    const [showPass2, setShowPass2] = useState(false)

    return (
        <Modal
            open={isModalOpen}
            onClose={() => dispatch(setCmModalOpen(false))}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus={true}
        >
            <Box sx={[style]}>
                <Box sx={[{ height: "45px", display: "flex", justifyContent: "space-between", alignItems: "center", px: "10px", borderRadius: "10px" }, (theme) => ({ backgroundImage: theme.palette.primary.headerGradient })]}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "text.white" }}>Change Password</Typography>
                    <StyledImage alt="cross button" onClick={() => {
                        dispatch(setCmModalOpen(false))
                    }} src={CancelDark} sx={{ height: "22px", width: "22px" }} />
                </Box>
                <Box sx={{ background: "white", paddingX: "10px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px", "overflow": "hidden" }}>
                        <Typography sx={{ flex: 1, fontWeight: "600" }}>New Password</Typography>
                        <Box sx={{ borderRadius: "px", flex: 2, height: "45px", display: "flex", background: "#F8C851", alignItems: "center", borderRadius: "5px", border: "2px solid #26262633", paddingX: "10px" }}>
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
                                <StyledImage src={showPass ? EyeIcon : EyeSlash} sx={{ height: "14px", width: "20px" }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px", "overflow": "hidden" }}>
                        <Typography sx={{ flex: 1, fontWeight: "600" }}>Confirm Password</Typography>
                        <Box sx={{ borderRadius: "px", flex: 2, height: "45px", background: "#0B4F26", display: "flex", alignItems: "center", borderRadius: "5px", border: "2px solid #26262633", paddingX: "10px" }}>
                            <TextField onChange={e => {

                            }}
                                sx={{ width: "100%", height: "45px" }}
                                variant="standard" InputProps={{
                                    placeholder: "new password",
                                    disableUnderline: true,
                                    type: !showPass1 ? "password" : "text",
                                    style: { fontSize: "13px", height: "45px", fontWeight: "600", color: "white" }
                                }} />
                            <Box onClick={() => {
                                setShowPass1(!showPass1)
                            }}>
                                <StyledImage src={showPass1 ? EyeIcon : EyeSlash} sx={{ height: "14px", width: "20px" }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: "40px", "overflow": "hidden" }}>
                        <Typography sx={{ flex: 1, fontWeight: "600" }}>Transaction Password</Typography>
                        <Box sx={{ borderRadius: "px", flex: 2, height: "45px", display: "flex", alignItems: "center", borderRadius: "5px", border: "2px solid #26262633", paddingX: "10px" }}>
                            <TextField onChange={e => {

                            }}
                                sx={{ width: "100%", height: "45px" }}
                                variant="standard" InputProps={{
                                    placeholder: "confirm password",
                                    disableUnderline: true,
                                    type: !showPass2 ? "password" : "text",
                                    style: { fontSize: "13px", height: "45px", fontWeight: "600" }
                                }} />
                            <Box onClick={() => {
                                setShowPass2(!showPass2)
                            }}>
                                <StyledImage src={showPass2 ? EyeIcon : EyeSlash} sx={{ height: "14px", width: "20px" }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginY: "40px" }}>
                        <BoxButton containerStyle={{
                            marginRight:"10px",
                            background:"#FF4949",
                        }}  onClick={() => {
                            dispatch(setCmModalOpen(false))
                        }} title={"Reset"} />
                        <BoxButton onClick={() => {
                            dispatch(setCmModalOpen(false))
                        }} title={"Submit"} />
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