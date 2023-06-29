import ItemCard from "../commons/ItemCard.jsx";
import PropTypes from "prop-types";
import {CgFileDocument} from "react-icons/cg";

const LyricsCard = ({lyrics}) => {
    return (
        <ItemCard
            icon={<CgFileDocument style={{marginBottom: "2px"}}/>}
            title={lyrics.title}
            description={`Content: ${lyrics.contentDescription}`}
            previewUrl={`${lyrics.pdfUrl}/preview`}
            detailsUrl={`/lyrics/${lyrics.id}`}
        />
    );
};

LyricsCard.propTypes = {
    lyrics: PropTypes.object
}

export default LyricsCard;
