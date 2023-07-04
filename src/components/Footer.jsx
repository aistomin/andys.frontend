import {Container, Row, Col} from "react-bootstrap";
import {
    AiOutlineTwitter,
    AiFillInstagram, AiFillYoutube, AiFillFacebook,
} from "react-icons/ai";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-credits">
                    Developers: <a
                    href="https://github.com/aistomin">Andrej</a>, <a
                    href="https://github.com/soumyajit4419">Soumyajit</a>. Designers: <a
                    href="https://pixabay.com/users/josethestoryteller-5100055/">Josethestoryteller</a>, <a
                    href="https://pixabay.com/users/mocho-156870/">Mocho</a>
                </Col>
                <Col md="4" className="footer-copyright">
                    <h3>Copyright © {year} Andy Grails</h3>
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
                        <li className="social-icons-footer">
                            <a
                                href="https://twitter.com/AndyGrails"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineTwitter/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
