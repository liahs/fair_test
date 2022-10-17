import { Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CANCEL } from "../assets";

const PlaceBet = ({ open, handleClose }) => {

    const SetBet = () => {
        return (
            <Box sx={{ minWidth: "10%", background: "#F1C550" }}>
                <Box sx={{ height: "35px", display: "flex", alignItems: "center", px: "10px" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>Place Bet</Typography>
                </Box>
                <RowComponent header={true} data={["Matched Bet", "Odds", "Stake", "Profit"]} />
                <RowComponent header={false} data={["INDIA", "90.00", "100.00", "00.00"]} />
                <div style={{ height: "1px", background: "#fafafa" }} />
                <RowComponent header={false} data={["PAKISTAN", "90.00", "100.00", "00.00"]} />
            </Box>
        )
    }

    const RowComponent = ({ data, containerStyle, header }) => {
        return (
            <Box sx={[{ height: "20px", backgroundColor: header ? "#319E5B" : "#FFFFFF", height: header ? "20px" : "30px", flexDirection: "row", display: "flex" }, containerStyle]}>
                {data?.map((x, i) => <Box sx={{ flex: i == 0 ? 6 : 3, px: i == 0 ? "10px" : "0px", marginLeft: i != 0 ? "2px" : 0, display: "flex", alignItems: "center", background: i != 0 ? (header ? "black" : "#F1F1F1") : "transparent", justifyContent: i != 0 ? "center" : "flex-start" }}>
                    {!header && i == 0 && <img style={{ width: '15px', height: '15px', marginRight: '5px' }} src={CANCEL} />}
                    {(i !== 1 || header) && < Typography sx={{ fontSize: { laptop: header ? "10px" : "12px", mobile: header ? "8px" : "10px" }, fontWeight: header ? "normal" : "600", color: header ? "text.white" : "text" }}>{x}</Typography>}
                    {(i == 1 && !header) &&
                        <TextField

                            inputProps={{
                                disableUnderline: true,
                                style: {
                                    fontSize: '10px',
                                    fontWeight: "600",
                                    height: '100%',

                                },

                            }}
                            fo
                            type={'number'} defaultValue={x} variant="standard" sx={{ height: '30px', fontSize: '1px' }} />
                    }

                </Box>)
                }
            </Box >
        )
    }
    const CustomButton = ({ color, title, onClick }) => {
        return (
            <Box onClick={onClick} sx={{ width: '130px', height: "35px", borderRadius: '15px', alignItems: 'center', justifyContent: 'center', background: color, display: 'flex' }}>
                <Typography sx={{ color: 'white', fontWeight: '500', fontSize: '13px' }} >{title}</Typography>
            </Box>
        )
    }
    return (
        <Modal open={open}
            onClose={handleClose}
        >
            <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,.1)', alignSelf: 'center' }} >
                <Box sx={{ width: '300px', background: 'white', }} >
                    <SetBet />
                    <Box sx={{ display: 'flex', flex: 1, paddingY: '2vh', justifyContent: 'space-evenly' }}>
                        <CustomButton onClick={handleClose} title={'Reset'} color={'red'} />
                        <CustomButton onClick={handleClose} title={'Submit'} color={'green'} />

                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}
export default PlaceBet;