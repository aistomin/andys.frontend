import {useState, useEffect} from "react";
import Preloader from "./components/Pre.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
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

function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);
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
                    <Route path="/videos" element={<Projects/>}/>
                    <Route path="/notes" element={<Projects/>}/>
                    <Route path="/lyrics" element={<Projects/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
