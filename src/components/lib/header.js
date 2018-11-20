import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  
  render() {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0">Company name</Link>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                <Link to="/logout" className="nav-link">Sign out</Link>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Header;
