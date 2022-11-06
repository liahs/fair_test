import { Box, FormControl, InputLabel, TextField, makeStyles, MenuItem, Select, SliderValueLabel, Typography, } from "@mui/material";
import { useState } from "react";
import { ARROWDROPDOWN } from "../assets";
const SearchInput = ({ handleChange, title, data }) => {
    const [value, setValue] = useState(10)
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")

    const Item = ({ item }) => {
        return (
            <>
                <Typography
                    onClick={() => {
                        setSearch(item)
                        setOpen(false)
                    }} sx={{ paddingY: '4px', paddingLeft: '20px', fontSize: '10px', fontWeight: '500', color: 'black' }}>{item}</Typography>
            </>
        )
    }
    const Block = ({ i }) => {
        return (
            <Item item={i} />
        )
    }
    return (
        <Box sx={{ width: '19%' }} >
            <Typography sx={{ fontSize: '14px', fontWeight: '600', marginLeft: '7px', marginY: '.3vh' }}>{title}</Typography>
            <Box onClick={() => {
                setOpen(!open)
            }} sx={{ width: '100%', height: '35px', justifyContent: "space-between", alignItems: 'center', display: 'flex', background: 'white', borderRadius: '3px', border: '2px solid #DEDEDE', paddingX: '7px' }}>
                <TextField
                    variant="standard"
                    placeholder={"Search"}
                    value={search}
                    onChange={(e) => {
                        console.log(e, 'ss')
                        setSearch(e.target?.value)
                        setOpen(true)
                    }}
                    InputProps={{
                        disableUnderline: true,
                        style: { fontSize: "11px", fontWeight: "500" }
                    }}
                    sx={{ borderColor: "white", display: "flex", flex: 1, fontSize: { laptop: "10px", mobile: "8px" } }} />
                <img src={ARROWDROPDOWN} style={{ width: '11px', height: '6px', transform: open ? 'rotate(0deg)' : 'rotate(180deg)' }} />
            </Box>
            {search && search.length > 0 && open && <Box

                sx={{ display: 'flex', flexDirection: 'column', background: 'white', width: '18.7%', alignSelf: 'center', marginX: '5px', borderRadius: '2px', marginTop: '2px', position: 'absolute', borderRadius: '3px', border: '2px solid #DEDEDE', zIndex: 9999 }} >
                {data.filter(k => k.includes(search)).map((i) => {
                    return (
                        <Block i={i} />
                    )
                })}
            </Box>}
        </Box>
    )
}
export default SearchInput;