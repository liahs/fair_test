
import { Card, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthBackground, AuthLogo, CustomButton } from '../../components';
import OTPInput, { ResendOTP } from "otp-input-react";
export default function Verification() {
  const theme = useTheme()
  const navigate = useNavigate()
  const [OTP, setOTP] = useState("");
  const matchesMobile = useMediaQuery(theme.breakpoints.down("tablet"))

  return (
    <Box style={{ position: "relative" }}>
      <AuthBackground />
      <Box style={{ height: "100vh", width: "100vw", display: "flex", alignItems: "flex-end", position: "relative", justifyContent: "flex-end" }}>
        <Card sx={[{ display: "flex", height: "100%", flexDirection: "column", py: "10px", alignItems: "center", justifyContent:matchesMobile?"flex-start": "center", width: { laptop: '28%', tablet: "40%", mobile: '100%' } },
        (theme) => ({
          background: `${theme.palette.primary.mainGradient}`
        })

        ]}>
          <AuthLogo />
          <Typography variant="header" sx={{ fontSize: { laptop: "20px", mobile: "22px" }, marginTop: matchesMobile?"100px":"1vh" }}>Verification</Typography>
          <Typography variant="subHeader" sx={{ fontSize: { laptop: "11px", mobile: "13px" }, lineHeight: "18px", marginTop: "1vh", textAlign: "center", fontFamily: '200' }}>Please enter the 4-digit verification code<br/> sent to your email address.</Typography>
          <Box sx={{ width: { laptop: "55%", mobile: "75%", marginTop: "20px" }, opacity: 1,display:"flex",flexDirection:"column",alignItems:"center" }}>
            <OTPInput placeholder={["*","*","*","*"]} inputStyles={{height:"50px",width:"50px",background:"white",borderRadius:"10px",verticalAlign:"bottom",fontSize:"16px"}} value={OTP} onChange={setOTP}  OTPLength={4}  disabled={false} secure  />
          <Box sx={{ display: "flex", justifyContent: "center", marginY: "1vh", marginTop: "4vh" }}>
              <CustomButton onClick={() => {
                navigate("/new_password")
              }} buttonStyle={{ background: theme.palette.button.main ,width:"120px",marginTop:"40px"}}  title="Next" />
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}