import {useParams} from "react-router-dom";
import {useStoreState} from "easy-peasy";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {AiOutlineDownload} from "react-icons/ai";
import NotFound from "../errors/NotFound.jsx";

const NotesSheet = () => {

    const {id} = useParams()

    const getSheetById = useStoreState((state) => state.getSheetById);
    const sheet = getSheetById(id)

    if (sheet) {
        return (
            <Container fluid className="music-sheet">
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <a href={sheet.pdfUrl} target="_blank" rel="noopener noreferrer" download>
                        <Button variant="primary" className="notes-sheet-button">
                            <AiOutlineDownload/>
                            &nbsp;Download PDF
                        </Button>
                    </a>
                </Row>
                <Row className="big-pdf-preview">
                    <iframe src={`${sheet.pdfUrl}/preview`} width="640" height="480" className="embed-responsive-item">
                    </iframe>
                </Row>
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <a href={sheet.gpUrl} target="_blank" rel="noopener noreferrer" download>
                        <Button variant="primary" className="notes-sheet-button">
                            <AiOutlineDownload/>
                            &nbsp;Download GuitarPro File
                        </Button>
                    </a>
                </Row>
            </Container>
        );
    } else {
        return <NotFound/>
    }
};

export default NotesSheet;
