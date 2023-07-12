import {Col, Container, Row} from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import PropTypes from "prop-types";

const ErrorWithPicture = ({img, alt}) => {
    return (
        <Container fluid className="error-page">
            <Container>
                <Row>
                    <Col md={20} className="error-picture">
                        <Tilt>
                            <img src={img} className="img-fluid" alt={alt}/>
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

ErrorWithPicture.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string
}

export default ErrorWithPicture;
