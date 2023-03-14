import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { dataHeader: icon, value, onChange, changeMain } = this.props;
    return (
      <div className="header">
        <div className="container header-container">
          <div className="logo-box">
            <Link to={"/"} onClick={() => changeMain()}>
              <svg className="icon-logo">
                <use href={icon.logo}></use>
              </svg>
            </Link>
          </div>
          <div className="search-input-box flex-cc">
            <input
              className="search-input"
              tabIndex={"1"}
              type="text"
              placeholder="Search..."
              value={value}
              onChange={(e) => onChange(e.currentTarget.value)}
            />
            <div className="search-icon-box flex-cc">
              <svg className="icon-20">
                <use href={icon.search}></use>
              </svg>
            </div>
          </div>
          <div className="flex-cc">
            <Link to={"/account"} className="account flex-cc">
              <svg className="icon-20">
                <use href={icon.account}> </use>
              </svg>
              Login
            </Link>
            <Link to={"/settings"} className="settings flex-cc">
              <svg className="icon-20">
                <use href={icon.settings}> </use>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
