import { TextField, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { Search } from "../assets";
import StyledImage from "./StyledImage";

const SearchInput = ({ placeholder, inputContainerStyle }) => {
    const theme = useTheme();
    return (
        <Box sx={[{ backgroundColor: "white", minWidth: "20vw", display: "flex", alignItems: "center", boxShadow: "0px 3px 10px #B7B7B726", height: { laptop: "35px", mobile: "30px" }, overflow: "hidden", paddingX: "5px", borderRadius: "35px" }, inputContainerStyle]}>
            <TextField variant="standard"
                placeholder={placeholder}
                InputProps={{
                    disableUnderline: true,
                    style: { fontSize: "12px", fontWeight: "600", fontStyle: "italic" }
                }}

                sx={{ borderColor: "white", display: "flex", flex: 1, marginLeft: "5px", fontSize: { laptop: "10px", mobile: "8px" } }} />
            <Box sx={{ height: "30px", width: "30px", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "primary.main", marginRight: -.3 }}>
                <StyledImage src={Search} sx={{ height: "40%", width: "auto" }} />
            </Box>
        </Box>
    )
}

export default SearchInput