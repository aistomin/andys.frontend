import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import parse from "html-react-parser";
import ItemCard from "../commons/ItemCard.jsx";
import PropTypes from "prop-types";

const VideoCard = ({video}) => {
    return (
        <ItemCard
            icon={<AiOutlineFundProjectionScreen style={{marginBottom: "2px"}}/>}
            title={video.title}
            description={video.description ? parse(video.description.split("</p>")[0].replace("<p>", "")) : ""}
            previewUrl={video.url}
            detailsUrl={`/videos/${video.id}`}
        />
    );
};

VideoCard.propTypes = {
    video: PropTypes.object
}

export default VideoCard;
