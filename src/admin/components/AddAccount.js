import { Box,Typography } from "@mui/material"

const AddAccount=()=>{
    return(
        <Box sx={{marginY:"20px",marginX:"10%"}}>
            <Typography sx={{color:"white",fontSize:"18px",fontWeight:"600"}}>Add Account</Typography>
            <Box sx={{background:"#F8C851",minHeight:"60vh",borderRadius:"5px",padding:"20px",marginTop:"20px",display:"flex"}}>
                <Box></Box>
            </Box>
        </Box>
    )
}

export default AddAccount