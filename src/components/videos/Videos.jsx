// todo: Issue-#28 Load the data from server.
import data from "../../assets/data.json"
import UnderConstruction from "../errors/UnderConstruction.jsx";
import {Col, Container, Row} from "react-bootstrap";
import VideoCard from "./VideoCard.jsx";

const Videos = () => {
    if (data.videos && data.videos.length > 0) {
        return <Container fluid className="videos-content">
            <Container>
                <h1 className="videos-heading">
                    My latest <strong className="purple">Videos</strong>
                </h1>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    {
                        data.videos
                            .sort((a, b) => Date.parse(b.publishedOn) - Date.parse(a.publishedOn))
                            .map(video =>
                                <Col md={4} className="project-card" key={video.id}>
                                    <VideoCard
                                        id={video.id}
                                        title={video.title}
                                        description={video.description}
                                        url={video.url}
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

export default Videos;
