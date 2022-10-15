import { Button } from "@mui/material";

export default function CustomButton({ onClick, title, buttonStyle }) {
    return (
        <Button  variant="contained" color="secondary" sx={[buttonStyle, { width: "50%", borderRadius: "50px",fontWeight:"bold",textTransform:"none", fontSize:{laptop:"15px",mobile:"13px"} }]} >
            {title}
        </Button>
    )
}