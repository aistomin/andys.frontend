import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function ItemCard({icon, title, description, previewUrl, detailsUrl}) {
    return (
        <Card className="item-card-view">
            <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src={previewUrl} allowFullScreen/>
            </div>
            <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <br/>
                <Card.Text className="card-text">
                    {description}
                </Card.Text>
                <br/>
                <Link to={detailsUrl} className="card-link">
                    <Button variant="primary" className="card-button">
                        {icon}{" "} Details
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

ItemCard.propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string,
    description: PropTypes.string,
    previewUrl: PropTypes.string,
    detailsUrl: PropTypes.string
};

export default ItemCard;
