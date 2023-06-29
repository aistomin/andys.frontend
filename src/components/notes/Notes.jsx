import UnderConstruction from "../errors/UnderConstruction.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {useStoreState} from "easy-peasy";
import ItemCard from "../commons/ItemCard.jsx";
import {CgMusicNote} from "react-icons/cg";

const Notes = () => {

    const notes = useStoreState((state) => state.sheets);

    if (notes.length > 0) {
        return <Container fluid className="music-sheets-content">
            <Container>
                <h1 className="music-sheets-heading">
                    My latest <strong className="purple">Music Sheets</strong>
                </h1>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    {
                        notes
                            .sort((a, b) => Date.parse(b.publishedOn) - Date.parse(a.publishedOn))
                            .map(sheet =>
                                <Col md={4} className="item-card" key={sheet.id}>
                                    <ItemCard
                                        icon={<CgMusicNote style={{marginBottom: "2px"}}/>}
                                        title={sheet.title}
                                        description={`Content: ${sheet.contentDescription}`}
                                        previewUrl={`${sheet.pdfUrl}/preview`}
                                        detailsUrl={`/notes/${sheet.id}`}
                                    />
                                </Col>
                            )
                    }
                </Row>
            </Container>
        </Container>
    } else {
        return <UnderConstruction/>
    }
};

export default Notes;
