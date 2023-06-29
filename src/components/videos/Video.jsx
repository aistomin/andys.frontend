import {Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import parse from 'html-react-parser';
import {CgFileDocument, CgMusicNote, CgYoutube} from "react-icons/cg";
import {useStoreState} from "easy-peasy";
import NotFound from "../errors/NotFound.jsx";

const Video = () => {

    const {id} = useParams()

    const getVideoById = useStoreState((state) => state.getVideoById);
    const video = getVideoById(id)

    if (video) {
        let lyrics;
        if (video.lyrics && video.lyrics.length > 0) {
            const l = video.lyrics[0]
            lyrics = <Link to={`/lyrics/${l.id}`} style={{paddingLeft: '2em'}}>
                <Button variant="primary" style={{maxWidth: "250px"}}>
                    <CgFileDocument/> &nbsp;
                    Song Lyrics
                </Button>
            </Link>;
        }
        let sheet
        if (video.sheets && video.sheets.length > 0) {
            const s = video.sheets[0]
            sheet = <Link to={`/notes/${s.id}`} style={{paddingLeft: '2em'}}>
                <Button variant="primary" style={{maxWidth: "250px"}}>
                    <CgMusicNote/> &nbsp;
                    Notes/Tabs
                </Button>
            </Link>;
        }
        return (
            <Container fluid className="video-content">
                <Container>
                    <Row>
                        <Col md={6} className="embedded-video embed-responsive embed-responsive-16by9">
                            <div className="ratio ratio-16x9">
                                <iframe title="Embeds Page" className="embed-responsive-item"
                                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                        allowFullScreen></iframe>
                            </div>
                            <br/>
                            <div>
                                <span>
                                    <Button
                                        variant="primary"
                                        style={{maxWidth: "250px"}}
                                        target="_blank"
                                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}>
                                            <CgYoutube/> &nbsp;
                                        Go to YouTube
                                    </Button>
                                </span>
                                {sheet}
                                {lyrics}
                            </div>
                        </Col>
                        <Col md={6}>
                            <h1 className="video-title">
                                {video.title}
                            </h1>
                            <div className="video-description">
                                {video.description ? parse(video.description) : ""}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    } else {
        return <NotFound/>
    }
};

export default Video;
