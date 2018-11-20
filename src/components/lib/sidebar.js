import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Home, User } from 'react-feather';

const iconSize = 16;

class SideBar extends Component {
  render() {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                    <NavLink to="/" className="nav-link" activeClassName="active">
                        <Home size={iconSize} />&nbsp;&nbsp;Dashboard
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/users" className="nav-link" activeClassName="active">
                        <User size={iconSize} />
                        &nbsp;&nbsp;Users
                    </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default SideBar;
