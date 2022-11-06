import { Typography, Box } from "@mui/material";


const CustomButton = () => {
    return (
        <Box sx={{ width: '200px', justifyContent: 'center', display: 'flex', alignItems: 'center', borderRadius: '10px', height: '40px', background: '#0B4F26', alignSelf: 'end', marginRight: '10px' }}>
            <Typography sx={{ fontSize: '16px', color: 'white', fontWeight: '600' }}>Load</Typography>
        </Box>
    )
}
export default CustomButton;