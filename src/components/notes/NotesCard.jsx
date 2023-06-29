import ItemCard from "../commons/ItemCard.jsx";
import PropTypes from "prop-types";
import {CgMusicNote} from "react-icons/cg";

const NotesCard = ({sheet}) => {
    return (
        <ItemCard
            icon={<CgMusicNote style={{marginBottom: "2px"}}/>}
            title={sheet.title}
            description={`Content: ${sheet.contentDescription}`}
            previewUrl={`${sheet.pdfUrl}/preview`}
            detailsUrl={`/notes/${sheet.id}`}
        />
    );
};

NotesCard.propTypes = {
    sheet: PropTypes.object
}

export default NotesCard;
