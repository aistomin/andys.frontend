import {useState, useEffect} from "react";
import Preloader from "./components/Pre.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home.jsx";
import Videos from "./components/videos/Videos.jsx";
import Video from "./components/videos/Video.jsx";
import {useStoreActions} from "easy-peasy";
import data from "./assets/data.json"
import NotesSheet from "./components/notes/NotesSheet.jsx";
import Notes from "./components/notes/Notes.jsx";
import SongLyrics from "./components/lyrics/SongLyrics.jsx";
import Lyrics from "./components/lyrics/Lyrics.jsx";
import ContactMe from "./components/contact/ContactMe.jsx";

function App() {

    const setVideos = useStoreActions((actions) => actions.setVideos);
    const setSheets = useStoreActions((actions) => actions.setSheets);
    const setLyrics = useStoreActions((actions) => actions.setLyrics);

    const [load, updateLoad] = useState(true);

    useEffect(() => {
        // todo: Issue-#28 Load the data from server.
        console.log("Load data .....")
        const videos = data.videos
        setVideos(videos && videos.length > 0 ? videos : []);
        const sheets = data.sheets
        setSheets(sheets && sheets.length > 0 ? sheets : []);
        const lyrics = data.lyrics
        setLyrics(lyrics && lyrics.length > 0 ? lyrics : []);
        updateLoad(false)
        console.log("Data are loaded.")
    }, []);

    return (
        <Router>
            <Preloader load={load}/>
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar/>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/videos">
                        <Route index element={<Videos/>}/>
                        <Route path=":id" element={<Video/>}/>
                    </Route>
                    <Route path="/notes">
                        <Route index element={<Notes/>}/>
                        <Route path=":id" element={<NotesSheet/>}/>
                    </Route>
                    <Route path="/lyrics">
                        <Route index element={<Lyrics/>}/>
                        <Route path=":id" element={<SongLyrics/>}/>
                    </Route>
                    <Route path="/contact/me" element={<ContactMe/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
