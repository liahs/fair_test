import { TextField, Typography ,useTheme ,useMediaQuery} from "@mui/material"
import { Box } from "@mui/system"

const Input = ({ title, containerStyle, titleStyle, inputContainerStyle,img }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('tablet'));

    return (
        <Box sx={[{ width: "100%" }, containerStyle]}>
            <Typography variant="inputHeader" sx={[{ marginLeft: "10px", fontSize: { laptop: "13px", mobile: "12px" } }, titleStyle]}>{title}</Typography>
            <Box sx={[{ backgroundColor: "white", display: "flex", alignItems: "center", height: { laptop: "50px", mobile: "45px" }, overflow: "hidden", paddingX: "10px", marginTop: "5px", borderRadius: "35px" }, inputContainerStyle]}>
                <TextField variant="standard" InputProps={{
                    disableUnderline: true,
                }} sx={{ borderColor: "white",display:"flex",flex:1, fontSize: { laptop: "14px", mobile: "13px" } }} />
                <img src={img} alt="side input" style={{height:matches?"0.6em":"0.7rem",width:"auto",marginRight:"1em"}} />
            </Box>
        </Box>
    )
}

export default Input