import { Typography, Box, useMediaQuery, useTheme, Menu, MenuItem, Drawer, AppBar, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowDown, Draw, logo, Logout, Money, MoneyBag, } from "../../assets";
import SearchInput from "../../components/SearchInput";
import SideBar from "../../components/SideBar";
import StyledImage from "../../components/StyledImage";
import { ARROWDROPDOWN, Down, DropDown } from "../assets";
import SideBarAdmin from "./SideBarAdmin";

const CustomHeader = ({ }) => {
    const theme = useTheme()
    const navigate = useNavigate()
    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    const [currentSelected, setCurrentSelected] = useState(0)
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchor, setAnchor] = React.useState(null)
    const location = useLocation();
    React.useEffect(() => {
        if (location.pathname.includes("market_analysis")) {
            setCurrentSelected(3)
        } else if (location.pathname.includes("list_of_clients")) {
            setCurrentSelected(0)
        } else if (location.pathname.includes("live_market")) {
            setCurrentSelected(1)
        } else if (location.pathname.includes("reports") || location.pathname.includes("account_statement") || location.pathname.includes("current_bet") || location.pathname.includes("general_report") || location.pathname.includes("game_report") || location.pathname.includes("profit_loss")) {
            setCurrentSelected(2)
        }
    }, [location])
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
                    flexDirection: matchesMobile ? "column" : "row",
                    alignItems: !matchesMobile ? "center" : "flex-start",
                    justifyContent: "space-between",
                    paddingX: { laptop: "0.5%", mobile: "1%" },
                    paddingY: matchesMobile ? "15px" : "0px",
                    paddingBottom: matchesMobile ? "10px" : "0px"
                }, (theme) => ({
                    backgroundImage: `${theme.palette.primary.headerGradient}`
                })]}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100%", flex: 1, }}>
                        <Box sx={{ display: "flex", alignItems: "center", marginRight: "12px" }}>
                            <StyledImage onClick={() => {
                                setMobileOpen(!mobileOpen)
                            }} src={Draw} sx={{ height: { laptop: "24px", mobile: "20px" }, width: "auto" }} />
                            <StyledImage src={logo} sx={{ height: { laptop: "45px", mobile: "40px" }, width: "auto", marginLeft: { laptop: "20px", mobile: "10px" } }} />
                        </Box>
                        <ButtonHead onClick={() => {
                            setCurrentSelected(0)
                            navigate('/admin/list_of_clients')
                        }} title={"LIST OF CLIENTS"} boxStyle={{ backgroundColor: currentSelected == 0 ? "white" : "transparent", py: "5px", borderRadius: "5px", marginLeft: "15px" }} titleStyle={{ color: currentSelected == 0 ? "green" : "white" }} />
                        <LiveMarket onClick={() => {
                            setCurrentSelected(1)
                            navigate('/admin/live_market')
                        }} title={"LIVE MARKET"} boxStyle={{ backgroundColor: currentSelected == 1 ? "white" : "transparent", py: "5px", borderRadius: "5px", marginLeft: "15px" }} />
                        <ButtonHead selected={currentSelected == 2} report={true} onClick={(e) => {
                            // setCurrentSelected(2)
                            setCurrentSelected(2)
                            // navigate('/admin/reports')
                            setAnchor(e.currentTarget)
                        }} title={"REPORTS"} boxStyle={{ backgroundColor: currentSelected == 2 ? "white" : "transparent", py: "5px", borderRadius: "5px", marginLeft: "15px" }} titleStyle={{ color: currentSelected == 2 ? "green" : "white" }} />
                        <ButtonHead onClick={() => {
                            setCurrentSelected(3)
                            navigate('/admin/market_analysis')
                        }} title={"MARKET ANALYSIS"} boxStyle={{ backgroundColor: currentSelected == 3 ? "white" : "transparent", py: "5px", borderRadius: "5px", marginLeft: "15px" }} titleStyle={{ color: currentSelected == 3 ? "green" : "white" }} />

                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", minWidth: matchesMobile ? "100%" : "0px", alignItems: "center", marginTop: matchesMobile ? "15px" : "0px" }}>
                        <SearchInput placeholder={"Search Clients..."} inputContainerStyle={{ height: "30px", minWidth: "4vw", width: "4vw" }} />
                        <BoxProfile containerStyle={matchesMobile ? { width: "52%" } : {}} image={"https://picsum.photos/200/300"} value={"Admin"} />
                    </Box>
                </Box>
                {<MobileSideBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />}
            </AppBar>
            <DropdownMenu1 open={Boolean(anchor)} anchorEl={anchor} handleClose={() => setAnchor(null)} />
            <Box sx={{ minHeight: { laptop: 90, mobile: 60 + 32 + 42 } }} />
        </>
    )
}
const ButtonHead = ({ title, boxStyle, titleStyle, onClick, report, selected }) => {
    return (
        <Box onClick={(e) => onClick(e)} sx={[{ paddingX: "12.5px", justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row' }, boxStyle]}>
            <Typography sx={[{ fontSize: "11px", fontWeight: "bold", fontFamily: "Montserrat" }, titleStyle]}>{title}</Typography>

            {
                selected && report && <img src={Down} style={{ width: '10px', height: '6px', marginLeft: '4px' }} />
            }
        </Box>
    )
}
const menutItems1 = [{ title: "Account Statement", link: "/admin/account_statement" }, { title: "Current Bet", link: "/admin/current_bet" }, { title: "General Report", link: "/admin/general_report" }, { title: "Game Report", link: "/admin/game_report" }, { title: "Profit/Loss", link: "/admin/profit_loss" }]
const DropdownMenu1 = ({ anchorEl, open, handleClose }) => {
    const navigate = useNavigate()
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ marginTop: '2px' }}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {menutItems1.map(x => <MenuItem dense={true} sx={{
                fontSize: { laptop: "12px", mobile: "10px" },
                fontWeight: "500",
                marginX: "0px",
                width: { laptop: "170px", mobile: "170px" },
                borderBottomWidth: 0,
                borderColor: "#EAEFEC",
                paddingY: "0px",
                borderStyle: "solid",
                "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                    borderColor: "white",
                    borderRadius: "5px",
                    transform: "scale(1.02)"
                }
            }} onClick={() => {
                navigate(x.link)
                handleClose()
            }}>{x.title}</MenuItem>)}
        </Menu>
    )
}
const LiveMarket = ({ title, boxStyle, titleStyle, onClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const colors = ["#ff0000", "#ffa500", "#ffff00", "orange", "#0000ff", "#4b0082", "#ee82ee"]
    useEffect(() => {
        let i = setInterval(() => {
            setCurrentIndex(state => {
                if (state < 6) {
                    return state + 1
                } else {
                    return 0
                }
            })

        }, 1000)
        return () => {
            clearInterval(i)
        }
    }, [])
    return (
        <Box onClick={e => {
            onClick()
        }} sx={[{ paddingX: "12.5px" }, boxStyle]}>
            <Typography sx={[{ fontSize: "11px", fontWeight: "bold", color: colors[currentIndex], fontFamily: "Montserrat" }, titleStyle]}>{title}</Typography>
        </Box>
    )
}
const BoxProfile = ({ image, value, containerStyle }) => {
    const theme = useTheme()

    const matchesMobile = useMediaQuery(theme.breakpoints.down("laptop"))

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', minWidth: { laptop: "120px", } }}>
            <Box onClick={(event) => {}} sx={[{ backgroundColor: "primary.main", minWidth: { laptop: "120px", mobile: "90px" }, marginLeft: "1vw", display: "flex", alignItems: "center", boxShadow: "0px 3px 10px #B7B7B726", justifyContent: "space-between", height: { laptop: "40px", mobile: "35px" }, overflow: "hidden", paddingX: "2px", borderRadius: "35px" }, containerStyle]}>
                <StyledImage src={image} sx={{ height: { laptop: "33px", mobile: '27px' }, width: { laptop: "33px", mobile: '27px' }, borderRadius: "150px" }} />
                <Box style={{}}>
                    <Typography sx={{ fontSize: { laptop: '11px', mobile: "8px" }, color: "text.white", fontWeight: "600" }}>{value}</Typography>
                </Box>
                <StyledImage src={ArrowDown} sx={{ height: "6px", width: "10px", marginRight: '5px' }} />
            </Box>
            <DropdownMenu open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={handleClose} />

        </Box>
    )
}
const menutItems = [{ title: "Account Statement" }, { title: "Profile Loss Report" }, { title: "Bet History" }, { title: "Unsetteled Bet" }, { title: "Casino Report History" }, { title: "Set Button Values" }, { title: "Security Auth Verfication" }, { title: "Change Password" }]
const DropdownMenu = ({ anchorEl, open, handleClose }) => {
    const navigate = useNavigate()
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            PaperProps={{ marginRight: "-15px" }}
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
            <Box onClick={() => {
                navigate("/")
                handleClose()
            }} sx={{ borderRadius: "5px", height: { laptop: "38px", mobile: "34px" }, width: "200px", marginLeft: "5px", marginTop: "10px", backgroundColor: "#F1C550", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "300px" },

            }}
        >
            <Box sx={{ minHeight: { laptop: 90, mobile: 60 + 32 } }} />
            <Box sx={{ height: "100vh" }}>
                <SideBarAdmin mobileShow={true} />
            </Box>
        </Drawer>
    )
}

export default CustomHeader;