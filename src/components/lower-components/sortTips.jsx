import React, { Component } from "react";

class SortTips extends Component {
  render() {
    const {
      sortTips,
      changeTips,
      calendar,
      changeDate,
      renderDate,
      yesterday,
      tomorrow,
      sideBar,
      query,
    } = this.props;

    const leagueSelected = sideBar.some((group) =>
      group.leagues.some((league) => league.selected === true)
    );
    return (
      <div className="sort-tips-container">
        <div className="flex-cc">
          {sortTips.map((sortTip) => (
            <button
              key={sortTip._id}
              className={`sort-btn ${sortTip.selected ? "sort-active" : ""}`}
              onClick={() => changeTips(sortTip)}
            >
              {sortTip.tip}
            </button>
          ))}
        </div>
        {!leagueSelected && query === "" && (
          <div className="calendar-container">
            <div className="calendar-box flex-cc">
              <button
                disabled={calendar.calendar.title === "Today" ? true : false}
                className="yesterday flex-cc"
                onClick={yesterday}
              >
                <svg className="icon-15 chevron-left">
                  <use href={calendar.chevron}></use>
                </svg>
              </button>
              <div className="calendar flex-cc" onClick={renderDate}>
                <svg className="icon-15">
                  <use href={calendar.calendar.logo}></use>
                </svg>
                <p className="calendar-text">{calendar.calendar.title}</p>
              </div>
              <button
                disabled={
                  calendar.calendar.date === calendar.days[6].date
                    ? true
                    : false
                }
                className="tomorrow flex-cc"
                onClick={tomorrow}
              >
                <svg className="icon-15 chevron-right">
                  <use href={calendar.chevron}></use>
                </svg>
              </button>
            </div>
            {calendar.calendar.selected && (
              <div className="days">
                {calendar.days.map((day) => (
                  <div
                    key={day._id}
                    className={`day ${day.selected ? "day-active" : ""}`}
                    onClick={() => changeDate(day)}
                  >
                    {day.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SortTips;
