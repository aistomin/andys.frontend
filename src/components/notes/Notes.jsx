import {Col, Container, Row} from "react-bootstrap";
import {useStoreState} from "easy-peasy";
import NotesCard from "./NotesCard.jsx";
import ErrorWithPicture from "../errors/ErrorWithPicture.jsx";
import comingSoon from "../../assets/coming_soon.svg";

const Notes = () => {

    const notes = useStoreState((state) => state.sheets);

    if (notes.length > 0) {
        return <Container fluid className="page-content">
            <Container>
                <h1 className="page-heading">
                    My latest <strong className="purple">Music Sheets</strong>
                </h1>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    {
                        notes
                            .sort((a, b) => Date.parse(b.publishedOn) - Date.parse(a.publishedOn))
                            .map(sheet =>
                                <Col md={4} className="item-card" key={sheet.id}>
                                    <NotesCard sheet={sheet}/>
                                </Col>
                            )
                    }
                </Row>
            </Container>
        </Container>
    } else {
        return <ErrorWithPicture img={comingSoon} alt="Coming Soon!!!"/>
    }
};

export default Notes;
