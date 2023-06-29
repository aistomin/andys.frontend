import UnderConstruction from "../errors/UnderConstruction.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {useStoreState} from "easy-peasy";
import ItemCard from "../commons/ItemCard.jsx";
import {CgFileDocument} from "react-icons/cg";

const Lyrics = () => {

    const lyrics = useStoreState((state) => state.lyrics);

    if (lyrics.length > 0) {
        return <Container fluid className="lyrics-content">
            <Container>
                <h1 className="lyrics-heading">
                    My latest <strong className="purple">Lyrics</strong>
                </h1>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    {
                        lyrics
                            .sort((a, b) => Date.parse(b.publishedOn) - Date.parse(a.publishedOn))
                            .map(song =>
                                <Col md={4} className="item-card" key={song.id}>
                                    <ItemCard
                                        icon={<CgFileDocument style={{marginBottom: "2px"}}/>}
                                        title={song.title}
                                        description={`Content: ${song.contentDescription}`}
                                        previewUrl={`${song.pdfUrl}/preview`}
                                        detailsUrl={`/lyrics/${song.id}`}
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

export default Lyrics;
