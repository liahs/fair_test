import { Box, Modal, Typography } from "@mui/material"
import { BETPLACED, NOT } from "../assets";

const BetPlaced = ({ visible, setVisible, not }) => {
    return (
        <Modal
            onClose={() => setVisible(false)}
            sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', outline: 'none' }}
            open={visible}  >
            <Box sx={{ width: '250px', borderRadius: "4px", height: "200px", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'white', alignSelf: 'center', display: 'flex' }}>
                {not ? <img src={NOT} style={{ width: '50px', height: '50px' }} /> : <img src={BETPLACED} style={{ width: '50px', height: '50px' }} />}
                {
                    not ? <Typography sx={{ fontSize: '20px', fontWeight: '500', marginY: '.7vh', width: '70%', alignSelf: 'center', textAlign: 'center' }}>Bet Placed Successfully</Typography> :
                        <Typography sx={{ fontSize: '20px', fontWeight: '500', marginY: '.7vh', width: '70%', alignSelf: 'center', textAlign: 'center' }}>Bet Not Placed Successfully</Typography>

                }
                <Box onClick={() => {
                    setVisible(false)
                }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70%', height: '40px', background: 'black', borderRadius: '5px' }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: '500', color: 'white', alignSelf: 'center', textAlign: 'center' }}>OK</Typography>
                </Box>
            </Box>
        </Modal>
    )
}
export default BetPlaced;
