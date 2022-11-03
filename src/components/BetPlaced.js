import { Box, Modal, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { BETPLACED, NOT } from "../assets";
import CountDownTimer from "./CountDownTimer";

const BetPlaced = ({ visible, setVisible, not }) => {
    const [flag, setFlag] = useState(false)
    const [timer, settimer] = useState(true)

    useEffect(() => {
        if (visible) {
            setTimeout(() => {
                setFlag(true)
            }, 5000);
        }
        else {
            setFlag(false)
        }
    }, [visible])
    if (!flag && visible) {
        return <CountDownTimer visible={true} setVisible={setFlag} />

    }
    return (
        <Modal
            disableAutoFocus={true}
            onClose={() => setVisible(false)}
            sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', outline: 'none' }}
            open={visible}
            disableAutoFocus={true}
        >

            <Box sx={{ width: '190px', borderRadius: "6px", paddingY: "10px", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'white', alignSelf: 'center', display: 'flex', position: 'absolute', top: '45%', zIndex: 999 }}>
                {not ? <img src={NOT} style={{ width: '60px', height: '60px', marginTop: '3px' }} /> : <img src={BETPLACED} style={{ width: '65px', height: '60px', marginTop: '3px' }} />}
                {
                    !not ? <Typography sx={{ fontSize: '20px', fontWeight: '500', marginY: '.7vh', width: '70%', alignSelf: 'center', textAlign: 'center' }}>Bet Placed Successfully</Typography> :
                        <Typography sx={{ fontSize: '20px', fontWeight: '500', marginY: '.7vh', width: '80%', alignSelf: 'center', textAlign: 'center' }}>Bet Not Placed Successfully</Typography>

                }
            </Box>
        </Modal>
    )
}
export default BetPlaced;
