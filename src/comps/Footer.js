import Container from "./Container";
import "../scss/Footer.css";

function Footer(){
    return(
        <footer>
            <Container>
                <div className="footer-part">
                    Part1
                </div>
                <div className="footer-part">
                    Part 1
                </div>
                <div className="footer-part">
                    Part 1
                </div>
            </Container>
        </footer>
    );
}

export default Footer;