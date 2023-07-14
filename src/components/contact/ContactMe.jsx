import {useForm, ValidationError} from '@formspree/react';
import {Col, Container, Form, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import img from "../../assets/thank_you.png";
import Tilt from "react-parallax-tilt";
import {AiOutlineArrowRight} from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";

const ContactMe = () => {
    const [state, handleSubmit] = useForm("mzblpnjw");

    if (state.succeeded) {
        return <Container fluid className="thank-you-page">
            <Container>
                <Tilt>
                    <img src={img} className="img-fluid" alt="Thank You!!!"/>
                </Tilt>
            </Container>
        </Container>
    } else {
        return (
            <Container fluid className="page-content">
                <Container>
                    <h1 className="page-heading">
                        Contact <strong className="purple">Me</strong>
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" type="email">
                            <FormControl
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                size="lg"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <FormControl
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                as="textarea" rows={11}
                                size="lg"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" style={{placeContent: 'center', display: 'flex'}}>
                            <ReCAPTCHA
                                sitekey="6LdCcwcnAAAAAAe497s-Qh91cyFwT9T6pqzrdesh"
                                theme='dark'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={state.submitting}
                                size="lg"
                                className="submit-contact-request"
                            >
                                Send the Request
                                &nbsp;
                                <AiOutlineArrowRight/>
                            </Button>
                        </Form.Group>
                    </Form>
                    <Row>
                        <Col md={20}>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default ContactMe;
