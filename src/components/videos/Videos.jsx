import UnderConstruction from "../errors/UnderConstruction.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {useStoreState} from "easy-peasy";
import VideoCard from "./VideoCard.jsx";

const Videos = () => {

    const videos = useStoreState((state) => state.videos);

    if (videos.length > 0) {
        return <Container fluid className="videos-content">
            <Container>
                <h1 className="videos-heading">
                    My latest <strong className="purple">Videos</strong>
                </h1>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    {
                        videos
                            .sort((a, b) => Date.parse(b.publishedOn) - Date.parse(a.publishedOn))
                            .map(video =>
                                <Col md={4} className="item-card" key={video.id}>
                                    <VideoCard video={video}/>
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

export default Videos;
