import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import "../../../scss/Home.css";
import Container from "../../Container";
import Footer from "../../Footer";
import Header from "../Header";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import how1 from "../../../images/how1.png";
import how2 from "../../../images/how2.png";
import how3 from "../../../images/how3.png";
import how4 from "../../../images/how4.png";
import how5 from "../../../images/how5.png";

function Home({click,setClick}){

    useEffect(()=>{
        document.title = "Human Organs System - Main Page"
    },[])


    return(
        <div className="home">
        <Header click={click} setClick={setClick}/>
        <main>
            <div className="home-page">
                <div className="home-page-overlay">
                    <div className="text">Welcome to the Biggest Human Organs Dontation System!</div>
                    <Button variant="contained" href="/sign-up">Get Started</Button>
                </div>
            </div>
        </main>
        <div className="how">
            <Container>
                <Typography variant="h4">How does it work?</Typography>
                <div className="how-slides">
                    <div className="slides">
                        <div className="slide">
                            <Typography variant="h4">Create an Account</Typography>
                            <PersonAddIcon/>
                        </div>
                        <div className="slide">
                            <img src={how1}/>
                        </div>
                    </div>
                    <div className="slides">
                        <div className="slide">
                            <img src={how2}/>
                        </div>
                        <div className="slide">
                            <Typography variant="h4">Add HLA Data</Typography>
                            <FingerprintIcon/>
                        </div>
                    </div>
                    <div className="slides">
                        <div className="slide">
                            <Typography variant="h4">Choose a Rule</Typography>
                            <AltRouteIcon/>
                        </div>
                        <div className="slide">
                            <img src={how3}/>
                        </div>
                    </div>
                    <div className="slides">
                        <div className="slide">
                            <img src={how4}/>
                        </div>
                        <div className="slide">
                            <Typography variant="h4">Select an Organ</Typography>
                            <DoneAllIcon/>
                        </div>
                    </div>
                    <div className="slides">
                        <div className="slide">
                            <Typography variant="h4">Wait for a Response</Typography>
                            <HourglassTopIcon/>
                        </div>
                        <div className="slide">
                            <img src={how5}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <Footer/>
        </div>
    );
}

export default Home;