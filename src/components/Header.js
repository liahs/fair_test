import { TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"

const CustomHeader = ({ }) => {
    return (
        <Box sx={[{ width: "100%", height: { laptop: 90, tablet: 80, mobile: 60 } }, (theme) => ({
            backgroundImage: `${theme.palette.primary.headerGradient}`
        })]}>

        </Box>
    )
}

export default CustomHeader;