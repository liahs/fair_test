import { Typography, Box, useMediaQuery, useTheme, Menu, MenuItem, Drawer,AppBar ,Toolbar  } from "@mui/material";
import { useEffect, useState } from "react";
import { ArrowDown, Draw, logo, Logout, Money, MoneyBag } from "../assets";
import SearchInput from "./SearchInput";
import SideBar from "./SideBar";
import StyledImage from "./StyledImage";

const CustomHeader = ({ }) => {
    const theme = useTheme()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (!matchesMobile) {
            setMobileOpen(false)
        }
    }, [matchesMobile])

    return (
        <>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Box sx={[{
                width: "100%", minHeight: { laptop: 90, tablet: 80, mobile: 60 },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingX: { laptop: "10%", mobile: "5%" }
            }, (theme) => ({
                backgroundImage: `${theme.palette.primary.headerGradient}`
            })]}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StyledImage onClick={() => {
                        if (matchesMobile) {
                            setMobileOpen(!mobileOpen)
                        }

                    }} src={Draw} sx={{ height: { laptop: "24px", mobile: "20px" }, width: "auto" }} />
                    <StyledImage src={logo} sx={{ height: { laptop: "45px", mobile: "40px" }, width: "auto", marginLeft: "20px" }} />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}>
                    {!matchesMobile &&
                        <><SearchInput placeholder={"Search Events..."} />
                            <BoxMoney title="Exposure" value="$100" image={MoneyBag} />
                            <BoxMoney title="Balance" value="$25.0" image={Money} />
                        </>}
                    <BoxProfile image={"https://miro.medium.com/max/2800/1*w96ZU0M9GOAGU_hVXvdH8g.jpeg"} value={"John Doe"} />
                </Box>
            </Box>
            <Box sx={{ height: "32px", display: "flex", background: "#202020", alignItems: "center" }}>
                <marquee><Typography sx={{ color: "text.white", fontSize: "10px", fontStyle: "italic", letterSpacing: "1px", overflow: "hidden", whiteSpace: "nowrap", "text-overflow:": "ellipsis" }}>This is a demo notification highlight. This is a demo notification highlight.This is a demo notification highlight. This is a demo notification highlight.This is a demo notification highlight. This is a demo notification highlight.This is a demo notification highlight.</Typography></marquee>
            </Box>
            {matchesMobile && <MobileSideBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />}
          
        </AppBar>
          <Box sx={{ minHeight: { laptop: 90+32, tablet: 80+32, mobile: 60+32 } }} />
        </>
    )
}



const BoxMoney = ({ image, title, value }) => {
    return (
        <Box sx={[{ backgroundColor: "white", minWidth: "120px", marginLeft: "1vw", display: "flex", alignItems: "center", boxShadow: "0px 3px 10px #B7B7B726", height: { laptop: "35px", mobile: "35px" }, overflow: "hidden", paddingX: "3px", borderRadius: "40px" }]}>
            <Box sx={{ height: "30px", width: "35px", borderRadius: "25px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#FEFEFE", boxShadow: "0px 0px 5px #00000026" }}>
                <StyledImage src={image} sx={{ height: "50%", width: "auto" }} />
            </Box>
            <Box style={{ marginLeft: "10px" }}>
                <Typography sx={{ fontSize: "8px", fontWeight: "600" }}>{title}</Typography>
                <Typography sx={{ fontWeight: "bold", color: "#27AC1E" }}>{value}</Typography>
            </Box>
        </Box>
    )
}

const BoxProfile = ({ image, value }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    useEffect(() => {
        console.log(anchorEl)
    }, [anchorEl])
    const handleClose = () => {
        setAnchorEl(0);
    };
    return (
        <>
            <Box onClick={(event) => handleClick(event)} sx={[{ backgroundColor: "primary.main", minWidth: "120px", marginLeft: "1vw", display: "flex", alignItems: "center", boxShadow: "0px 3px 10px #B7B7B726", height: { laptop: "35px", mobile: "35px" }, overflow: "hidden", paddingX: "2px", borderRadius: "35px" }]}>
                <StyledImage src={image} sx={{ height: { laptop: "30px", mobile: '30px' }, width: { laptop: "30px", mobile: '30px' }, borderRadius: "150px", backgroundColor: "red" }} />
                <Box style={{ marginLeft: "10px" }}>
                    <Typography sx={{ fontSize: "11px", color: "text.white", fontWeight: "600" }}>{value}</Typography>
                </Box>
                <StyledImage src={ArrowDown} sx={{ height: "6px", width: "10px", marginLeft: "10px", marginRight: "5px" }} />
            </Box>
            <DropdownMenu open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={handleClose} />

        </>
    )
}

const menutItems = [{ title: "Account Statement" }, { title: "Profile Loss Report" }, { title: "Bet History" }, { title: "Unsetteled Bet" }, { title: "Casino Report History" }, { title: "Set Button Values" }, { title: "Security Auth Verfication" }, { title: "Change Password" }]
const DropdownMenu = ({ anchorEl, open, handleClose }) => {
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {menutItems.map(x => <MenuItem dense={true} sx={{

                fontSize: { laptop: "12px", mobile: "10px" },
                fontWeight: "500",
                marginX: "5px",
                width: { laptop: "200px", mobile: "200px" },
                borderBottomWidth: 1,
                borderColor: "#EAEFEC",
                paddingY: "2px",
                borderStyle: "solid",
                "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                    borderColor: "white",
                    borderRadius: "5px",
                    transform: "scale(1.02)"
                }
            }} onClick={handleClose}>{x.title}</MenuItem>)}
            <Box sx={{ borderRadius: "5px", height: { laptop: "38px", mobile: "34px" }, width: "200px", marginLeft: "5px", marginTop: "10px", backgroundColor: "#F1C550", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <StyledImage src={Logout} sx={{ width: "35%", height: "auto" }} />
            </Box>
        </Menu>
    )
}

const MobileSideBar = ({ mobileOpen, setMobileOpen }) => {

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "260px" },
            }}
        >
             <Box sx={{ minHeight: { laptop: 90+32, tablet: 80+32, mobile: 60+32 } }} />
            <Box sx={{ height: "100vh", background: "red" }}>
                <SideBar mobileShow={true} />
            </Box>
        </Drawer>
    )
}

export default CustomHeader;