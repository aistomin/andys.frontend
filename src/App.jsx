import {useState, useEffect} from "react";
import Preloader from "./components/Pre.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate, useLocation
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
import {ErrorBoundary, Provider} from "@rollbar/react";
import * as ReactGA from "react-ga";

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

    const isProduction = () => {
        const env = process.env.VITE_APP_ENV
        console.log("Environment: ", env)
        const prod = env === 'production';
        if (prod) {
            console.log("We are working in the production environment.")
        } else {
            console.log("We are working in the non-production environment.")
        }
        return prod;
    }

    const rollbar = isProduction() ? {
        accessToken: '486104524f0e4a288562b1d83181002b',
        environment: 'production',
    } : {};

    if (isProduction()) {
        ReactGA.initialize('G-4SXDKGJQS6');
        const location = useLocation();
        useEffect(() => {
            ReactGA.pageview(location.pathname + location.search);
        }, [location]);
    }

    return (
        <Provider config={rollbar}>
            <ErrorBoundary>
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
                            <Route path="/contact" element={<ContactMe/>}/>
                            <Route path="*" element={<Navigate to="/"/>}/>
                        </Routes>
                        <Footer/>
                    </div>
                </Router>
            </ErrorBoundary>
        </Provider>
    );
}

export default App;
