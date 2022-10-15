
import { Card, Typography, Box } from '@mui/material';
import { loginBackground, logo } from '../../assets';
import { Input } from '../../components';
export default function Login() {
  return (
    <Box style={{ height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: `url(${loginBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 100vh" }}>
      <Card sx={[{ height: '70%', borderRadius: "80px", display: "flex", flexDirection: "column", py: "10px", alignItems: "center", width: { laptop: '40%', mobile: '90%' } },
      (theme) => ({
        backgroundImage: `${theme.palette.primary.mainGradient}`
      })

      ]}>
        <img src={logo} alt="logo" style={{ height: "11%", marginTop: "1em", width: "37%" }} />
        <Typography variant="header" sx={{ fontSize: { laptop: "35px", mobile: "25px" }, marginTop: "1vh" }}>Welcome !</Typography>
        <Typography variant="subHeader" sx={{ fontSize: { laptop: "15px", mobile: "13px" }, lineHeight: "25px", marginTop: "1vh", textAlign: "center" }}>Please enter the email address & password <br />to login into your account</Typography>
        <Box sx={{ width: { laptop: "70%", mobile: "90%" } }}>
          <Input title={"Email"} />
          <Input title={"Password"} containerStyle={{ marginTop: "10px" }} />
        </Box>
      </Card>
    </Box>
  );
}