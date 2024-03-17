import {Col, Container, Row} from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import photo800 from "../../assets/andy-avatar-800.jpg";
import photo600 from "../../assets/andy-avatar-600.jpg";
import photo480 from "../../assets/andy-avatar-480.jpg";
import {AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from "react-icons/ai";
import {Link} from "react-router-dom";

const Credits = () => {
    return (
        <Container fluid className="home-content" id="about">
            <Container>
                <Row>
                    <Col md={8}>
                        <h1 className="page-heading">
                            Credits
                        </h1>
                        <p className="page-body">
                            Although I am the only one contributor here at the moment, I really couldn not build
                            anything without a community help. I thank all the kind people on the Internet who
                            share the information and their work for free. Though it is free, it is priceless.
                        </p>
                        <p className="page-body">
                            I would like to mention some people explicitly:
                            <ul>
                                <li>
                                    <a href="https://github.com/gitdagray">Dave Gray</a> - programmer, youtuber,
                                    teacher, musician and a
                                    crazy guy who shares a terrific courses on <a
                                    href="https://www.youtube.com/@DaveGrayTeachesCode">YouTube</a> With
                                    a help of this courses I slightly improved my knowledge of HTML, CSS and JavaScript
                                    + I learned how to start with React JS.
                                </li>
                                <li>
                                    <a href="https://github.com/soumyajit4419">Soumyajit Behera</a> - GitHub enthusiast
                                    from whom
                                    I have stolen the base of my website. Without his work I would probably have not
                                    started
                                    the project until this very day.
                                </li>
                            </ul>
                        </p>
                        <p className="page-body">
                            I am not a designer myself, so I would have a hard times if there was not a free content on
                            the Internet like icons, images etc.
                            Below I just list a resources and pieces of work that I used, in no particular order:
                            <ul>
                                <li>
                                    <a href="https://pixabay.com/illustrations/under-construction-construction-sign-2408062/">"Under
                                        Construction" image</a>
                                </li>
                                <li>
                                    <a href="https://pixabay.com/vectors/error-page-was-not-found-news-http-1349562/">"Page
                                        Not Found" image</a>
                                </li>
                                <li>
                                    <a href="https://pixabay.com/illustrations/thanks-thankyou-gratitude-grateful-5709753/">"Thank
                                        You" image</a>
                                </li>
                                <li>
                                    <a href="https://freesvg.org/red-coming-soon-stamp-vector-graphics">"Coming Soon"
                                        image</a>
                                </li>
                            </ul>
                        </p>
                        <p className="page-body">
                            I may forget to mention someone because there are a lot of resources that helped me. If
                            that is the case, please <Link to="/contact">let me know</Link>
                        </p>
                        <p className="page-body">
                            Thank you all for your work, it is very valuable and helpful!!!
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
            </Container>
        </Container>
    );
}

export default Credits;
