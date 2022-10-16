
import { Card, Typography, Box, useTheme } from '@mui/material';
import { eye, logo, mail } from '../../assets';
import { Input, CustomButton } from '../../components';
import BackgroundCarousel from './BackgroundCarousel';
export default function Login() {
  const theme = useTheme()
  return (
    <Box style={{ position: "relative" }}>
      <BackgroundCarousel />
      <Box style={{ height: "100vh", width: "100vw", display: "flex", alignItems: "center", position: "relative", justifyContent: "center" }}>
        <Card sx={[{ borderRadius: "80px", display: "flex", flexDirection: "column", py: "10px", alignItems: "center", width: { laptop: '37%', tablet: "60%", mobile: '90%' } },
        (theme) => ({
          backgroundImage: `${theme.palette.primary.mainGradient}`
        })

        ]}>
          <img src={logo} alt="logo" style={{ height: "11%", marginTop: "1em", width: "37%" }} />
          <Typography variant="header" sx={{ fontSize: { laptop: "35px", mobile: "25px" }, marginTop: "1vh" }}>Welcome !</Typography>
          <Typography variant="subHeader" sx={{ fontSize: { laptop: "15px", mobile: "13px" }, lineHeight: "25px", marginTop: "1vh", textAlign: "center" }}>Please enter the email address & password <br />to login into your account</Typography>
          <Box sx={{ width: { laptop: "70%", mobile: "80%" } }}>
            <Input title={"Email"} img={mail} />
            <Input title={"Password"} containerStyle={{ marginTop: "10px" }} img={eye} />
            <Typography sx={{ color: theme.palette.button.main, fontSize: { laptop: "12px", mobile: "10px" }, textAlign: "right", marginTop: "1em" }}>Forgot Password?</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", marginY: "1vh", marginTop: "4vh" }}>
              <CustomButton buttonStyle={{ background: theme.palette.button.main }} title="Login" />
            </Box>
            <Typography sx={{ color: theme.palette.text.white, fontSize: { laptop: "12px", mobile: "10px" }, textAlign: "center", marginTop: "1em" }}>Don't have an account? <Typography display={"inline"} sx={{ color: theme.palette.text.yellow, fontSize: { laptop: "12px", mobile: "10px" }, }}>Sign up</Typography></Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}