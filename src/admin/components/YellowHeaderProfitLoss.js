import { Box, Typography } from "@mui/material"
import Calendar from "./Calendar";
import CustomButton from "./CustomButton";
import DropDownCustom from "./DropdownCustom";
import DropDownSimple from "./DropdownSimple";
import SearchInput from "./SearchInput";

const YellowHeaderProfitLoss = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', paddingBottom: '1vh' }}>
            <Typography sx={{ fontSize: '18px', color: 'white', marginLeft: '10px', fontWeight: '600', marginY: '10px', alignSelf: 'start' }} >Profit/Loss</Typography>

            <Box sx={{ display: 'flex', borderRadius: '5px', flexDirection: 'column', width: '99%', paddingY: '3vh', background: '#F8C851', alignSelf: 'center', justifyContent: 'space-evenly' }}>
                <Box sx={{ display: 'flex', width: '100%', }}>
                    <Box sx={{ width: '10px' }} ></Box>
                    <SearchInput data={[
                        "john doe",
                        "lisa",
                        "lendy",
                        "senty"
                    ]} title={'Search By Client Name'} />
                    <Box sx={{ width: '10px' }} ></Box>

                    <Calendar title={'From'} />
                    <Box sx={{ width: '10px' }} ></Box>

                    <Calendar title={'To'} />
                    <Box sx={{ width: '10px' }} ></Box>

                    <CustomButton />
                </Box>
            </Box>

        </Box>
    )
}
export default YellowHeaderProfitLoss;