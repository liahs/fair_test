import { TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";
import { ArrowDown, drawerBackground } from "../assets";

const SideBar = ({mobileShow}) => {
    
    const [selected, setSelected] = useState('All Sports')
    const data = [
        {
            title: "All Sports",
            data: ["In Play", "Live Casino", "Live Card", "Cricket", "Soccer", "Tennis", "Football", "Ice Hockey", "Volleyball", "Politics", "Basketball", "Table", "Tennis", "Darts"]
        },
        {
            title: "Others",
            data: []
        }
    ]
    const ListHeader = ({ title }) => {
        return (
            <Box onClick={() => {
                if (selected == title) {
                    setSelected('')
                }
                else {
                    setSelected(title)
                }
            }} sx={[{ width: '100%', height: '6vh', marginBottom: '.5vh', borderBottomRightRadius: '.5vh', borderTopRightRadius: '.5vh' }, (theme) => ({
                backgroundImage: `${theme.palette.primary.headerGradient}`
            })]} >
                <Box sx={{ display: 'flex', height: '100%' }} >
                    <Box sx={{ display: 'flex', flex: .3 }} >
                    </Box><Box sx={{ display: 'flex', flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center' }} >
                        <Typography variant="menuListHeader" sx={{fontSize:{laptop:"15px",mobile:"14px"}}}>{title}</Typography>
                    </Box><Box sx={{ display: 'flex', flex: .3, justifyContent: 'center', alignItems: 'center' }} >
                        <img style={{ width: '1.5vw', height: '.9vw', transform: selected == title ? 'rotate(0deg)' : 'rotate(180deg)' }} src={ArrowDown} />
                    </Box>
                </Box>
            </Box>
        )
    }
    const ListItem = ({ item }) => {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '5vh', width: '60%', }} >
                <Typography variant="menuListItem" sx={{fontSize:{laptop:"13px",mobile:"12px"}}} >{item}</Typography>
            </Box>
        )
    }

    const RenderList = ({ data }) => {
        return data.map((item) => {

            return <ListItem item={item} />

        })

    }
    const RenderItem = ({ i }) => {
        return (
            <><ListHeader title={i.title} />
                {selected == i.title && <RenderList data={i.data} />}</>
        )
    }
    return (
        <Box sx={[{ width: {  laptop: '18%',mobile:mobileShow?"100%":"0%"}, height: '100%', display: 'flex', flexDirection: 'column', overflow: 'auto', alignItems: 'flex-end', backgroundImage: `url(${drawerBackground})` }]}>

            {
                data?.map((i) => {
                    return (
                        <RenderItem i={i} />
                    )
                })
            }

        </Box >
    )
}

export default SideBar;