import UnderConstruction from "../errors/UnderConstruction.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {useStoreState} from "easy-peasy";
import ItemCard from "../commons/ItemCard.jsx";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import parse from "html-react-parser";

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
                                    <ItemCard
                                        icon={<AiOutlineFundProjectionScreen style={{marginBottom: "2px"}}/>}
                                        title={video.title}
                                        description={video.description ? parse(video.description.split("</p>")[0].replace("<p>", "")) : ""}
                                        previewUrl={video.url}
                                        detailsUrl={`/videos/${video.id}`}
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
