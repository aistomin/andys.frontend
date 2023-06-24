import {useParams} from "react-router-dom";
import {useStoreState} from "easy-peasy";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {AiOutlineDownload} from "react-icons/ai";

const NotesSheet = () => {

    const {id} = useParams()

    const getSheetById = useStoreState((state) => state.getSheetById);
    const sheet = getSheetById(id)

    return (
        <Container fluid className="music-sheet">
            <Row style={{justifyContent: "center", position: "relative"}}>
                <a href={sheet.pdfUrl} target="_blank" rel="noopener noreferrer" download>
                    <Button variant="primary">
                        <AiOutlineDownload/>
                        &nbsp;Download PDF
                    </Button>
                </a>
            </Row>
            <Row className="resume">
                <iframe src={`${sheet.pdfUrl}/preview`} width="640" height="480">
                </iframe>
            </Row>
            <Row style={{justifyContent: "center", position: "relative"}}>
                <a href={sheet.gpUrl} target="_blank" rel="noopener noreferrer" download>
                    <Button variant="primary">
                        <AiOutlineDownload/>
                        &nbsp;Download GuitarPro File
                    </Button>
                </a>
            </Row>
        </Container>
    );
};

export default NotesSheet;
