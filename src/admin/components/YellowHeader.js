import { Box, Typography } from "@mui/material"
import Calendar from "./Calendar";
import CustomButton from "./CustomButton";
import DropDownCustom from "./DropdownCustom";
import DropDownSimple from "./DropdownSimple";
import SearchInput from "./SearchInput";

const YellowHeader = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', paddingBottom: '1vh' }}>
            <Typography sx={{ fontSize: '18px', color: 'white', marginLeft: '10px', fontWeight: '600', marginY: '10px', alignSelf: 'start' }} >Account Statement</Typography>

            <Box sx={{ display: 'flex', borderRadius: '5px', flexDirection: 'column', width: '99%', height: '160px', background: '#F8C851', alignSelf: 'center', justifyContent: 'space-evenly' }}>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                    <DropDownCustom title={'Account Type'} data={[

                        {
                            title: "Balance Report",
                            values: ["All", "Upper Level", "Down Level"]
                        },
                        {
                            title: "Game Report",
                            values: ["All", "Cricket", "Football", "Tennis"]
                        }


                    ]} />
                    <DropDownSimple title={'Game Name'} data={["All", "Cricket", "Football", "Tennis"]} />
                    <SearchInput data={[
                        "john doe",
                        "lisa",
                        "lendy",
                        "senty"
                    ]} title={'Search By Client Name'} />
                    <Calendar title={'From'} />
                    <Calendar title={'To'} />



                </Box>
                <CustomButton />
            </Box>

        </Box>
    )
}
export default YellowHeader;