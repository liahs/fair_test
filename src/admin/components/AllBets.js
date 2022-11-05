import { Box, Typography } from "@mui/material"
const data = [
    {
        values: [
            {
                name: "John Doe",
                color: "black",
                background: "#F1C550",

            },
            {
                name: "BOOKMAKER",
                color: "black",
                background: "#F1C550",

            },
            {
                name: "INDIA",
                color: "black",
                background: "#B3E0FF",

            },
            {
                name: "1000",
                color: "black",
                background: "#B3E0FF",
                small: true

            },
            {
                name: "Back",
                color: "black",
                background: "#B3E0FF",
                small: true
            },
            {
                name: "100,000,000",
                color: "black",
                background: "#B3E0FF",
            },
            {
                name: "10,000,000",
                color: "white",
                background: "#0B4F26",
            },
            {
                name: "03:23 AM",
                color: "black",
                background: "#B3E0FF",
                time: true,
                date: "02-11-2022"
            }
        ],

    },
    {
        values: [
            {
                name: "John Doe",
                color: "white",
                background: "#319E5B",

            },
            {
                name: "MATCH ODDS",
                color: "white",
                background: "#F1C550",

            },
            {
                name: "INDIA",
                color: "black",
                background: "#FF9292",

            },
            {
                name: "1000",
                color: "black",
                background: "#FF9292",
                small: true

            },
            {
                name: "LAY",
                color: "black",
                background: "#FF9292",
                small: true
            },
            {
                name: "100,000,000",
                color: "black",
                background: "#FF9292",
            },
            {
                name: "10,000,000",
                color: "white",
                background: "#0B4F26",
            },
            {
                name: "03:23 AM",
                color: "black",
                background: "#FF9292",
                time: true,
                date: "02-11-2022"
            }
        ],

    },
    {
        values: [
            {
                name: "John Doe",
                color: "white",
                background: "#303030",

            },
            {
                name: "6 OVER RUN INDIA",
                color: "white",
                background: "#303030",

            },
            {
                name: "",
                color: "black",
                background: "#303030",

            },
            {
                name: "1000",
                color: "black",
                background: "#B3E0FF",
                small: true

            },
            {
                name: "YES",
                color: "black",
                background: "#B3E0FF",
                small: true
            },
            {
                name: "100,000,000",
                color: "black",
                background: "#B3E0FF",
            },
            {
                name: "10,000,000",
                color: "white",
                background: "#0B4F26",
            },
            {
                name: "03:23 AM",
                color: "black",
                background: "#B3E0FF",
                time: true,
                date: "02-11-2022"
            }
        ]
    },
    {
        values: [
            {
                name: "John Doe",
                color: "black",
                background: "#F1C550",

            },
            {
                name: "BOOKMAKER",
                color: "black",
                background: "#F1C550",

            },
            {
                name: "INDIA",
                color: "black",
                background: "#B3E0FF",

            },
            {
                name: "1000",
                color: "black",
                background: "#B3E0FF",
                small: true

            },
            {
                name: "Back",
                color: "black",
                background: "#B3E0FF",
                small: true
            },
            {
                name: "100,000,000",
                color: "black",
                background: "#B3E0FF",
            },
            {
                name: "10,000,000",
                color: "white",
                background: "#0B4F26",
            },
            {
                name: "03:23 AM",
                color: "black",
                background: "#B3E0FF",
                time: true,
                date: "02-11-2022"
            }
        ],

    },
    {
        values: [
            {
                name: "John Doe",
                color: "white",
                background: "#319E5B",

            },
            {
                name: "MATCH ODDS",
                color: "white",
                background: "#F1C550",

            },
            {
                name: "INDIA",
                color: "black",
                background: "#FF9292",

            },
            {
                name: "1000",
                color: "black",
                background: "#FF9292",
                small: true

            },
            {
                name: "LAY",
                color: "black",
                background: "#FF9292",
                small: true
            },
            {
                name: "100,000,000",
                color: "black",
                background: "#FF9292",
            },
            {
                name: "10,000,000",
                color: "white",
                background: "#0B4F26",
            },
            {
                name: "03:23 AM",
                color: "black",
                background: "#FF9292",
                time: true,
                date: "02-11-2022"
            }
        ],

    },
    {
        values: [
            {
                name: "John Doe",
                color: "white",
                background: "#303030",

            },
            {
                name: "6 OVER RUN INDIA",
                color: "white",
                background: "#303030",

            },
            {
                name: "",
                color: "black",
                background: "#303030",

            },
            {
                name: "1000",
                color: "black",
                background: "#B3E0FF",
                small: true

            },
            {
                name: "YES",
                color: "black",
                background: "#B3E0FF",
                small: true
            },
            {
                name: "100,000,000",
                color: "black",
                background: "#B3E0FF",
            },
            {
                name: "10,000,000",
                color: "white",
                background: "#0B4F26",
            },
            {
                name: "03:23 AM",
                color: "black",
                background: "#B3E0FF",
                time: true,
                date: "02-11-2022"
            }
        ]
    }
]
const AllBets = () => {
    return (
        <Box sx={{ width: { mobile: "98%", laptop: '100%' }, marginY: { laptop: '.25vh' }, padding: .2, background: 'white' }}>
            <Box sx={[{ width: '100%', height: "42px", justifyContent: 'space-between', alignItems: 'center', paddingLeft: '10px', paddingRight: '4px', marginBottom: '.1vh', display: 'flex', }, (theme) => ({
                backgroundImage: `${theme.palette.primary.headerGradient}`
            })]} >
                <Typography sx={{ fontWeight: '12px', color: 'white', fontWeight: '700' }} >All Bets</Typography>

                <Box sx={{ width: '100px', height: '90%', background: 'white', justifyContent: 'center', borderRadius: '3px', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: '700', color: '#FF1111' }} >Total Bet</Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: '700', color: "#0B4F26" }} >999</Typography>

                </Box>
            </Box>
            <HeaderRow />
            {
                data?.map((i, k) => {
                    return (
                        <Row index={k} values={i.values} />
                    )
                })
            }
        </Box>
    )
}
const HeaderRow = () => {
    return (
        <Box sx={{ width: '100%', display: 'flex' }} >
            <Box sx={{ width: '15%', border: '1px solid white', background: 'rgba(0,0,0)', height: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
                <Typography sx={{ fontSize: '10px', fontWeight: '500', color: 'white' }}>Username</Typography>
            </Box>
            <Box sx={{ width: '20%', border: '1px solid white', background: 'rgba(0,0,0)', height: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
                <Typography sx={{ fontSize: '10px', fontWeight: '500', color: 'white' }}>Market</Typography>

            </Box>
            <Box sx={{ width: '15%', border: '1px solid white', background: 'rgba(0,0,0)', height: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
                <Typography sx={{ fontSize: '10px', fontWeight: '500', color: 'white' }}>Favourite</Typography>

            </Box>
            <Box sx={{ width: '10%', border: '1px solid white', background: 'rgba(0,0,0)', height: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
                <Typography sx={{ fontSize: '10px', fontWeight: '500', color: 'white' }}>Odds</Typography>

            </Box>
            <Box sx={{ width: '10%', border: '1px solid white', background: 'rgba(0,0,0)', height: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
                <Typography sx={{ fontSize: '10px', fontWeight: '500', color: 'white' }}>Type</Typography>

            </Box>
            <Box sx={{ width: '15%', border: '1px solid white', background: 'rgba(0,0,0)', height: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
                <Typography sx={{ fontSize: '10px', fontWeight: '500', color: 'white' }}>Stake</Typography>

            </Box>
            <Box sx={{ width: '15%', border: '1px solid white', background: 'rgba(0,0,0)', height: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
                <Typography sx={{ fontSize: '10px', fontWeight: '500', color: 'white' }}>My Stake</Typography>

            </Box>
            <Box sx={{ width: '15%', border: '1px solid white', background: 'rgba(0,0,0)', height: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
                <Typography sx={{ fontSize: '10px', fontWeight: '500', color: 'white' }}>Time</Typography>

            </Box>

        </Box>
    )
}
const SmallBox = ({ item }) => {
    return (
        <Box sx={{ width: '10%', border: '1px solid white', background: item?.background, height: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
            <Typography sx={{ fontSize: '10px', fontWeight: '600', color: item?.color }}>{item?.name}</Typography>

        </Box>
    )
}
const LargeBox = ({ item, k }) => {
    return (
        <Box sx={{ width: k == 1 ? '20%' : '15%', border: '1px solid white', background: item?.background, height: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }} >
            <Typography sx={{ fontSize: '10px', fontWeight: '600', color: item?.color, wordWrap: 'break-word', textAlign: 'center' }}>{item?.name}</Typography>
            {item?.time &&
                <Typography sx={{ fontSize: '10px', fontWeight: '600', color: item?.color }}>{item?.date}</Typography>

            }
        </Box>
    )
}
const Row = ({ values, index }) => {
    return (
        <Box sx={{ width: '100%', display: 'flex' }} >

            {values.map((item, k) => {
                if (!item?.small) {
                    return (
                        <LargeBox k={k} item={item} />
                    )
                }
                else {
                    return (
                        <SmallBox k={k} item={item} />
                    )
                }
            })
            }


        </Box>
    )
}
export default AllBets;