import {action, computed, createStore} from "easy-peasy";

export default createStore({
    videos: [],
    setVideos: action((state, payload) => {
        state.videos = payload;
    }),
    getVideoById: computed((state) => {
        return (id) => state.videos.find(video => (video.id).toString() === id);
    }),

    sheets: [],
    setSheets: action((state, payload) => {
        state.sheets = payload;
    }),
    getSheetById: computed((state) => {
        return (id) => state.sheets.find(sheet => (sheet.id).toString() === id);
    }),
});
