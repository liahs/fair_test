
import { Card, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { eye, logo, mail } from '../../assets';
import { Input, CustomButton, AuthLogo, AuthBackground } from '../../components';
import { ReCAPTCHACustom } from '../../components'
export default function Login() {
  const theme = useTheme()
  const navigate = useNavigate()
  const matchesMobile = useMediaQuery(theme.breakpoints.down("tablet"))
  return (
    <Box style={{ position: "relative" }}>
      <AuthBackground />
      <Box style={{ height: "100vh", width: "100vw", display: "flex", alignItems: "flex-end", position: "relative", justifyContent: "flex-end" }}>

        <Card sx={[{ display: "flex", height: "100%", flexDirection: "column", py: "10px", alignItems: "center", justifyContent: matchesMobile ? "flex-start" : "center", width: { laptop: '380px', tablet: "43%", mobile: '100%' } },
        (theme) => ({
          background: `${theme.palette.primary.mainGradient}`
        })

        ]}>
          <AuthLogo />
          <Box sx={{ width: { laptop: "55%", mobile: "75%", marginTop: matchesMobile ? "100px" : "20px" }, opacity: 1 }}>
            <Input placeholder={'Enter Username'} title={"Username"} img={mail} />
            <Input placeholder={"Enter Password"} inputProps={{ type: 'password' }} title={"Password"} containerStyle={{ marginTop: "10px" }} img={eye} />
            <Typography onClick={() => {
              navigate("/forget_password")
            }} sx={{ color: theme.palette.button.main, fontSize: { laptop: "10px", mobile: "12px" }, textAlign: "right", marginRight: "10px", marginTop: ".5em", fontWeight: '600' }}>Forgot Password?</Typography>
            <ReCAPTCHACustom containerStyle={{ marginTop: "20px" }} />
            <Box sx={{ display: "flex", justifyContent: "center", marginY: "1vh", marginTop: "4vh" }}>
              <CustomButton onClick={() => {
                navigate('/matches')
              }} buttonStyle={{ background: theme.palette.button.main }} title="Login" />
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}