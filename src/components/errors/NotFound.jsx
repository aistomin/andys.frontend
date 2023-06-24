import {Col, Container, Row} from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import img from "../../assets/404.png"

const NotFound = () => {
    return (
        <Container fluid className="error-page">
            <Container>
                <Row>
                    <Col md={20}>
                        <Tilt>
                            <img src={img} className="img-fluid" alt="Not Found"/>
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default NotFound;
