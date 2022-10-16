// https://www.sciencekids.co.nz/images/pictures/flags680/India.jpg
// https://www.sciencekids.co.nz/images/pictures/flags680/Pakistan.jpg
import { TextField, Typography, useTheme, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"

const MatchComponent = ({ }) => {

    return (
        <Box sx={[{ width: { table: "55%", mobile: "80%", laptop: '55%' }, display: 'flex', flexDirection: 'column', marginX: { laptop: '1vw', mobile: '0px', tablet: '0px' }, marginY: '1vh', height: '18%', minHeight: '100px', background: 'white', alignSelf: { mobile: 'center', tablet: 'center', laptop: "flex-start" } }]}>
            <Typography sx={{ fontSize: { mobile: '10px', table: '12px', laptop: '15px' }, marginLeft: '1vw', flexDirection: 'row' }} >World T20 <span style={{ color: 'grey' }} >Sunday 23 OCT, 1:30 pm</span></Typography>
            <Box sx={{ display: 'flex', paddingBottom: '1vh', flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }} >
                <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column' }} >
                    <img style={{ width: '50px', height: '35px' }} src="https://www.sciencekids.co.nz/images/pictures/flags680/India.jpg" />
                    <Typography sx={{ fontSize: { mobile: '8px', table: '10px', laptop: '12px' }, marginTop: '1vh', fontWeight: '600' }}  >India</Typography>
                </Box>
                <Box sx={{ display: 'flex', flex: .2, alignItems: 'flex-end' }} >
                    <Typography sx={{ fontSize: { mobile: '6px', table: '8px', laptop: '10px' }, marginTop: '1vh', color: 'grey', fontWeight: '600' }}  >V/S</Typography>

                </Box>
                <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column' }} >
                    <img style={{ width: '50px', height: '35px', "boxShadow": "1px 1px #000000" }} src="https://www.sciencekids.co.nz/images/pictures/flags680/Pakistan.jpg" />
                    <Typography sx={{ fontSize: { mobile: '8px', table: '10px', laptop: '12px' }, marginTop: '1vh', fontWeight: '600' }}  >Pakistan</Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default MatchComponent