import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle.jsx";
import Home2 from "./Home2.jsx";
import Type from "./Type.jsx";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1>TBD</h1>
              {/*<h1 style={{ paddingBottom: 15 }} className="heading">*/}
              {/*  Hi There!{" "}*/}
              {/*  <span className="wave" role="img" aria-labelledby="wave">*/}
              {/*    👋🏻*/}
              {/*  </span>*/}
              {/*</h1>*/}

              {/*<h1 className="heading-name">*/}
              {/*  I'm <strong className="main-name">Andy Grails</strong>*/}
              {/*</h1>*/}

              {/*<div style={{ padding: 50, textAlign: "left" }}>*/}
              {/*  <Type />*/}
              {/*</div>*/}
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
