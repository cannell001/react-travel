import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Search from "./components/Search";
import Popular from "./components/Popular";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

import "./styles.css";

function App() {
  return (
    <Router>
        <div className="App scrollspy">
            <Navbar />
            <Route path="/" component={Slider} />
            <Route path="/search" component={Search} />
            <Route path="/popular" component={Popular} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
  );
}

const rootElement = document.getElementById("home");
ReactDOM.render(<App />, rootElement);
