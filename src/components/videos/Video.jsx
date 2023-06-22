import {Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import data from "../../assets/data.json";
import UnderConstruction from "../errors/UnderConstruction.jsx";
import Button from "react-bootstrap/Button";
import parse from 'html-react-parser';

const Video = () => {

    const {id} = useParams()

    if (data.videos && data.videos.length > 0) {
        const video = data.videos.find(v => (v.id).toString() === id)
        const lyrics = video && video.lyrics && video.lyrics.map(l =>
            <span key={l.id}><Link to={`/lyrics/${l.id}`} key={l.id}>
                <Button variant="primary">
                    {l.title}
                </Button>
            </Link>&nbsp;</span>
        );
        const sheets = video && video.sheets && video.sheets.map(s =>
            <span key={s.id}><Link to={`/sheets/${s.id}`} key={s.id}>
                <Button variant="outline-primary" className="video-button">
                    {s.title}
                </Button>
            </Link>&nbsp;</span>
        );
        if (video) {
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
                                {lyrics}
                                <br/>
                                <br/>
                                {sheets}
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
