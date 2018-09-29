import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Search from "./components/Search";
import Iconbox from "./components/Iconbox";
import Popular from "./components/Popular";
import Follow from "./components/Follow";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles.css";

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <Route path="/" component={Slider} />
            <Route path="/search" component={Search} />
            <Iconbox />
        <Route path="/popular" component={Popular} />
        <Follow />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("home");
ReactDOM.render(<App />, rootElement);
