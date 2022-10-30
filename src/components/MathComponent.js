// https://www.sciencekids.co.nz/images/pictures/flags680/India.jpg
// https://www.sciencekids.co.nz/images/pictures/flags680/Pakistan.jpg
import { TextField, Typography, useTheme, useMediaQuery, Divider } from "@mui/material"
import { Box } from "@mui/system"

const MatchComponent = ({ }) => {

    return (
        <Box sx={[{ width: { tablet: "55%", mobile: "96%", laptop: '100%' }, display: 'flex', flexDirection: 'column', marginX: { laptop: '0vw', mobile: '0px', tablet: '0px' }, marginY: { laptop: "1vh", mobile: '.7vh' }, padding: '2px', borderRadius: '2px', background: 'white', alignSelf: { mobile: 'center', tablet: 'center', laptop: "flex-start" } }]}>
            <Typography sx={{ fontSize: { mobile: '9px', tablet: '10px', laptop: '12px' }, marginLeft: '1vw', flexDirection: 'row' }} >World T20 <span style={{ color: 'grey' }} >Sunday 23 OCT, 1:30 pm</span></Typography>
            <Box sx={{ display: 'flex', paddingBottom: '1vh', flexDirection: 'column', flex: 1, justifyContent: 'flex-end', borderBottom: '0px solid', borderColor: 'gray' }} >
                <Box sx={{ display: 'flex' }} >
                    <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column' }} >
                        <img style={{ width: '50px', height: '35px', "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src="https://www.sciencekids.co.nz/images/pictures/flags680/India.jpg" />
                        <Typography sx={{ fontSize: { mobile: '8px', table: '10px', laptop: '12px' }, marginTop: '1vh', fontWeight: '600' }}  >India</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flex: .2, alignItems: 'center', flexDirection: 'column', display: 'flex', marginTop: '1vh' }} >
                        <Typography sx={{ fontSize: { mobile: '8px', tablet: '8px', laptop: '10px' }, marginTop: '5vh', color: 'gray', fontWeight: '600' }}  >V/S</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column' }} >
                        <img style={{ width: '50px', height: '35px', "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src="https://www.sciencekids.co.nz/images/pictures/flags680/Pakistan.jpg" />
                        <Typography sx={{ fontSize: { mobile: '8px', table: '10px', laptop: '12px' }, marginTop: '1vh', fontWeight: '600' }}  >Pakistan</Typography>
                    </Box>

                </Box>
                <Typography sx={{ fontSize: { mobile: '8px', tablet: '8px', laptop: '10px' }, alignSelf: 'center', marginTop: '1vh', color: 'gray', fontWeight: '600' }}  >Super 12 .T20 16 of 45</Typography>

            </Box>
            <Box sx={{ width: '100%', background: 'rgba(211,211,211)', height: '1px' }} ></Box>


            <Typography sx={{ textAlign: 'center', fontWeight: '700', fontSize: '10px', paddingY: '1vh' }} >WIN PROBABILITY</Typography>

        </Box >
    )
}

export default MatchComponent