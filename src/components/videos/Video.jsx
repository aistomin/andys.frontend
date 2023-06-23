import {Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import data from "../../assets/data.json";
import UnderConstruction from "../errors/UnderConstruction.jsx";
import Button from "react-bootstrap/Button";
import parse from 'html-react-parser';
import {CgFileDocument, CgMusicNote} from "react-icons/cg";

const Video = () => {

    const {id} = useParams()

    if (data.videos && data.videos.length > 0) {
        const video = data.videos.find(v => (v.id).toString() === id)
        if (video) {
            let lyrics;
            if (video.lyrics && video.lyrics.length > 0) {
                const l = video.lyrics[0]
                lyrics = <Link to={`/lyrics/${l.id}`}>
                    <Button variant="primary">
                        <CgFileDocument/> &nbsp;
                        Lyrics
                    </Button>
                </Link>;
            }
            let sheet
            if (video.sheets && video.sheets.length > 0) {
                const s = video.sheets[0]
                sheet = <Link to={`/sheets/${s.id}`}>
                    <Button variant="primary">
                        <CgMusicNote/> &nbsp;
                        Notes/Tabs
                    </Button>
                </Link>;
            }
            return (
                <Container fluid className="video-content">
                    <Container>
                        <Row>
                            <Col md={6} className="video-block">
                                <h1 className="video-title">
                                    {video.title}
                                </h1>
                                <p className="video-description">
                                    {video.description ? parse(video.description) : ""}
                                </p>
                            </Col>
                            <Col md={6} className="embedded-video embed-responsive embed-responsive-16by9">
                                <div className="ratio ratio-16x9">
                                    <iframe title="Embeds Page" className="embed-responsive-item"
                                            src={video.url}
                                            allowFullScreen></iframe>
                                </div>
                                <br/>
                                <div>
                                    {lyrics}
                                    {"\n"}
                                    {"\n"}
                                    {sheet}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            );
        } else {
            return <UnderConstruction/>
        }
    } else {
        return <UnderConstruction/>
    }
};

export default Video;
