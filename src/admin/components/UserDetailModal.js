import { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../store/userdetail";
import StyledImage from "../../components/StyledImage";
import { CancelDark } from "../../assets";
import { DeleteIcon, LockIcon, UnLockIcon } from "../assets";
import { setDepoModalOpen } from "../store/depositModal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "35vw",
    overflow: "hidden",
    background: "white",
    border: '2px solid white',
    borderRadius: "10px",
};

export default function UserDetailModal({ }) {
    const isModalOpen = useSelector(state => state.userdetail)?.isModalOpen
    const dispatch = useDispatch()
    return (
        <Modal
            open={isModalOpen}
            onClose={() => dispatch(setModalOpen(false))}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus={true}
        >
            <Box sx={[style]}>
                <Box sx={[{ height: "45px", display: "flex", justifyContent: "space-between", alignItems: "center", px: "10px" }, (theme) => ({ backgroundImage: theme.palette.primary.headerGradient })]}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "text.white" }}>CHD91101012301</Typography>
                    <StyledImage alt="cross button" onClick={() => {
                        dispatch(setModalOpen(false))
                    }} src={CancelDark} sx={{ height: "22px", width: "22px" }} />
                </Box>
                <Box sx={{ background: "white" }}>
                    <Box sx={{ flexDirection: "row", display: "flex", background: "white", paddingTop: "3px", overflow: "hidden" }}>
                        <LabelAndValue containerStyle={{ width: "34%" }} label={"Main Balance"} value={"1,00,000,000,0"} />
                        <LabelAndValue containerStyle={{ width: "34%", marginX: "3px" }} label={"Credit Referance"} value={"1,00,000,000,0"} />
                        <LabelAndValue containerStyle={{ width: "34%" }} label={"Bet Lock"} value={"Locked"} icon={<StyledImage src={LockIcon} sx={{ height: "26px", width: "20px" }} />} />
                    </Box>
                    <Box sx={{ flexDirection: "row", display: "flex", background: "white", paddingTop: "3px", overflow: "hidden" }}>
                        <LabelAndValue containerStyle={{ width: "34%" }} label={"Available Balance"} value={"1,00,000,000,0"} />
                        <LabelAndValue containerStyle={{ width: "34%", marginX: "3px" }} label={"Exposure Limit"} value={"1,00,000,000,0"} />
                        <LabelAndValue containerStyle={{ width: "34%" }} label={"User Lock"} value={"Un Locked"} icon={<StyledImage src={UnLockIcon} sx={{ height: "26px", width: "20px" }} />} />
                    </Box>
                    <Box sx={{ flexDirection: "row", display: "flex", background: "white", paddingTop: "3px", overflow: "hidden" }}>
                        <LabelAndValue containerStyle={{ width: "33%" }} label={"Exposure"} value={"1,00,000,000,0"} />
                        <LabelAndValue labelStyle={{ color: "white" }} valueStyle={{ color: "white" }} ticon={<StyledImage src={"https://fontawesomeicons.com/images/svg/trending-up-sharp.svg"} sx={{ height: "20px", marginLeft: "5px", filter: "invert(.9) sepia(1) saturate(5) hue-rotate(175deg);", width: "20px" }} />} containerStyle={{ width: "33%", marginLeft: "3px", background: "#27AC1E", justifyContent: "flex-start" }} label={"Profit/Loss"} value={"4,02,205,1000"} />
                    </Box>
                    <Box sx={{ marginTop: "50px", display: "flex" }}>
                        <BoxButton onClick={()=>{
                            dispatch(setModalOpen(false))
                            setTimeout(()=>{
                                dispatch(setDepoModalOpen(true))
                            },500)
                           
                        }}  title={"Deposit"} labelStyle={{}} />
                        <BoxButton title={"Withdraw"} containerStyle={{ marginX: "3px" }} />
                        <BoxButton title={"Set Credit Limit"} labelStyle={{}} />
                    </Box>
                    <Box sx={{ marginTop: "3px", display: "flex" }}>
                        <BoxButton  title={"Change Password"} labelStyle={{}} />
                        <BoxButton title={"Lock/Unlock"} containerStyle={{ marginX: "3px" }} />
                        <BoxButton title={"Set Exposure Limit"} labelStyle={{}} />
                    </Box>
                    <Box sx={{ marginTop: "3px", display: "flex" ,justifyContent:"center",marginBottom:"20px"}}>
                        <BoxButton title={"Delete User"} icon={<StyledImage src={DeleteIcon} sx={{height:"18px",width:"17px",marginLeft:"5px"}} />} containerStyle={{background:"#E32A2A"}} />
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

const LabelAndValue = ({ label, value, containerStyle, icon, ticon, labelStyle, valueStyle }) => {
    return (
        <Box display={"flex"} sx={[{ background: "#F8C851", height: "45px", px: "10px", alignItems: "center", justifyContent: "space-between" }, containerStyle]}>
            <Box sx={{ flexDirection: "column" }}>
                <Typography sx={[{ fontSize: "10px" }, labelStyle]}>{label}</Typography>
                <Typography sx={[{ fontWeight: "600" }, valueStyle]}>{value}{ticon}</Typography>
            </Box>
            {icon}
        </Box>
    )
}

const BoxButton = ({ title, containerStyle,icon,onClick }) => {
    return (
        <Box onClick={onClick} sx={[{ background: "#0B4F26", display: "flex", justifyContent: "center", height: "45px", alignItems: "center", borderRadius: "5px", width: "34%" }, containerStyle]}>
            <Typography color="white" sx={{fontSize:"14px"}}>{title}{icon}</Typography>
        </Box>
    )
}