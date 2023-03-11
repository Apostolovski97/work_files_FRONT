import React, { Component } from "react";

class SideBar extends Component {
  render() {
    const { sideBar, changeGroup, changeLeague, changeAll, dataAll } =
      this.props;
    return (
      <div className="side-bar-container">
        <div
          className={`category-box ${
            dataAll.selected ? "category-active" : "category-inactive"
          }`}
          onClick={() => changeAll()}
        >
          <p className="category-text">{dataAll.category}</p>
        </div>
        {sideBar.map((group) => (
          <div key={group._id} className="side-bar-box">
            <div className="category-box" onClick={() => changeGroup(group)}>
              <p className="category-text">{group.category}</p>
            </div>
            <div className="leagues">
              {group.selected &&
                group.leagues.map((league) => (
                  <div
                    key={league._id}
                    className={`league-box ${
                      league.selected ? "league-active" : ""
                    }`}
                    onClick={() => changeLeague(group, league)}
                  >
                    <img className="icon-side-bar" src={league.logo} alt="" />
                    <p className="league-title">{league.league}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SideBar;
