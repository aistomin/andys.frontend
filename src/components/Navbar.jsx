import {useState} from "react";
import BsNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {CgFileDocument, CgMusicNote, CgPhone} from "react-icons/cg";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen
} from "react-icons/ai";

function Navbar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <BsNavbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "BsNavbar"}
        >
            <Container>
                <BsNavbar.Brand href="/" className="d-flex" data-testid="logo">
                    <u className="main-name">Andy Grails</u>
                </BsNavbar.Brand>
                <BsNavbar.Toggle
                    aria-controls="responsive-BsNavbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </BsNavbar.Toggle>
                <BsNavbar.Collapse id="responsive-BsNavbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <AiOutlineHome style={{marginBottom: "2px"}}/> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/videos"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{marginBottom: "2px"}}
                                />{" "} Videos
                            </Nav.Link>
                        </Nav.Item>
                        {/*<Nav.Item>*/}
                        {/*    <Nav.Link*/}
                        {/*        as={Link}*/}
                        {/*        to="/notes"*/}
                        {/*        onClick={() => updateExpanded(false)}*/}
                        {/*    >*/}
                        {/*        <CgMusicNote style={{marginBottom: "2px"}}/> Notes/Tabs*/}
                        {/*    </Nav.Link>*/}
                        {/*</Nav.Item>*/}
                        {/*<Nav.Item>*/}
                        {/*    <Nav.Link*/}
                        {/*        as={Link}*/}
                        {/*        to="/lyrics"*/}
                        {/*        onClick={() => updateExpanded(false)}*/}
                        {/*    >*/}
                        {/*        <CgFileDocument style={{marginBottom: "2px"}}/> Lyrics*/}
                        {/*    </Nav.Link>*/}
                        {/*</Nav.Item>*/}
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                onClick={() => updateExpanded(false)}
                            >
                                <CgPhone style={{marginBottom: "2px"}}/> Contact Me
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
}

export default Navbar;
