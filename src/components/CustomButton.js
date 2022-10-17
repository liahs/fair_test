import { Button } from "@mui/material";

export default function CustomButton({ onClick, title, buttonStyle }) {
    return (
        <Button onClick={onClick} variant="contained" color="secondary" sx={[buttonStyle, { width: "62%", borderRadius: "50px", fontWeight: "bold", textTransform: "none", fontSize: { laptop: "15px", mobile: "13px" } }]} >
            {title}
        </Button>
    )
}