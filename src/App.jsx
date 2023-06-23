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
import Home from "./components/Home/Home.jsx";
import UnderConstruction from "./components/errors/UnderConstruction.jsx";
import Videos from "./components/videos/Videos.jsx";
import Video from "./components/videos/Video.jsx";
import {useStoreActions} from "easy-peasy";
import data from "./assets/data.json"

function App() {

    const setVideos = useStoreActions((actions) => actions.setVideos);

    const [load, updateLoad] = useState(true);

    useEffect(() => {
        // todo: Issue-#28 Load the data from server.
        console.log("Load videos .....")
        const videos = data.videos
        setVideos(videos && videos.length > 0 ? videos : []);
        updateLoad(false)
        console.log("Videos are loaded.")
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
                    <Route path="/notes" element={<UnderConstruction/>}/>
                    <Route path="/lyrics" element={<UnderConstruction/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
