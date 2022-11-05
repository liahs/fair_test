import { Box } from "@mui/material";
import StyledImage from "../../components/StyledImage";
import { ArrowDown } from "../../assets";
export default function HomeSlide() {

    return (<Box sx={{ position: "relative" }}>
        <Box sx={{ background: "#FFE094", minHeight: "40px", borderBottomLeftRadius: "10px", width: "99%", marginX: "auto", borderBottomRightRadius: "10px" }}>

        </Box>
        <Box sx={{ background: "#ffe094" ,height:"50px",width:"50px",display:"flex",marginX:"auto",marginTop:"-25px",borderRadius:"25px"}}>
            <StyledImage  src={`url(${ArrowDown})`} />
        </Box>
    </Box>
    )
}