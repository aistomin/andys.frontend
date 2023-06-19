import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function VideoCard({id, title, description, url}) {
    return (
        <Card className="video-card-view">
            <iframe src={url} height="300"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>
                    {description}
                </Card.Text>
                <Link to={`/videos/${id}`}>
                    <Button variant="primary">
                        Details
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

VideoCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string
};

export default VideoCard;
