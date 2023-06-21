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

function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 0);
        return () => clearTimeout(timer);
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
                        <Route path=":id" element={<UnderConstruction/>}/>
                    </Route>
                    <Route path="/notes" element={<UnderConstruction/>}/>
                    <Route path="/lyrics" element={<UnderConstruction/>}/>
                    <Route path="/video" element={<UnderConstruction/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
