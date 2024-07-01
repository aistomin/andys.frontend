import {Container, Row, Col} from "react-bootstrap";
import photo800 from "../../assets/andy-avatar-800.jpg";
import photo600 from "../../assets/andy-avatar-600.jpg";
import photo480 from "../../assets/andy-avatar-480.jpg";
import Tilt from "react-parallax-tilt";
import {
    AiFillInstagram, AiFillYoutube, AiFillFacebook,
} from "react-icons/ai";

function Home() {
    return (
        <Container fluid className="home-content" id="about">
            <Container>
                <Row>
                    <Col md={8}>
                        <blockquote className="blockquote mb-0">
                            <p style={{color: "rgb(155 126 172)"}}>
                                &quot;Every bad situation is a blues song waiting to happen.&quot;
                            </p>
                            <footer className="blockquote-footer">Amy Winehouse</footer>
                        </blockquote>
                        <h1 className="home-greeting">
                            Hey, Blues and Rock fans!&nbsp;
                            <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                        </h1>
                        <p className="home-about-body">
                            <i><b className="purple">Andy</b></i> here. This is my personal website where I
                            share my&nbsp;
                            <i><b className="purple">passion</b></i> for Music 🎸
                            It is an extension of my day to day activities, a little part
                            of me that I would like to share with you.
                            <br/>
                            <br/>
                            I&apos;m particularly interested in <i><b className="purple">Blues</b></i> music
                            and its descendants like <i><b className="purple">Hard Rock, Metal</b></i> etc.
                            <br/>
                            <br/>
                            I&apos;m going to share with you my own pieces as well as my covers of well-known
                            compositions.
                            <br/>
                            <br/>
                            Stay tuned and take care!!! <i><b className="purple">Peace</b></i> ✌.
                        </p>
                    </Col>
                    <Col md={4} className="home-photo">
                        <Tilt>
                            <picture>
                                <source media="(min-width: 800px)" srcSet={photo800}/>
                                <source media="(min-width: 600px)" srcSet={photo600}/>
                                <source media="(min-width: 480px)" srcSet={photo480}/>
                                <img src={photo600} className="img-fluid" alt="Photo of me :)"/>
                            </picture>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">follow </span>me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://www.youtube.com/channel/UCPY0lKHgJuK5XQjVHXGBBSA"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillYoutube/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/andy.grails"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100074082643728"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillFacebook/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home;
