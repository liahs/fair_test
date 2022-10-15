import { Box } from "@mui/material";
import { loginBackground,loginBackground1,loginBackground2 } from "../../assets";
import Carousel from 'react-bootstrap/Carousel';

function BackgroundCarousel () {
    
        return (
            <Box style={{height:"100vh",width:"100vw",position:"absolute",zIndex:0,top:0,left:0}}>
                <Carousel fade={true} pause={false} controls={false} indicators={false} interval={4000}>
                <Carousel.Item >
                    <Box style={{ height: "100vh", width: "100vw", backgroundImage: `url(${loginBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 100vh" }} />
                    </Carousel.Item>
                    <Carousel.Item >
                    <Box style={{ height: "100vh", width: "100vw", backgroundImage: `url(${loginBackground1})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 100vh" }} />
                    </Carousel.Item>
                    <Carousel.Item>
                    <Box style={{ height: "100vh", width: "100vw", backgroundImage: `url(${loginBackground2})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 100vh" }} />
                    </Carousel.Item>
                </Carousel>
            </Box>
        );
    }


export default BackgroundCarousel