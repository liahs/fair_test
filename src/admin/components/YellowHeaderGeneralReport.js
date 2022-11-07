import { Box, Typography } from "@mui/material"
import Calendar from "./Calendar";
import CustomButton from "./CustomButton";
import DropDownCustom from "./DropdownCustom";
import DropDownSimple from "./DropdownSimple";
import SearchInput from "./SearchInput";

const YellowHeaderGeneralReport = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', paddingBottom: '1vh', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 0 }}>
            <Typography sx={{ fontSize: '18px', color: 'white', marginLeft: '10px', fontWeight: '600', marginY: '10px', alignSelf: 'start' }} >General Report</Typography>

            <Box sx={{ display: 'flex', borderRadius: '5px', flexDirection: 'column', width: '99%', height: '100px', background: '#F8C851', alignSelf: 'center', justifyContent: 'space-evenly' }}>
                <Box sx={{ display: 'flex', width: '100%' }}>
                    <Box sx={{ width: '10px' }} ></Box>

                    <DropDownSimple title={'Select Type'} data={["General Report", "Credit Refrance Report"]} />
                    <Box sx={{ width: '30px' }} ></Box>
                    <CustomButton />

                </Box>
            </Box>

        </Box>
    )
}
export default YellowHeaderGeneralReport;