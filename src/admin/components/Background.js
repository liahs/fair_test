import { Box } from "@mui/material";
import Back from '../assets/back.png'
export default function Background({ children }) {
    return (
        <Box sx={{ minHeight:"100vh",width:"100vw", backgroundImage: `url(${Back})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 100vh" }}>
            {children}
        </Box>
    )
}