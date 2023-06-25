import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {CgMusicNote} from "react-icons/cg";

function NotesCard({id, title, description, url}) {
    return (
        <Card className="card-view">
            <div className="ratio ratio-16x9">
                <iframe src={`${url}/preview`}/>
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <br/>
                <Card.Text style={{textAlign: "justify"}}>
                    Content: {description}
                </Card.Text>
                <br/>
                <Link to={`/notes/${id}`}>
                    <Button variant="primary">
                        <CgMusicNote style={{marginBottom: "2px"}}/> Details
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

NotesCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string
};

export default NotesCard;
