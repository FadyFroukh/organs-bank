import "../../scss/Header.css";
import Container from '../Container';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png"
function Header({click,setClick}){

    const handleClick = ()=>{
        setClick(!click);
    }

    return(
        <Container>
            <header>
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                </div>
                <div className="header-menu">
                    <Link to="/faq">FAQ</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/sign-in">Sign In</Link>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
                <div className="bars">
                    <MenuIcon onClick={handleClick}/>
                </div>
            </header>
        </Container>
    );
}

export default Header;