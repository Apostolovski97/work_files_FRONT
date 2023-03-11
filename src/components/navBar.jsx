import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    const { dataNavBar, changeMain } = this.props;
    return (
      <div className="nav-bar">
        <nav className="container nav-container flex-cc">
          {dataNavBar.map((nav) => (
            <NavLink
              key={nav._id}
              onClick={() => changeMain()}
              className="nav-link"
              to={nav.path}
            >
              <div className="flex-cc">
                <svg className="icon-nav">
                  <use href={nav.logo}> </use>
                </svg>
              </div>
              <p className="nav-text">{nav.title}</p>
            </NavLink>
          ))}
        </nav>
      </div>
    );
  }
}

export default NavBar;
