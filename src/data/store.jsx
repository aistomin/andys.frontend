import {action, computed, createStore} from "easy-peasy";

export default createStore({
    videos: [],
    setVideos: action((state, payload) => {
        state.videos = payload;
    }),
    getVideoById: computed((state) => {
        return (id) => state.videos.find(video => (video.id).toString() === id);
    })
});
