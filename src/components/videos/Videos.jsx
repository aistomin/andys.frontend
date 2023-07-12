import {Col, Container, Row} from "react-bootstrap";
import {useStoreState} from "easy-peasy";
import VideoCard from "./VideoCard.jsx";
import ErrorWithPicture from "../errors/ErrorWithPicture.jsx";
import comingSoon from "../../assets/coming_soon.svg"

const Videos = () => {

    const videos = useStoreState((state) => state.videos);

    if (videos.length > 0) {
        return <Container fluid className="page-content">
            <Container>
                <h1 className="page-heading">
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
        return <ErrorWithPicture img={comingSoon} alt="Coming Soon!!!"/>
    }
};

export default Videos;
