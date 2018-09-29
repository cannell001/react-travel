import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <div className="navbar-fixed scrollspy">
            <nav className="teal">
                <div className="container">
                    <div className="nav-wrapper">
                        <a className="brand-logo">Travelville</a>
                        <a data-target="mobile-nav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/">Slider</Link>
                            </li>
                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                            <li>
                                <Link to="/popular">Popular Places</Link>
                            </li>
                            <li>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <ul className="sidenav" id="mobile-nav">
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/search">Search</Link>
            </li>
            <li>
                <Link to="/popular">Popular Places</Link>
            </li>
            <li>
                <Link to="/gallery">Gallery</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  );
};

export default Navbar;
