import { Button, Typography , Box } from "@mui/material";
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
                <Typography variant="h4" className="text-center">How does it work?</Typography>
                <div className="how-slides">
                    <div className="slides">
                        <div className="slide">
                            <div>
                                <Typography variant="h4">Create an Account</Typography>
                                <PersonAddIcon/>
                            </div>
                            <Button variant="contained" href="/sign-up">Get Started</Button>
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
                            <div>
                                <Typography variant="h4">Add HLA Data</Typography>
                                <FingerprintIcon/>
                            </div>
                            <Typography paragraph>Using the HLA Form after signing-up</Typography>
                        </div>
                    </div>
                    <div className="slides">
                        <div className="slide">
                            <div>
                                <Typography variant="h4">Choose a Rule</Typography>
                                <AltRouteIcon/>
                            </div>
                            <Typography paragraph>Are You A Donor or a Patient?</Typography>
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
                            <div>
                                <Typography variant="h4">Select an Organ</Typography>
                                <DoneAllIcon/>
                            </div>
                            <Typography paragraph>You Can Choose From Five Organs</Typography>
                        </div>
                    </div>
                    <div className="slides">
                        <div className="slide">
                            <div>
                                <Typography variant="h4">Wait for a Response</Typography>
                                <HourglassTopIcon/>
                            </div>
                            <Typography paragraph>We Will Contact You When There's a Possible Operation!</Typography>
                        </div>
                        <div className="slide">
                            <img src={how5}/>
                        </div>
                    </div>
                </div>
                <div className="analytics">
                    <Typography variant="h4" className="text-center">Analytics from the Site</Typography>
                    <div className="analytics-body">
                        <div className="analytics-data">
                            <Box className="analytics-box"
                                        sx={{
                                            width: 200,
                                            height: 200,
                                            backgroundColor: '#aaa',
                                            '&:hover': {
                                            backgroundColor: '#444',
                                            opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                        
                                    >
                                        <Typography variant="h6">Donors</Typography>
                                        <div className="count">
                                            <b>256</b>
                                        </div>
                            </Box>
                        </div>
                        <div className="analytics-data">
                            <Box className="analytics-box"
                                sx={{
                                    width: 200,
                                    height: 200,
                                    backgroundColor: '#aaa',
                                    '&:hover': {
                                    backgroundColor: '#444',
                                    opacity: [0.9, 0.8, 0.7],
                                    },
                                }}
                                
                            >
                                <Typography variant="h6">Patients</Typography>
                                <div className="count">
                                    <b>1125</b>
                                </div>
                            </Box>
                        </div>
                        <div className="analytics-data">
                        <Box className="analytics-box"
                            sx={{
                                width: 200,
                                height: 200,
                                backgroundColor: '#aaa',
                                '&:hover': {
                                backgroundColor: '#444',
                                opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                            
                        >
                            <Typography variant="h6">Operations Done</Typography>
                            <div className="count">
                                <b>23</b>
                            </div>
                        </Box>
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