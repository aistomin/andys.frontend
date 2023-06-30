import {useParams} from "react-router-dom";
import {useStoreState} from "easy-peasy";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {AiOutlineDownload} from "react-icons/ai";
import NotFound from "../errors/NotFound.jsx";

const SongLyrics = () => {

    const {id} = useParams()

    const getLyricsById = useStoreState((state) => state.getLyricsById);
    const lyrics = getLyricsById(id)

    if (lyrics) {
        return (
            <Container fluid className="song-lyrics">
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <a href={lyrics.pdfUrl} target="_blank" rel="noopener noreferrer" download>
                        <Button variant="primary" className="download-lyrics-button">
                            <AiOutlineDownload/>
                            &nbsp;Download PDF
                        </Button>
                    </a>
                </Row>
                <Row className="big-pdf-preview">
                    <iframe src={`${lyrics.pdfUrl}/preview`} width="640" height="480" className="embed-responsive-item">
                    </iframe>
                </Row>
            </Container>
        );
    } else {
        return <NotFound/>
    }
};

export default SongLyrics;
