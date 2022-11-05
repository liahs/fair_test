import { Box } from "@mui/material";
import Back from '../assets/back.png'
export default function Background({ children }) {
    return (
        <Box sx={{ minHeight:"100vh",width:"100%", backgroundImage: `url(${Back})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
            {children}
        </Box>
    )
}