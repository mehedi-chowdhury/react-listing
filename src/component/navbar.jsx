import React, {Component} from 'react';
import {Outlet, Link, NavLink} from "react-router-dom";
import movies from "./movie";
import Home from "./home";

class Navbar extends Component {
    render() {
    return(
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src={require('../logo.png')} className="img-fluid" />
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><Link to={"/"} className="nav-link px-2 link-secondary">HOME</Link></li>
                <li><Link to="/movie" className="nav-link px-2 link-dark">AVAILABLE PROPERTIES</Link></li>
                <NavLink className="nav-item nav-link" to="/movies">
                    Movies
                </NavLink>
                <li><a href="#" className="nav-link px-2 link-dark">APPLICATION</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">ABOUT</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">F.A.Q</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">CONTACT</a></li>
            </ul>

            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-primary me-2">LOGIN</button>
                <button type="button" className="btn btn-primary">SIGN-UP</button>
            </div>
        </header>
    );
    }
}

export default Navbar;