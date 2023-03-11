import React, { Component } from "react";
import SideBar from "./lower-components/sideBar";
import Heading from "./lower-components/heading";
import SortTips from "./lower-components/sortTips";
import MatchEvent from "./lower-components/matchEvent";
import Ads from "./lower-components/ads";

class Main extends Component {
  render() {
    const {
      changeGroup,
      dataSideBar,
      dataHeading,
      dataSortTips,
      dataEvents,
      clickTip,
      changeTips,
      changeLeague,
      dataCalendar,
      renderDate,
      changeDate,
      yesterday,
      tomorrow,
      changeAll,
      dataAll,
      query,
      calendar2023,
    } = this.props;
    return (
      <div className="main">
        <div className="container main-container">
          <SideBar
            changeGroup={changeGroup}
            sideBar={dataSideBar}
            changeLeague={changeLeague}
            changeAll={changeAll}
            dataAll={dataAll}
          />
          <div className="main-events-container">
            <Heading heading={dataHeading} />
            <SortTips
              sideBar={dataSideBar}
              sortTips={dataSortTips}
              changeTips={changeTips}
              calendar={dataCalendar}
              renderDate={renderDate}
              changeDate={changeDate}
              yesterday={yesterday}
              tomorrow={tomorrow}
              query={query}
            />
            <MatchEvent
              dataEvents={dataEvents}
              clickTip={clickTip}
              sortTips={dataSortTips}
              calendar2023={calendar2023}
            />
          </div>
          <Ads />
        </div>
      </div>
    );
  }
}

export default Main;
