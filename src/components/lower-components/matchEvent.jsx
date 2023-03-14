import React, { Component } from "react";
import { Link } from "react-router-dom";

class MatchEvent extends Component {
  render() {
    const { clickTip, dataEvents, calendar2023 } = this.props;
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minute < 10) {
      minute = `0${minute}`;
    }
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    const today = `${day}.${month}`;
    const time = `${hour}:${minute}`;
    //
    const date = calendar2023.filter((day) => day.date === today);
    const dIndex = calendar2023.indexOf(date[0]);
    return (
      <div className="match-container">
        {dataEvents.length === 0 ? (
          <p>No match found.</p>
        ) : (
          <div className="match-events">
            {dataEvents.map((event) => (
              <div className="match-event" key={event._id}>
                <div className="league">{event.league}</div>
                <div className="match-body flex-cc">
                  <div className="match-time">
                    {event.date === today ? event.time : event.date}
                  </div>
                  <Link to={"/match-details"} className="match-teams">
                    <div className="home-team">
                      <img
                        className="icon-15"
                        src={event.logoHomeTeam}
                        alt="Logo of home team"
                      />
                      <p className="team-title">{event.homeTeam}</p>
                    </div>
                    <div className="away-team">
                      <img
                        className="icon-15"
                        src={event.logoAwayTeam}
                        alt="Logo awat team"
                      />
                      <p className="team-title">{event.awayTeam}</p>
                    </div>
                  </Link>
                  <div className="selection-tips flex-cc">
                    {this.renderTips(event).map((tip) => (
                      <button
                        disabled={
                          (time >= event.time && event.date === today) ||
                          event.date === calendar2023[dIndex - 1].date
                            ? true
                            : false ||
                              this.renderTips(event).some((tip) => tip.selected)
                        }
                        key={tip.index}
                        className={`btn ${tip.selected ? "btn-active" : ""} ${
                          (event.sport === "tennis" ||
                            event.sport === "american-football") &&
                          tip.tip === "X"
                            ? "tam"
                            : ""
                        }`}
                        onClick={() =>
                          clickTip(
                            this.renderTips(event)[tip.index],
                            this.findKey(event, this.renderTips(event)),
                            this.renderVoted(event),
                            this.renderMetar(event),
                            this.rednderResultText(event),
                            event
                          )
                        }
                      >
                        {this.renderTips(event).length === 2
                          ? `${tip.tip} ${tip.limit}`
                          : `${tip.tip}`}
                      </button>
                    ))}
                  </div>
                  <div className="result flex-cc">
                    <div className="metar flex-cc ">
                      <div className="circular-progress">
                        <svg>
                          <circle cx="20" cy="20" r="24"></circle>
                          <circle
                            cx="20"
                            cy="20"
                            r="24"
                            style={{
                              strokeDashoffset: `calc(151 - (151 * ${
                                this.renderMetar(event).metar
                              }) / 100)`,
                              stroke: "dodgerblue",
                            }}
                          ></circle>
                        </svg>
                        <span className="progress-value flex-cc">{`${
                          this.renderMetar(event).metar
                        }%`}</span>
                      </div>
                    </div>
                    <div className="voted-result flex-cc">
                      <p className="voted-text">
                        {this.rednderResultText(event).resultText}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="match-footer flex-cc">
                  <Link to={"/match-details"} className="comments-box flex-cc">
                    <svg className="icon-20">
                      <use href={event.comments.logo}></use>
                    </svg>

                    <p className="stat-title">{event.comments.title}</p>
                    <p className="stat-number">{event.comments.count}</p>
                  </Link>
                  <Link to={"/match-details"} className="voted-box flex-cc">
                    <svg className="icon-20">
                      <use href={this.renderVoted(event).logo}></use>
                    </svg>
                    <p className="stat-title">
                      {this.renderVoted(event).title}
                    </p>
                    <p className="stat-number">
                      {this.renderVoted(event).count}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  renderTips = (event) => {
    const { sortTips } = this.props;
    if (sortTips[0].selected) {
      return event.tipsA;
    } else if (sortTips[1].selected) {
      return event.tipsB;
    } else if (sortTips[2].selected) {
      return event.tipsC;
    }
  };
  renderMetar = (event) => {
    const { sortTips } = this.props;
    if (sortTips[0].selected) {
      return event.metar[0];
    } else if (sortTips[1].selected) {
      return event.metar[1];
    } else if (sortTips[2].selected) {
      return event.metar[2];
    }
  };
  renderVoted = (event) => {
    const { sortTips } = this.props;
    if (sortTips[0].selected) {
      return event.voted[0];
    } else if (sortTips[1].selected) {
      return event.voted[1];
    } else if (sortTips[2].selected) {
      return event.voted[2];
    }
  };
  rednderResultText = (event) => {
    const { sortTips } = this.props;
    if (sortTips[0].selected) {
      return event.resultText[0];
    } else if (sortTips[1].selected) {
      return event.resultText[1];
    } else if (sortTips[2].selected) {
      return event.resultText[2];
    }
  };
  findKey = (event, tip) => {
    return Object.keys(event).find((key) => event[key] === tip);
  };
}
export default MatchEvent;
