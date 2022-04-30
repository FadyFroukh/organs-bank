import "../scss/Footer.css";
import "../scss/Header.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import Logo from "../images/logo.png"

function Footer(){
    return(
        <footer>
            <div className="footer-part">
                <Typography variant="h5">Human Organs co.</Typography>
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <Typography paragraph>
                    All right reserved for the year {new Date().getFullYear()} &copy;
                </Typography>
            </div>
            <div className="footer-part">
                <Typography variant="h5">Pages</Typography>  
                <Typography paragraph><Link to="/faq">FAQ</Link></Typography>
                <Typography paragraph><Link to="/about-us">About Us</Link></Typography>
                <Typography paragraph><Link to="/contact-us">Contact Us</Link></Typography>
                <Typography paragraph><Link to="/sign-in">Sign In</Link></Typography>
                <Typography paragraph><Link to="/sign-up">Sign Up</Link></Typography>

            </div>
            <div className="footer-part">
                <Typography variant="h5">Connect With Us</Typography>
                <Typography paragraph><b>Email : </b>info@partsdonation.org</Typography>
                <Typography paragraph><b>Phone : </b>0599101010</Typography>
                <Typography paragraph><b>Office : </b>Palestine - Bethlehem - Alzahara Building - Fourth Floor</Typography>
                <div className="socials">
                    <Typography paragraph><b>Social Media : </b></Typography>
                    <div className="icons">
                        <a href="#"><Facebook/></a>
                        <a href="#"><Twitter/></a>
                        <a href="#"><LinkedIn/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;