import { isWidthUp } from "@material-ui/core"
import { Box, Typography } from "@mui/material"
import { defineLocale } from "moment/moment"
import { useNavigate } from "react-router-dom"

const Account = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', marginY: "20px", marginX: "0.5%" }}>
            <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "600" }}>Account List</Typography>
            <Box onClick={() => {
                navigate('/admin/add_account')
            }} sx={{ background: "#F8C851", borderRadius: "5px", height: "35px", display: "flex", width: "150px", justifyContent: "center", alignItems: "center", paddingX: "5px" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>Add Account</Typography>
            </Box>
        </Box>
    )
}

export default Account

