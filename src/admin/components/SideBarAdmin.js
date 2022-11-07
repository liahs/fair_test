import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const SideBarAdmin = () => {
    const [stateArray, setArray] = useState([])
    const colors = ["#F8C851", "#FFDA7D", "#FFE7AD", "#FFF1CF", "#FFF8E6"]
    const data = [
        {
            title: "Cricket",
            values: [
                {
                    title: "T20 World Cup",
                    sub: "(Tournamnet name)",
                    values: [{
                        title: "01, November, 2022",
                        values: [{
                            title: "India vs Bangladesh",
                            values: [
                                {
                                    title: "Match Odds",
                                    values: false
                                }
                            ]
                        },]
                    }, {
                        title: "01, November, 2022",
                        values: [{
                            title: "India vs Bangladesh",
                            values: [
                                {
                                    title: "Match Odds",
                                    values: false
                                }
                            ]
                        },]
                    }]
                }
            ]

        },

        {
            title: "Football",
            values: []
        }, {
            title: "Tennis",
            values: []
        },
        {
            title: "Ice hockey",
            values: []
        }
    ]
    const MinusBox = () => {
        return (
            <Box sx={{ borderRadius: '10px', justifyContent: 'center', alignItems: 'center', display: 'flex', width: '15px', height: '15px', background: 'black' }}>
                <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#FDCB52' }} >-</Typography>
            </Box>
        )
    }
    const MainBox = ({ title, width, color, under }) => {
        return (
            <Box sx={{ display: 'flex', width: width + "%", height: '40px', paddingX: "3%", background: color, borderRadius: "3px", justifyContent: "space-between", alignItems: "center", marginTop: '1px', alignSelf: "flex-end", marginRight: '3px' }} >
                <Typography sx={{ fontSize: '10px', color: 'black', fontWeight: '500', marginLeft: '3%' }} >{title}</Typography>
                {under && <MinusBox />}
            </Box>
        )
    }
    const RecursiveDropOption = (data, width, finalArr, color) => {
        console.log(data, 'data')
        let arr = [...finalArr]
        let flag = true
        color = color + 1
        for (let index = 0; index < data?.length; index++) {
            const element = data[index];
            arr.push(<MainBox under={false} color={colors[color]} width={width} title={element.title} />)

            if (element?.values?.length > 0) {

                // arr.push(<MainBox under={true} color={colors[color]} width={width} title={element.title} />)

                RecursiveDropOption(element.values, width - 7, arr, color)

            }

        }
        if (flag) {
            setArray(arr)
        }
    }

    useEffect(() => {
        RecursiveDropOption(data, 85, [], -1)
    }, [])

    return (
        <Box sx={[{ minHeight: "100vh", width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center' },
        (theme) => ({
            backgroundImage: `${theme.palette.primary.mainGradient}`
        })]}
        // headerGradient
        >
            <Box sx={[{ width: '98%', marginTop: '3px', paddingX: '3%', display: 'flex', justifyContent: "space-between", alignItems: 'center', alignSelf: 'center', height: '40px', borderRadius: '2px' }, (theme) => ({
                backgroundImage: `${theme.palette.primary.headerGradientAdmin}`
            })]}>
                <Typography sx={{ fontSize: '14px', color: 'white', fontWeight: '500', marginLeft: '3%' }} >All Sports</Typography>
                <MinusBox />

            </Box>
            {
                stateArray.map((i) => {
                    return (
                        i
                    )
                })
            }
        </Box>
    )
}
export default SideBarAdmin;