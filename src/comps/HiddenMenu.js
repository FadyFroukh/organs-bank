import "../scss/HiddenMenu.css";
import CloseIcon from '@mui/icons-material/Close';
function HiddenMenu({click,setClick}){

    const handleClick = ()=>{
        setClick(!click);
    }

    return(
        <div className="hidden-menu">
            <div className="close">
                <CloseIcon style={{fontSize:"40px",cursor:"pointer"}} onClick={handleClick}/>
            </div>
            <ul className="hidden-menu-list">
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/sign-in">Sign In</a></li>
                <li><a href="/sign-up">Sign Up</a></li>
            </ul>
        </div>
    )
}

export default HiddenMenu;