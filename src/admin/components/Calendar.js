import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import moment from 'moment'
import { CalendarImage } from "../assets";
const Calendar = ({ title }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [open, setOpen] = useState(false)
    return (
        <Box sx={{
            zIndex: 100, width: '19%',
            position: 'relative',
        }} onClick={() => {
            setOpen(!open)
        }}>
            <Typography sx={{ fontSize: '14px', fontWeight: '600', marginLeft: '7px', marginY: '.3vh' }}>{title}</Typography>

            {<Box sx={{ position: 'absolute' }}>
                <DatePicker open={open} selected={startDate} onChange={(date) => {
                    setOpen(false)
                    setStartDate(date)
                }} />
            </Box>
            }
            <Box onClick={() => {
                setOpen(!open)
            }} sx={{ width: '100%', height: '35px', justifyContent: "space-between", alignItems: 'center', display: 'flex', background: 'white', borderRadius: '3px', border: '2px solid #DEDEDE', paddingX: '7px', position: 'absolute' }}>
                <Typography sx={{ fontSize: '11px', fontWeight: '500' }}>{moment(startDate).format('YYYY-MM-DD')}</Typography>
                <img src={CalendarImage} style={{ width: '12px', height: '13px' }} />
            </Box>
        </Box>
    );
};
export default Calendar;