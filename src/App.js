import React, { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
//staticData
import { getAll, getAmericanFootballSideBar, getBasketballSideBar, getCalendar, getCalendar2023, getFootballSideBar, getFooter, getHandballSideBar, getHeader, getHeading, getHockeySideBar, getNavBar, getSortTips, getTennisSideBar } from './dataService/staticData';
//components
import Header from './components/header';
import NavBar from './components/navBar';
import Main from './components/main';
import Footer from './components/footer';
import NotFound from './components/lower-components/mainNotFound';
import Account from './components/lower-components/account';
import Settings from './components/lower-components/settings';
import Match from './components/lower-components/match-details';
//style
import '../src/styles/general.css';
import '../src/styles/header.css';
import '../src/styles/nav-bar.css';
import '../src/styles/main.css';
import '../src/styles/side-bar.css';
import '../src/styles/match-event.css';
import '../src/styles/footer.css';

const apiUrl = process.env.REACT_APP_API_URL

class App extends Component {
  state = {
    userVotes: [],
    allEvents: [],
    dataHeader: {},
    dataNavBar: [],
    dataSideBar: [],
    dataHeading: {},
    dataSortTips: [],
    dataEvents: [],
    dataCalendar: getCalendar(), //SE OTKAZUVAM ODDDD OVAAA
    dataAll: {},
    searchQuery: "",
    footer: getFooter(), //SE OTKAZUVAM OD OVAAAA
    calendar2023: getCalendar2023()
  }
  render() {
    const {
      dataHeader,
      dataNavBar,
      dataHeading,
      dataSortTips,
      dataEvents,
      dataSideBar,
      footer,
      dataCalendar,
      dataAll,
      searchQuery,
      calendar2023,
    } = this.state;
    const routes = ['/football', '/basketball', '/tennis', '/hockey', '/handball', '/american-football'];
    return (
      <>
        <Header dataHeader={dataHeader} value={searchQuery} onChange={this.handleSearch} />
        <NavBar dataNavBar={dataNavBar} changeMain={this.changeMain} />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path='/' element={<Navigate replace to="/football" />} />
          <Route path='/account' element={<Account />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/match-details' element={<Match />} />
          <Route path='/google-app' element={<Account />} />
          <Route path='/apple-app' element={<Account />} />
          {routes.map((path, index) =>
            <Route
              key={index}
              path={path}
              element={<Main
                dataSideBar={dataSideBar}
                dataHeading={dataHeading}
                dataSortTips={dataSortTips}
                dataEvents={dataEvents}
                dataCalendar={dataCalendar}
                dataAll={dataAll}
                changeAll={this.changeAll}
                changeGroup={this.changeGroup}
                changeLeague={this.changeLeague}
                changeTips={this.changeTips}
                clickTip={this.clickTip}
                renderDate={this.renderDate}
                changeDate={this.changeDate}
                yesterday={this.yesterday}
                tomorrow={this.tomorrow}
                query={searchQuery}
                calendar2023={calendar2023}

              />} />)}
        </Routes>
        <Footer footer={footer} />
      </>
    );
  }
  componentDidMount() {
    this.defaultEvents();
    //
    this.defaultSideBar();
    //
    this.defaultCalendar();
    //
    this.defaultSortTips();
    //
    this.defaultAll();
    //
    this.defaultSearchQuery();
    //
    this.defaultNavBar();
    //
    this.defaultHeader();
    //
    this.defaultHeading();
    //
    this.changeLocalStorage();
  }
  changeMain = async () => {
    this.defaultEvents();
    //
    this.defaultSideBar();
    //
    this.defaultCalendar();
    //
    this.defaultSortTips();
    //
    this.defaultAll();
    //
    this.defaultSearchQuery();
  };
  changeAll = () => {
    this.defaultEvents();
    //
    this.defaultSideBar();
    //
    this.defaultCalendar();
    //
    this.defaultSortTips();
    //
    this.defaultAll();
  }
  changeLeague = async (group, league) => {
    setTimeout(async () => {
      const pathName = window.location.pathname;
      const path = ['/football', '/basketball', '/tennis', '/hockey', '/handball', '/american-football'];
      const pindex = path.indexOf(pathName);
      const endPoint = ['Fmatch', 'Bmatch', 'Tmatch', 'HOmatch', 'HAmatch', 'AFmatch']

      const response = await axios.get(`${apiUrl}/${endPoint[pindex]}`);
      response.data.map(e => e.tipsA = JSON.parse(e.tipsA))
      response.data.map(e => e.tipsB = JSON.parse(e.tipsB))
      response.data.map(e => e.tipsC = JSON.parse(e.tipsC))
      response.data.map(e => e.comments = JSON.parse(e.comments))
      response.data.map(e => e.voted = JSON.parse(e.voted))
      response.data.map(e => e.metar = JSON.parse(e.metar))
      response.data.map(e => e.resultText = JSON.parse(e.resultText))
      const matchEvents = response.data
      if (response.statusText === 'OK') {
        this.changeTimeDate(matchEvents);
      }
      const events = response.data
      const leagueEvents = events.filter(event => event.league === league.league)

      const uVotes = JSON.parse(window.localStorage.getItem('VOTED_EVENTS'))
      if (uVotes === null) {
      } else {
        const countEvents = uVotes.length
        for (let i = 0; i <= countEvents - 1; i++) {
          const filtered = leagueEvents.filter(e => e._id === uVotes[i]._id)
          const tipsCountA = 3;
          const tipsCountBC = 2;
          for (let y = 0; y <= tipsCountA - 1; y++) {
            filtered.map(e => e.tipsA[y].selected = uVotes[i].tipsA[y].selected)
          }
          for (let x = 0; x <= tipsCountBC - 1; x++) {
            filtered.map(e => e.tipsB[x].selected = uVotes[i].tipsB[x].selected)
            filtered.map(e => e.tipsC[x].selected = uVotes[i].tipsC[x].selected)
          }
        }
      }
      this.setState({ dataEvents: leagueEvents });
      //
      const { dataSideBar: sideBar } = this.state
      const dataSideBar = [...sideBar]
      const sIndex = dataSideBar.indexOf(group)
      const index = dataSideBar[sIndex].leagues.indexOf(league);
      dataSideBar.map(group => group.leagues.map(league => league.selected = false));
      dataSideBar[sIndex].leagues[index].selected = true;
      this.setState({ dataSideBar });
      //
      const { dataAll: all } = this.state;
      const dataAll = { ...all };
      dataAll.selected = false;
      this.setState({ dataAll });
      //
      this.defaultSortTips();
      //
      this.defaultSearchQuery();
    }, 1)

  }
  changeTips = (tip) => {
    const { dataSortTips: sortTips } = this.state;
    const dataSortTips = [...sortTips];
    const sortIndex = dataSortTips.indexOf(tip);
    dataSortTips[0].selected = false;
    dataSortTips[1].selected = false;
    dataSortTips[2].selected = false;
    dataSortTips[sortIndex].selected = true;
    this.setState({ dataSortTips });
    //
    const { dataSideBar } = this.state;
    const sideBar = [...dataSideBar];
    //
    const { dataEvents } = this.state;
    const events = [...dataEvents];

    //
    const { dataCalendar } = this.state;
    const calendar = { ...dataCalendar };
    //
    const { searchQuery } = this.state;
    //
    const selectedGroup = sideBar.find(group => group.leagues.find(league => league.selected === true));
    const selectedLeague = selectedGroup === undefined ? false : selectedGroup.leagues.find(l => l.selected === true);
    if (searchQuery !== "") {
      const filtered = events.filter(event =>
        event.homeTeam.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
        event.awayTeam.toLowerCase().startsWith(searchQuery.toLowerCase()))
      //
      this.setState({ dataEvents: filtered })
    } else if (searchQuery === "" && !selectedLeague) {
      const filtered = events.filter(event => event.date === calendar.calendar.date)
      this.setState({ dataEvents: filtered })
    } else {
      const filtered = events.filter(event => event.league === selectedLeague.league)

      //
      this.setState({ dataEvents: filtered })
    }
  };
  clickTip = (tip, key, vIndex, mIndex, tIndex, event) => {
    const { dataEvents: events } = this.state;
    const dataEvents = [...events];
    const eIndex = dataEvents.indexOf(event);

    const tips = dataEvents[eIndex][key];
    const index = tips.indexOf(tip);
    const votedIndex = dataEvents[eIndex].voted.indexOf(vIndex);
    const voted = dataEvents[eIndex].voted[votedIndex]
    const metarIndex = dataEvents[eIndex].metar.indexOf(mIndex);
    const metar = dataEvents[eIndex].metar[metarIndex]
    const textIndex = dataEvents[eIndex].resultText.indexOf(tIndex)
    const resultText = dataEvents[eIndex].resultText[textIndex];
    //
    tips.map(tip => tip.selected = false)
    tips[index].selected = true;
    //
    this.calculating(tips, index);
    //
    if (tips.length === 3) {
      metar.metar = Math.max(
        tips[0].percentage,
        tips[1].percentage,
        tips[2].percentage)
      //
      const one = tips[0].percentage;
      const draw = tips[1].percentage;
      const two = tips[2].percentage;
      if (one === 33 && draw === 33 && two === 33)
        resultText.resultText = `Equal for all tips`;
      else if (one > two && one > draw) resultText.resultText = `${dataEvents[eIndex].homeTeam} to win`;
      else if (two > draw && two > one) resultText.resultText = `${dataEvents[eIndex].awayTeam} to win`;
      else if (draw > one && draw > two) resultText.resultText = `Draw`;
      //
      voted.count = tips[0].votes + tips[1].votes + tips[2].votes;
    } else {
      metar.metar = Math.max(
        tips[0].percentage,
        tips[1].percentage,)
      //
      const one = tips[0].percentage;
      const two = tips[1].percentage;
      if (one === 33 && two === 33)
        resultText.resultText = `Equal for all tips`;
      else if (one > two) resultText.resultText = `Under`;
      else if (two > one) resultText.resultText = `Over`;
      //
      voted.count = tips[0].votes + tips[1].votes;
    }
    //
    this.updateLocalStorage(dataEvents, eIndex);
    //
    this.updateInDb(dataEvents, eIndex);
    //
    this.setState({ dataEvents });
  };
  calculating = (tips, index) => {
    let currentTip = tips[index].votes;
    currentTip++;
    // 
    if (tips.length === 3) {
      if (index === 0) {
        //
        const totalVoted = currentTip + tips[1].votes + tips[2].votes;
        tips[index].percentage = Math.round((currentTip / totalVoted) * 100);
        tips[1].percentage = Math.round((tips[1].votes / totalVoted) * 100);
        tips[2].percentage = Math.round((tips[2].votes / totalVoted) * 100);
        tips[index].votes++;
        //
      } else if (index === 1) {
        // 
        const totalVoted = tips[0].votes + currentTip + tips[2].votes;
        tips[0].percentage = Math.round((tips[0].votes / totalVoted) * 100);
        tips[index].percentage = Math.round((currentTip / totalVoted) * 100);
        tips[2].percentage = Math.round((tips[2].votes / totalVoted) * 100);
        tips[index].votes++;
        //
      } else if (index === 2) {
        // 
        const totalVoted = tips[0].votes + tips[1].votes + currentTip;
        tips[0].percentage = Math.round((tips[0].votes / totalVoted) * 100);
        tips[1].percentage = Math.round((tips[1].votes / totalVoted) * 100);
        tips[index].percentage = Math.round((currentTip / totalVoted) * 100);
        tips[index].votes++;
      }
      //
    } else if (tips.length === 2) {
      if (index === 0) {
        //
        const totalVoted = currentTip + tips[1].votes;
        tips[index].percentage = Math.round((currentTip / totalVoted) * 100);
        tips[1].percentage = Math.round((tips[1].votes / totalVoted) * 100);
        tips[index].votes++;
        // 
      } else if (index === 1) {
        // 
        const totalVoted = tips[0].votes + currentTip;
        tips[0].percentage = Math.round((tips[0].votes / totalVoted) * 100);
        tips[index].percentage = Math.round((currentTip / totalVoted) * 100);
        tips[index].votes++;
      }
    }
  }
  changeDate = (currentDay) => {
    const { dataCalendar } = this.state;
    const calendar = { ...dataCalendar }
    const dayIndex = calendar.days.indexOf(currentDay)
    let day = new Date().getDate();
    let month = (new Date().getMonth() + 1);
    if (day < 10) {
      day = `0${day}`
    }
    if (month < 10) {
      month = `0${month}`
    }
    const today = `${day}.${month}`;
    //
    calendar.days.map(day => day.selected = false);
    calendar.days[dayIndex].selected = true;

    if (calendar.days[dayIndex].date === today) {
      calendar.calendar.title = 'Today'
      calendar.calendar.date = today;
    } else {
      calendar.calendar.title = calendar.days[dayIndex].title;
      calendar.calendar.date = calendar.days[dayIndex].date;
    }
    calendar.calendar.selected = false;
    this.setState({ dataCalendar: calendar })
    //
    this.defaultEvents();
    //
    this.defaultSortTips();
    //
    this.defaultSearchQuery();
  }
  yesterday = () => {
    const { dataCalendar } = this.state;
    const calendar = { ...dataCalendar };

    const currentDate = calendar.days.filter(d => d.date === calendar.calendar.date);
    const index = calendar.days.indexOf(currentDate[0])

    calendar.calendar.date = calendar.days[index - 1].date;
    calendar.calendar.title = calendar.days[index - 1].title;
    calendar.calendar.selected = false;

    calendar.days
      .map(day => day.date === calendar.days[index - 1].date ? day.selected = true : day.selected = false)
    this.setState({ dataCalendar: calendar });
    //
    this.defaultEvents();
    //
    this.defaultSortTips();
    //
    this.defaultSearchQuery();
  }
  tomorrow = () => {
    const { dataCalendar } = this.state;
    const calendar = { ...dataCalendar };

    const currentDate = calendar.days.filter(d => d.date === calendar.calendar.date);
    const index = calendar.days.indexOf(currentDate[0])

    calendar.calendar.date = calendar.days[index + 1].date;
    calendar.calendar.title = calendar.days[index + 1].title;
    calendar.calendar.selected = false;

    calendar.days
      .map(day => day.date === calendar.days[index + 1].date ? day.selected = true : day.selected = false)
    this.setState({ dataCalendar: calendar });
    //
    this.defaultEvents();
    //
    this.defaultSortTips();
    //
    this.defaultSearchQuery();
  }
  handleSearch = (query) => {
    const { allEvents } = this.state
    const events = allEvents;
    this.changeTimeDate(events);

    const uVotes = JSON.parse(window.localStorage.getItem('VOTED_EVENTS'))
    if (uVotes === null) {
    } else {
      const countEvents = uVotes.length
      for (let i = 0; i <= countEvents - 1; i++) {
        const filtered = events.filter(e => e._id === uVotes[i]._id)
        const tipsCountA = 3;
        const tipsCountBC = 2;
        for (let y = 0; y <= tipsCountA - 1; y++) {
          filtered.map(e => e.tipsA[y].selected = uVotes[i].tipsA[y].selected)
        }
        for (let x = 0; x <= tipsCountBC - 1; x++) {
          filtered.map(e => e.tipsB[x].selected = uVotes[i].tipsB[x].selected)
          filtered.map(e => e.tipsC[x].selected = uVotes[i].tipsC[x].selected)
        }
      }
    }

    const filtered = events.filter(event =>
      event.homeTeam.toLowerCase().includes(query.toLowerCase()) ||
      event.awayTeam.toLowerCase().includes(query.toLowerCase()))
    this.setState({ dataEvents: filtered });
    const { dataSideBar } = this.state;
    dataSideBar.map(group => group.leagues.map(league => league.selected = false))
    //
    const { dataAll } = this.state;
    dataAll.selected = true;
    this.setState({ dataSideBar, dataAll });
    //
    this.defaultSortTips();
    //
    this.setState({ searchQuery: query })




  }
  //not so important---->
  changeGroup = (group) => {
    const { dataSideBar: sideBar } = this.state;
    const dataSideBar = [...sideBar];
    const index = dataSideBar.indexOf(group)
    const selected = dataSideBar[index].selected
    if (selected === true) {
      dataSideBar[index].selected = false;
    } else {
      dataSideBar[index].selected = true;
    }
    this.setState({ dataSideBar })
  };
  renderDate = () => {
    const { dataCalendar } = this.state;
    const calendar = { ...dataCalendar };

    if (calendar.calendar.selected === false) {
      calendar.calendar.selected = true;
    } else {
      calendar.calendar.selected = false
    }
    this.setState({ dataCalendar: calendar })
  }

  //RESUABLE --->
  defaultEvents = async () => {
    setTimeout(async () => {
      const pathName = window.location.pathname;
      const path = ['/football', '/basketball', '/tennis', '/hockey', '/handball', '/american-football'];
      const index = path.indexOf(pathName);
      const endPoint = ['Fmatch', 'Bmatch', 'Tmatch', 'HOmatch', 'HAmatch', 'AFmatch'];

      const response = await axios.get(`${apiUrl}/${endPoint[index]}`);
      response.data.map(e => e.tipsA = JSON.parse(e.tipsA))
      response.data.map(e => e.tipsB = JSON.parse(e.tipsB))
      response.data.map(e => e.tipsC = JSON.parse(e.tipsC))
      response.data.map(e => e.comments = JSON.parse(e.comments))
      response.data.map(e => e.voted = JSON.parse(e.voted))
      response.data.map(e => e.metar = JSON.parse(e.metar))
      response.data.map(e => e.resultText = JSON.parse(e.resultText))
      const { dataCalendar } = this.state
      const date = dataCalendar.calendar.date
      const matchEvents = response.data
      if (response.statusText === 'OK') {
        this.changeTimeDate(matchEvents);
      }
      const events = response.data.filter(e => e.date === date)

      const uVotes = JSON.parse(window.localStorage.getItem('VOTED_EVENTS'))
      if (uVotes === null) {
      } else {
        const countEvents = uVotes.length
        for (let i = 0; i <= countEvents - 1; i++) {
          const filtered = events.filter(e => e._id === uVotes[i]._id)
          for (let y = 0; y <= 2; y++) {
            filtered.map(e => e.tipsA[y].selected = uVotes[i].tipsA[y].selected)
          }
          for (let x = 0; x <= 1; x++) {
            filtered.map(e => e.tipsB[x].selected = uVotes[i].tipsB[x].selected)
            filtered.map(e => e.tipsC[x].selected = uVotes[i].tipsC[x].selected)
          }
        }
      }
      this.setState({ dataEvents: events })

    }, 1)

  }
  defaultSideBar = () => {
    setTimeout(() => {
      const pathName = window.location.pathname;
      const path = ['/football', '/basketball', '/tennis', '/hockey', '/handball', '/american-football'];
      const index = path.indexOf(pathName);
      const sideBar = [
        getFootballSideBar(),
        getBasketballSideBar(),
        getTennisSideBar(),
        getHockeySideBar(),
        getHandballSideBar(),
        getAmericanFootballSideBar(),
      ];
      const defaultSideBar = sideBar[index];
      defaultSideBar.map(group => group.selected = false);
      defaultSideBar[0].selected = true;
      defaultSideBar.map(group => group.leagues.map(league => league.selected = false))
      this.setState({ dataSideBar: defaultSideBar });
    })

  }
  defaultCalendar = () => {
    const dataCalendar = getCalendar();
    let day = new Date().getDate();
    let month = (new Date().getMonth() + 1);
    if (day < 10) {
      day = `0${day}`
    }
    if (month < 10) {
      month = `0${month}`
    }
    const today = `${day}.${month}`;
    dataCalendar.calendar.title = 'Today'
    dataCalendar.calendar.date = today;
    dataCalendar.days.map(day => day.selected = false);
    dataCalendar.days[0].selected = true;
    dataCalendar.days
      .filter(day => day.date === today)
      .map(day => day.title = 'Today');
    this.setState({ dataCalendar })
  }
  defaultSortTips = () => {
    setTimeout(() => {
      const pathName = window.location.pathname;
      const path = ['/football', '/basketball', '/tennis', '/hockey', '/handball', '/american-football'];
      const index = path.indexOf(pathName);
      const defaultSortTips = getSortTips();
      if (path[index] === '/tennis') {
        const sortTipsB = defaultSortTips.b
        sortTipsB[0].selected = true;
        sortTipsB[1].selected = false;
        sortTipsB[2].selected = false;
        this.setState({ dataSortTips: sortTipsB });
      } else if (path[index] === '/american-football') {
        const sortTipsC = defaultSortTips.c
        sortTipsC[0].selected = true;
        sortTipsC[1].selected = false;
        sortTipsC[2].selected = false;
        this.setState({ dataSortTips: sortTipsC });
      } else {
        const sortTipsA = defaultSortTips.a
        sortTipsA[0].selected = true;
        sortTipsA[1].selected = false;
        sortTipsA[2].selected = false;
        this.setState({ dataSortTips: sortTipsA });
      }
    }, 1)

  }
  defaultAll = () => {
    const dataAll = getAll();
    dataAll.selected = true;
    this.setState({ dataAll });
  }
  defaultSearchQuery = () => {
    const searchQuery = '';
    this.setState({ searchQuery });
  }
  defaultNavBar = () => {
    const dataNavBar = getNavBar();
    this.setState({ dataNavBar });
  }
  defaultHeader = () => {
    const dataHeader = getHeader();
    this.setState({ dataHeader });

  }
  defaultHeading = () => {
    const dataHeading = getHeading();
    this.setState({ dataHeading });
  }
  changeLocalStorage = async () => {
    const response = await axios.get(`${apiUrl}/allEvents`);
    response.data.map(e => e.tipsA = JSON.parse(e.tipsA))
    response.data.map(e => e.tipsB = JSON.parse(e.tipsB))
    response.data.map(e => e.tipsC = JSON.parse(e.tipsC))
    response.data.map(e => e.comments = JSON.parse(e.comments))
    response.data.map(e => e.voted = JSON.parse(e.voted))
    response.data.map(e => e.metar = JSON.parse(e.metar))
    response.data.map(e => e.resultText = JSON.parse(e.resultText))
    const events = response.data

    const localStorage = JSON.parse(window.localStorage.getItem('VOTED_EVENTS'))
    let uVotes = [];
    if (localStorage === null) {
      this.setState({ userVotes: uVotes })
    } else {
      for (let i = 0; i <= localStorage.length - 1; i++) {
        const filtered = events.filter(e => e._id === localStorage[i]._id)
        if (filtered[0] === undefined) {
        } else {
          const found = localStorage.find(e => e._id === filtered[0]._id)
          uVotes.push(found)
        }
      }
      window.localStorage.setItem(`VOTED_EVENTS`, JSON.stringify(uVotes))
      this.setState({ userVotes: uVotes })
      this.setState({ allEvents: events })
    }
  }
  updateInDb = async (dataEvents, eIndex) => {
    await axios.put(`${apiUrl}/update`, {
      _id: dataEvents[eIndex]._id,
      tipsA: [
        { votes: dataEvents[eIndex].tipsA[0].votes, percentage: dataEvents[eIndex].tipsA[0].percentage },
        { votes: dataEvents[eIndex].tipsA[1].votes, percentage: dataEvents[eIndex].tipsA[1].percentage },
        { votes: dataEvents[eIndex].tipsA[2].votes, percentage: dataEvents[eIndex].tipsA[2].percentage }
      ],
      tipsB: [
        { votes: dataEvents[eIndex].tipsB[0].votes, percentage: dataEvents[eIndex].tipsB[0].percentage },
        { votes: dataEvents[eIndex].tipsB[1].votes, percentage: dataEvents[eIndex].tipsB[1].percentage }
      ],
      tipsC: [
        { votes: dataEvents[eIndex].tipsC[0].votes, percentage: dataEvents[eIndex].tipsC[0].percentage },
        { votes: dataEvents[eIndex].tipsC[1].votes, percentage: dataEvents[eIndex].tipsC[1].percentage }
      ],
      resultText: [
        { resultText: dataEvents[eIndex].resultText[0].resultText },
        { resultText: dataEvents[eIndex].resultText[1].resultText },
        { resultText: dataEvents[eIndex].resultText[2].resultText },
      ],
      metar: [
        { metar: dataEvents[eIndex].metar[0].metar },
        { metar: dataEvents[eIndex].metar[1].metar },
        { metar: dataEvents[eIndex].metar[2].metar },
      ],

      voted: [
        { count: dataEvents[eIndex].voted[0].count },
        { count: dataEvents[eIndex].voted[1].count },
        { count: dataEvents[eIndex].voted[2].count },
      ]
    })
  }
  updateLocalStorage = (dataEvents, eIndex) => {
    const { userVotes } = this.state
    const uVotes = [...userVotes]
    const filtered = uVotes.filter(e => e._id === dataEvents[eIndex]._id)
    if (filtered.length >= 1) {
      const tipsCountA = 3;
      const tipsCountBC = 2;
      for (let y = 0; y <= tipsCountA - 1; y++) {
        filtered[0].tipsA[y].selected = dataEvents[eIndex].tipsA[y].selected
      }
      for (let x = 0; x <= tipsCountBC - 1; x++) {
        filtered[0].tipsB[x].selected = dataEvents[eIndex].tipsB[x].selected
        filtered[0].tipsC[x].selected = dataEvents[eIndex].tipsC[x].selected
      }
      window.localStorage.setItem(`VOTED_EVENTS`, JSON.stringify(uVotes))
    } else {
      uVotes.push({
        _id: dataEvents[eIndex]._id,
        tipsA: [
          { selected: dataEvents[eIndex].tipsA[0].selected },
          { selected: dataEvents[eIndex].tipsA[1].selected },
          { selected: dataEvents[eIndex].tipsA[2].selected },
        ],
        tipsB: [
          { selected: dataEvents[eIndex].tipsB[0].selected },
          { selected: dataEvents[eIndex].tipsB[1].selected },
        ],
        tipsC: [
          { selected: dataEvents[eIndex].tipsC[0].selected },
          { selected: dataEvents[eIndex].tipsC[1].selected },
        ]
      })
      window.localStorage.setItem(`VOTED_EVENTS`, JSON.stringify(uVotes))
      this.setState({ userVotes: uVotes })
    }
  }
  changeTimeDate = (matchEvents) => {

    const hours = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    for (let n = 0; n <= matchEvents.length - 1; n++) {
      const matchHour = Number(matchEvents[n].time.slice(0, 2))
      const matchMinutes = matchEvents[n].time.slice(3, 5)
      const index = hours.indexOf(matchHour)
      const offset = -(new Date().getTimezoneOffset() / 60);
      const nIndex = index + offset;
      const mIndex = nIndex + 24;
      const iIndex = nIndex - 24;
      let newHour = 0;
      if (nIndex < 0) {
        newHour = hours[mIndex]
      } else {
        if (nIndex >= 24) {
          newHour = hours[iIndex]
        } else {
          newHour = hours[nIndex]
        }
      }
      newHour < 10 ? newHour = `0${newHour}` : newHour = newHour;
      matchEvents[n].time = `${newHour}:${matchMinutes}`
      //
      const { calendar2023 } = this.state
      const date = calendar2023.filter(day => day.date === matchEvents[n].date)
      const dIndex = calendar2023.indexOf(date[0])
      let dayLocal = new Date().getDate();
      let monthLocal = new Date().getMonth() + 1;
      dayLocal < 10 ? dayLocal = `0${dayLocal}` : dayLocal = dayLocal;
      monthLocal < 10 ? monthLocal = `0${monthLocal}` : monthLocal = monthLocal;
      let array = [];
      if (nIndex < index) {
        for (let t = nIndex; t <= index; t++) {
          array.push(hours[t])
        }
      } else if (nIndex > index) {
        for (let t = index; t <= nIndex; t++) {
          array.push(hours[t])
        }
      }
      //
      if (array.includes(0) && array[0] !== 0) {
        if (nIndex < index && nIndex < 12) {
          matchEvents[n].date = calendar2023[dIndex - 1].date

        } else if (nIndex > index && nIndex >= 12) {
          matchEvents[n].date = calendar2023[dIndex + 1].date
        }
      }
    }


  }

}

export default App;
