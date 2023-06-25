import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import parse from "html-react-parser";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";

function VideoCard({id, title, description, url}) {
    return (
        <Card className="card-view">
            <div className="ratio ratio-16x9">
                <iframe title="Embeds Page" className="embed-responsive-item"
                        src={url}
                        allowFullScreen></iframe>
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <br/>
                <Card.Text style={{textAlign: "justify"}}>
                    {description ? parse(description.split("</p>")[0].replace("<p>", "")) : ""}
                </Card.Text>
                <br/>
                <Link to={`/videos/${id}`}>
                    <Button variant="primary">
                        <AiOutlineFundProjectionScreen
                            style={{marginBottom: "2px"}}
                        />{" "} Details
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
