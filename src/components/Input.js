import { TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"

const Input = ({ title, containerStyle, titleStyle, inputContainerStyle ,}) => {
    return (
        <Box sx={[{ width: "100%" }, containerStyle]}>
            <Typography variant="inputHeader" sx={[{ marginLeft: "10px", fontSize: { laptop: "13px", mobile: "12px" } }, titleStyle]}>{title}</Typography>
            <Box sx={[{ backgroundColor: "white",display:"flex",alignItems:"center", width: "100%", height: { laptop: "50px", mobile: "45px" }, overflow: "hidden",paddingX:"10px", marginTop: "5px", borderRadius: "35px" }, inputContainerStyle]}>
                <TextField variant="standard" InputProps={{
                    disableUnderline: true,
                }} sx={{width: "100%", borderColor: "white",fontSize:{laptop:"14px",mobile:"13px"} }} />
            </Box>
        </Box>
    )
}

export default Input