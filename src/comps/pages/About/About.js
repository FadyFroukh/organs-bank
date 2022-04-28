import { useEffect } from "react";
import Footer from "../../Footer";
import Header from "../Header";
import "../../../scss/About.css";
import "../../../scss/utils.css";

import { Typography } from "@mui/material";
import about1 from "../../../images/about1.jpg";
import about2 from "../../../images/about2.png";
import about3 from "../../../images/about3.jpg";
import about4 from "../../../images/about4.jpg";

function About({click,setClick}){
    useEffect(()=>{
        document.title = "Human Organs System - About Us"
    },[])
    return(
        <div className="about">
            <div className="about-us">
                <Header click={click} setClick={setClick}/>
                <div className="about-body container">
                    <div className="about-header">
                        <Typography variant="h3">About Us</Typography>
                    </div>
                    <div className="about-slides">
                        <div className="slides">
                            <div className="slide">
                                <Typography variant="h6">Who are we?</Typography>
                                <Typography variant="h5">
                                    We are the biggest human organs donation system in <b>Palestine</b>!
                                </Typography>
                                <Typography paragraph>
                                    We are a newly founded palestinian charity company that has one purpose, which is deliver
                                    organs to people who are in need the most!
                                </Typography>
                            </div>
                            <div className="slide">
                                <img src={about1} alt="About 1"/>
                            </div>
                        </div>
                        <div className="slides">
                            <div className="slide change-order">
                                <img src={about2} alt="About2"/>
                            </div>
                            <div className="slide">
                            <Typography variant="h6">How do we operate?</Typography>
                                <Typography variant="h5">
                                    We operate with the government, the ministry of health and hospitals!
                                </Typography>
                                <Typography paragraph>
                                    When users sign up for our system, if the account was accepted, we check in with the 
                                    government, ministry of health and the hospital he took his/her examination from, to make
                                    sure that the data is legit.
                                </Typography>
                            </div>
                        </div>
                        <div className="slides">
                            <div className="slide">
                            <Typography variant="h6">How is the opeation done?</Typography>
                                <Typography variant="h5">
                                    All opreations are sponsored by the government and the ministry of health!
                                </Typography>
                                <Typography paragraph>
                                    After all the checking we done, we contact people that have a match, a donor and a patient, After
                                    we get an approval from both parties we setup an operation date with one of the hospitals in a nearby
                                    area for both parties.
                                </Typography>
                            </div>
                            <div className="slide">
                                <img src={about3} alt="About3"/>
                            </div>
                        </div>
                        <div className="slides">
                            <div className="slide change-order">
                            <img src={about4} alt="About4"/>
                            </div>
                            <div className="slide">
                            <Typography variant="h6">What happens after the operation?</Typography>
                                <Typography variant="h5">
                                    The donor is granted a full health insurance by the government!
                                </Typography>
                                <Typography paragraph>
                                    The health insurance covers up everything for the donor, the donor is registered in the
                                    government files and is given a high priority flag at all hospitals.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;