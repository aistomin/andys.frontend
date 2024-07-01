import {Container, Row, Col} from "react-bootstrap";
import {
    AiFillInstagram, AiFillYoutube, AiFillFacebook,
} from "react-icons/ai";
import {Link} from "react-router-dom";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-credits">
                    Developed by <a href="https://github.com/aistomin">me</a> with
                        <br/> a <Link to={"/credits"} id="creditsLink">little help from my friends</Link>
                </Col>
                <Col md="4" className="footer-copyright">
                    Copyright © {year} Andy Grails
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons-footer">
                            <a
                                href="https://www.youtube.com/channel/UCPY0lKHgJuK5XQjVHXGBBSA"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillYoutube/>
                            </a>
                        </li>
                        <li className="social-icons-footer">
                            <a
                                href="https://www.instagram.com/andy.grails"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram/>
                            </a>
                        </li>
                        <li className="social-icons-footer">
                            <a
                                href="https://www.facebook.com/profile.php?id=100074082643728"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillFacebook/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
