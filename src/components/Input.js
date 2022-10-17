import { TextField, Typography, useTheme, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";

const Input = ({ title, containerStyle, placeholder, titleStyle, inputContainerStyle, img, inputProps }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('tablet'));
    const [showPass, setShowPass] = useState(true)

    return (
        <Box sx={[{}, containerStyle]}>
            <Typography variant="inputHeader" sx={[{ marginLeft: "10px", fontSize: { laptop: "10px", mobile: "8px" }, fontWeight: '500' }, titleStyle]}>{title}</Typography>
            <Box sx={[{ backgroundColor: "white", display: "flex", alignItems: "center", height: { laptop: "45px", mobile: "40px" }, overflow: "hidden", paddingX: "10px", marginTop: "1px", borderRadius: "35px" }, inputContainerStyle]}>
                <TextField variant="standard"
                    placeholder={placeholder}
                    InputProps={{
                        disableUnderline: true,
                        ...inputProps,
                        justifyContent: 'center',
                        type: showPass && title == "Password" ? "password" : "text",
                        sx: { fontSize: { laptop: '14px', mobile: '12px' } }
                    }} sx={{ borderColor: "white", display: "flex", flex: 1, fontSize: { laptop: "1px", mobile: "5px" } }} />
                <img src={img} onClick={() => {
                    setShowPass(!showPass)
                }} alt="side input" style={{ height: matches ? "0.5em" : "0.6rem", width: "auto", marginRight: ".5em" }} />
            </Box>
        </Box>
    )
}

export default Input