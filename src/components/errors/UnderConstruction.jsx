import {Col, Container, Row} from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import img from "../../assets/under_construction.png"

const UnderConstruction = () => {
    return (
        <Container fluid className="error-page">
            <Container>
                <Row>
                    <Col md={20}>
                        <Tilt>
                            <img src={img} className="img-fluid" alt="Under Construction Error"/>
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default UnderConstruction;
