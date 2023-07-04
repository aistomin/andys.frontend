import UnderConstruction from "../errors/UnderConstruction.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {useStoreState} from "easy-peasy";
import LyricsCard from "./LyricsCard.jsx";

const Lyrics = () => {

    const lyrics = useStoreState((state) => state.lyrics);

    if (lyrics.length > 0) {
        return <Container fluid className="page-content">
            <Container>
                <h1 className="page-heading">
                    My latest <strong className="purple">Lyrics</strong>
                </h1>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    {
                        lyrics
                            .sort((a, b) => Date.parse(b.publishedOn) - Date.parse(a.publishedOn))
                            .map(song =>
                                <Col md={4} className="item-card" key={song.id}>
                                    <LyricsCard lyrics={song}/>
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
