
import { Card, Typography, Box, useTheme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { eye, logo, mail } from '../../assets';
import { Input, CustomButton } from '../../components';
import BackgroundCarousel from './BackgroundCarousel';
export default function Login() {
  const theme = useTheme()
  const navigate = useNavigate()
  return (
    <Box style={{ position: "relative" }}>
      <BackgroundCarousel />
      <Box style={{ height: "100vh", width: "100vw", display: "flex", alignItems: "center", position: "relative", justifyContent: "center" }}>
        <Card sx={[{ borderRadius: { laptop: "35px", mobile: '28px' }, display: "flex", flexDirection: "column", py: "10px", alignItems: "center", width: { laptop: '33%', tablet: "50%", mobile: '80%' } },
        (theme) => ({
          backgroundImage: `${theme.palette.primary.mainGradient}`
        })

        ]}>
          <img src={logo} alt="logo" style={{ height: "12%", marginTop: "1em", width: "45%" }} />
          <Typography variant="header" sx={{ fontSize: { laptop: "30px", mobile: "20px" }, marginTop: "1vh" }}>Welcome !</Typography>
          <Typography variant="subHeader" sx={{ fontSize: { laptop: "11px", mobile: "10px" }, lineHeight: "18px", marginTop: "1vh", textAlign: "center", fontFamily: '200' }}>Please enter the email address & password <br />to login into your account</Typography>
          <Box sx={{ width: { laptop: "70%", mobile: "75%" } }}>
            <Input placeholder={'Enter Email'} title={"Email"} img={mail} />
            <Input placeholder={"Enter Password"} inputProps={{ type: 'password' }} title={"Password"} containerStyle={{ marginTop: "5px" }} img={eye} />
            <Typography sx={{ color: theme.palette.button.main, fontSize: { laptop: "10px", mobile: "8px" }, textAlign: "right", marginRight: "10px", marginTop: ".5em", fontWeight: '600' }}>Forgot Password?</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", marginY: "1vh", marginTop: "4vh" }}>
              <CustomButton onClick={() => {
                navigate('/matches')
              }} buttonStyle={{ background: theme.palette.button.main }} title="Login" />
            </Box>
            <Typography sx={{ color: theme.palette.text.white, fontSize: { laptop: "9px", mobile: "7px" }, textAlign: "center", marginTop: "1em", marginBottom: '1em' }}>Don't have an account? <Typography display={"inline"} sx={{ color: theme.palette.text.yellow, fontSize: { laptop: "10px", mobile: "8px" }, }}>Sign up</Typography></Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}