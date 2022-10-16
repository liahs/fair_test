import { TextField, Typography, useTheme, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";

const Input = ({ title, containerStyle, titleStyle, inputContainerStyle, img, inputProps }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('tablet'));
    const [showPass, setShowPass] = useState(true)

    return (
        <Box sx={[{ width: "100%" }, containerStyle]}>
            <Typography variant="inputHeader" sx={[{ marginLeft: "10px", fontSize: { laptop: "13px", mobile: "12px" } }, titleStyle]}>{title}</Typography>
            <Box sx={[{ backgroundColor: "white", display: "flex", alignItems: "center", height: { laptop: "50px", mobile: "45px" }, overflow: "hidden", paddingX: "10px", marginTop: "5px", borderRadius: "35px" }, inputContainerStyle]}>
                <TextField variant="standard" InputProps={{
                    disableUnderline: true,
                    ...inputProps,
                    type: showPass && title == "Password" ? "password" : "text"
                }} sx={{ borderColor: "white", display: "flex", flex: 1, fontSize: { laptop: "14px", mobile: "13px" } }} />
                <img src={img} onClick={() => {
                    setShowPass(!showPass)
                }} alt="side input" style={{ height: matches ? "0.6em" : "0.7rem", width: "auto", marginRight: "1em" }} />
            </Box>
        </Box>
    )
}

export default Input